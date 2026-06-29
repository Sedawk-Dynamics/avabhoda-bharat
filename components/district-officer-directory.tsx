'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Search, Mail, MapPin, Building2 } from 'lucide-react'
import {
  getUniqueStates,
  getDistrictsByState,
  searchOfficers
} from '@/lib/dno-data'

export function DistrictOfficerDirectory() {
  const [selectedState, setSelectedState] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  const states = useMemo(() => getUniqueStates(), [])
  const districts = useMemo(
    () => (selectedState ? getDistrictsByState(selectedState) : []),
    [selectedState]
  )

  const handleStateChange = (state: string) => {
    setSelectedState(state)
    setSelectedDistrict('')
    setSearchResults([])
    setHasSearched(false)
  }

  const handleSearch = () => {
    if (selectedState && selectedDistrict) {
      const results = searchOfficers(selectedState, selectedDistrict)
      setSearchResults(results)
      setHasSearched(true)
    }
  }

  const formatEmail = (email: string) => {
    return email.replace(/\[dot\]/g, '.').replace(/\[at\]/g, '@')
  }

  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold italic text-gray-900 mb-4">
            District Officer Directory
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find the PoSH Act District Compliance Officer for your jurisdiction.
          </p>
        </motion.div>

        {/* Info Boxes */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">
              Role of District Officer
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Grievance resolution procedures</li>
              <li>• Monitoring compliance</li>
              <li>• Oversight of Internal Committees</li>
              <li>• Inter-agency coordination</li>
              <li>• Awareness & training</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">
              When to Engage
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Annual POSH report submission</li>
              <li>• Compliance guidance</li>
              <li>• Legal & grievance escalation</li>
              <li>• Policy coordination</li>
              <li>• Training support</li>
            </ul>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">

              <Select value={selectedState} onValueChange={handleStateChange}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedDistrict}
                onValueChange={setSelectedDistrict}
                disabled={!selectedState}
              >
                <SelectTrigger className="h-12">
                  <SelectValue
                    placeholder={
                      selectedState
                        ? 'Select District'
                        : 'Select state first'
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {districts.map((district) => (
                    <SelectItem key={district} value={district}>
                      {district}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleSearch}
              disabled={!selectedState || !selectedDistrict}
              className="w-full h-12 bg-black hover:bg-gray-800 text-white rounded-lg"
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>

        {/* Results */}
        {hasSearched && (
          <div className="space-y-6">
            {searchResults.length > 0 ? (
              <>
                <h3 className="text-lg font-semibold text-gray-900">
                  Found {searchResults.length} Officer
                </h3>

                <div className="space-y-4">
                  {searchResults.map((officer, index) => (
                    <motion.div
                      key={officer.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                    >
                      <div className="flex flex-col gap-4">

                        {/* Name */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 tracking-tight">
                            {officer.name.toUpperCase()}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {officer.district}, {officer.state}
                          </p>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-3 text-sm">
                          <Mail className="h-4 w-4 text-gray-500 mt-1" />
                          <a
                            href={`mailto:${formatEmail(officer.email)}`}
                            className="text-blue-600 hover:underline break-all"
                          >
                            {formatEmail(officer.email)}
                          </a>
                        </div>

                        <div className="border-t border-gray-100"></div>

                        {/* Location */}
                        <div className="flex items-start gap-3 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                          <div>
                            <p className="font-medium text-gray-800">
                              {officer.district} District
                            </p>
                            <p className="text-gray-500">{officer.state}</p>
                          </div>
                        </div>

                        {/* Address */}
                        {officer.address && (
                          <div className="flex gap-3 bg-gray-50/80 p-4 rounded-lg border border-gray-200">
                            <Building2 className="h-4 w-4 text-gray-600 mt-1" />
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                                Office Address
                              </p>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {officer.address}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Footer */}
                        <div className="pt-3 border-t text-xs text-gray-400">
                          Last updated:{' '}
                          {new Date().toISOString().split('T')[0]}
                        </div>

                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-gray-100 border border-gray-200 p-6 rounded-lg text-center">
                <p className="text-gray-700 font-medium">
                  No officers found.
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Try another district.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}