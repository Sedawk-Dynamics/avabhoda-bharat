#!/usr/bin/env node

/**
 * Script to parse config.yaml and integrate addresses into dno-data.ts
 * Format in config.yaml:
 * State, District
 * Office Address
 * Email
 * NA
 */

const fs = require('fs');
const path = require('path');

// Read the config.yaml file
const configPath = path.join(__dirname, '../user_read_only_context/text_attachments/config-coLtJ.yaml');
const configContent = fs.readFileSync(configPath, 'utf-8');

// Parse the config data
const lines = configContent.split('\n').filter(line => line.trim());
const addressMap = {};

for (let i = 0; i < lines.length; i += 4) {
  const locationLine = lines[i];
  const addressLine = lines[i + 1];
  const emailLine = lines[i + 2];

  if (locationLine && addressLine) {
    const [state, district] = locationLine.split(',').map(s => s.trim());
    const email = emailLine ? emailLine.trim() : '';
    
    // Create a key to match with dno-data entries
    const key = `${state}|${district}`;
    
    addressMap[key] = {
      address: addressLine,
      email: email
    };
  }
}

// Read existing dno-data.ts
const dnoPath = path.join(__dirname, '../lib/dno-data.ts');
let dnoContent = fs.readFileSync(dnoPath, 'utf-8');

// Update the interface to include address
const interfaceRegex = /export interface DNOEntry \{[\s\S]*?\}/;
const newInterface = `export interface DNOEntry {
  id: string
  state: string
  district: string
  name: string
  email: string
  address?: string
}`;

dnoContent = dnoContent.replace(interfaceRegex, newInterface);

// Generate new data entries with addresses integrated
let result = addressMap;

console.log('Address Map Generated:');
console.log(JSON.stringify(result, null, 2));
console.log('\nTotal addresses parsed:', Object.keys(result).length);

// Optional: Update dno-data.ts with new interface
// Uncomment the line below to actually write changes
// fs.writeFileSync(dnoPath, dnoContent);
// console.log('Updated dno-data.ts with new interface');
