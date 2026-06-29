// District Nodal Officers data extracted from PDF files
export interface DNOEntry {
  id: string
  state: string
  district: string
  name: string
  email: string
  address?: string
}

export const dnoData: DNOEntry[] = [
  // Tripura
  { id: 'TR-DH-01', state: 'Tripura', district: 'Dhalai', name: 'Sankhasubhra Sen', email: 'dise[dot]dh[at]gmail[dot]com', address: 'Office of The District Magistrate & Collector, DM Complex, Jawaharnagar, Ambassa, Dhalai District Tripura – 799289' },
  { id: 'TR-GM-02', state: 'Tripura', district: 'Gomati', name: 'Sanjit Rupini', email: 'disegomati[at]gmail[dot]com', address: 'Office of the District Magistrate & District Collector, Gomati District. City: Udaipur P/O: R.K Pur, PIN: 799120' },
  { id: 'TR-KW-03', state: 'Tripura', district: 'Khowai', name: 'Sujit Das', email: 'disekhowai[at]gmail[dot]com', address: 'Office of the District Magistrate & District Collector Office Tilla, Khowai - 799202' },
  { id: 'TR-NT-04', state: 'Tripura', district: 'North Tripura', name: 'Abid Hossain', email: 'north[dot]dise[at]gmail[dot]com', address: 'Office of the District Magistrate and District Collector Dharmanagar, North Tripura District PIN : 799250' },
  { id: 'TR-SP-05', state: 'Tripura', district: 'Sepahijala', name: 'Sanjoy Dey', email: 'spjdise2020[at]gmil[dot]com', address: 'Office of the District Magistrate and District Collector Bishramganj, Sepahijala District PIN : 799103' },
  { id: 'TR-ST-06', state: 'Tripura', district: 'South Tripura', name: 'Sri Prabir Debbarma', email: 'disesouthbln[at]gmail[dot]in', address: 'Office of the District Magistrate & District Collector South Tripura Belonia Pin-799155' },
  { id: 'TR-UK-07', state: 'Tripura', district: 'Unakoti', name: 'Vidyasagar Debbarma', email: 'dise[dot]unakoti[at]gmail[dot]com', address: 'Office of the District Magistrate and District Collector, Kailashahar, Unakoti Tripura, Pin Code:- 799282, State – Tripura' },
  { id: 'TR-WT-08', state: 'Tripura', district: 'West Tripura', name: 'Dipak Lal Saha', email: 'wt_dise[at]yahoo[dot]com', address: 'Senior Deputy Magistrate and DDO Office of the DM and Collector, West Tripura District Agartala, Pin 799001' },

  // Punjab
  { id: 'PB-AMR-01', state: 'Punjab', district: 'Amritsar', name: 'Meena Devi', email: 'dpoamritsar[at]rediffmail[dot]com', address: 'Office of Deputy Commissioner and District Magistrate Amritsar Cantonment, Amritsar (Punjab) -143001' },
  { id: 'PB-BRN-02', state: 'Punjab', district: 'Barnala', name: 'Pardeep Singh Gill', email: 'dpo[dot]brn[at]punjab[dot]gov[dot]in', address: 'Office of the Deputy Commissioner and District Magistrate, New District Administration Complex, Ground Floor, Barnala 148101' },
  { id: 'PB-BTH-03', state: 'Punjab', district: 'Bathinda', name: 'Pankaj Kumar', email: 'pankajmoria1990[at]gmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate, Room No 214, District Administrative Complex, Mini Secretariat, Bathinda-151001' },
  { id: 'PB-FRD-04', state: 'Punjab', district: 'Faridkot', name: 'Rattandeep Sandhu', email: 'dpofaridkot[at]gmail[dot]com', address: 'Office of Deputy Commissioner and District Magistrate Faridkot (Punjab), Room No. 202, District Administration Complex District-Faridkot PinCode- 151203' },
  { id: 'PB-FGH-05', state: 'Punjab', district: 'Fatehgarh Sahib', name: 'Gurmeet Singh', email: 'singhg2921[at]gmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate, District Administrative Complex, Fatehgarh Sahib-140407' },
  { id: 'PB-FZK-06', state: 'Punjab', district: 'Faziilka', name: 'Avdeep Kaur', email: 'dpofzk[at]punjab[dot]gov[dot]in', address: 'Office of the Deputy Commissioner and District Magistrate, Room no. 101, A block , DC office complex, Abohar Road, Fazilka 152123' },
  { id: 'PB-FRP-07', state: 'Punjab', district: 'Firozpur', name: 'Richika Nanda', email: 'poferozepur[at]gmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate, DC Office Ist Floor, DC Office, District Administrative Complex, Ferozepur Cantt 152001' },
  { id: 'PB-GRD-08', state: 'Punjab', district: 'Gurdaspur', name: 'Jasmeet Kaur', email: 'dpo[dot]gdp[at]punjab[dot]gov[dot]in', address: 'Office of the Deputy Commissioner, District Administrative Complex, Gurdaspur, Punjab 143521' },
  { id: 'PB-HOS-09', state: 'Punjab', district: 'Hoshiarpur', name: 'Mr. Gagandeep Singh', email: 'dpo[dot]hoshiarpur[at]rediffmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate, District Administrative Complex, Mini Secretariat Chandigarh Road, Hoshiarpur - 146001' },
  { id: 'PB-JLD-10', state: 'Punjab', district: 'Jalandhar', name: 'Sh. Manjinder Singh', email: 'dpojalandhar[at]rediffmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate, Jalandhar Division, Jalandhar, New Court Road, Adjoining NRI Sabha Punjab, Jalandhar 144001 - Punjab.' },
  { id: 'PB-KPH-11', state: 'Punjab', district: 'Kapurthala', name: 'Rajeev Dhanda', email: 'dpokapurthala[at]rediffmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate, DC Office, New DAC Complex, Kartarpur Road , Nurpur Dona Kapurthala - 144601' },
  { id: 'PB-LDH-12', state: 'Punjab', district: 'Ludhiana', name: 'Gulbahar Singh', email: 'dpoludhiana[at]rediffmail[dot]com', address: 'Office of the District Commissioner and District Magistrate, DC Office, Ludhiana- 141001' },
  { id: 'PB-MLK-13', state: 'Punjab', district: 'Malerkotla', name: 'Ritendar Pal Kaur', email: 'dpomalerkotla1[at]gmail[dot]com', address: 'Office of the District Commissioner and District Magistrate, College Rd, near Bdpo Office, Guru Teg Bahadur Colony, Malerkotla, Punjab 148023' },
  { id: 'PB-MNS-14', state: 'Punjab', district: 'Mansa', name: 'Khushvir Kaur', email: 'dhewmansa[at]gmail[dot]com', address: 'Office of Deputy Commissioner District Administrative Complex Mansa 151505' },
  { id: 'PB-MGA-15', state: 'Punjab', district: 'Moga', name: 'Anupriya Singh', email: 'dpomoga1[at]gmail[dot]com', address: 'Office of the Deputy Commissioner, District Administrative Complex, Mini Secretariat, Moga-142001' },
  { id: 'PB-PTH-16', state: 'Punjab', district: 'Pathankot', name: 'Amrik Singh', email: 'dpo[dot]pathankot[at]punjab[dot]gov[dot]in', address: 'Office of the Deputy Commissioner and District Magistrate, DC Office, Malikpur, Pathankot (145001), Punjab' },
  { id: 'PB-PTL-17', state: 'Punjab', district: 'Patiala', name: 'Pardeep Singh Gill', email: 'dpopatiala[at]yahoo[dot]in', address: 'Office of the Deputy Commissioner and District Magistrate, DC office District Administrative Complex Patiala - 147001' },
  { id: 'PB-RPR-18', state: 'Punjab', district: 'Rupnagar', name: 'Shruti Sharma', email: 'dporpr[at]punjab[dot]gov[dot]in', address: 'Office of the Deputy Commissioner and District Magistrate, District Administrative Complex, Mini Secretariat, Rupnagar - 140001' },
  { id: 'PB-SAS-19', state: 'Punjab', district: 'S.A.S Nagar', name: 'Nikhil Arora', email: 'dpomohali[at]rediffmail[dot]com', address: 'Deputy Commissioner’s Office District Administrative Complex, Sector 76 Sahibzada Ajit Singh Nagar SAS Nagar -160071' },
  { id: 'PB-SGR-20', state: 'Punjab', district: 'Sangrur', name: 'Ritendar Pal Kaur', email: 'dposangrur[at]rediff[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate, DC office, Off. Exchange Road, Phirni road, Pratap nagar District administration office, Sangrur, Punjab 148001' },
  { id: 'PB-SBS-21', state: 'Punjab', district: 'Shahid Bhagat Singh Nagar', name: 'Jagroop Singh', email: 'dpoofficesbsnagar[at]gmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate, DC Office, Mini Secretariat, Chandigarh Road, Shahid Bhagat Singh Nagar – 144514' },
  { id: 'PB-SMS-22', state: 'Punjab', district: 'Sri Muktsar Sahib', name: 'Rattandeep Sandhu', email: 'Dpomuktsar[at]yahoo[dot]in', address: 'Room No. 1, Ground Floor, District Administration Complex, Sri Muktsar Sahib' },
  { id: 'PB-TT-23', state: 'Punjab', district: 'Tarn Taran', name: 'Rahul Arora', email: 'dpotarntaran[at]rediffmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate, District Administration Complex, Harike Road,Tarn Taran, Punjab Pincode-143401' },

  // Puducherry
  { id: 'PY-KRL-01', state: 'Puducherry', district: 'Karaikal', name: 'ISHITA RATHI, IAS', email: 'collr[dot]kkl[at]py[dot]gov[dot]in', address: 'Office of the Collector & District Magistrate, duplex street, District Collectorate, Karaikal – 609 602, Puducherry UT.' },
  { id: 'PY-PDY-02', state: 'Puducherry', district: 'Puducherry', name: 'Kulothungan', email: 'Adcrev[at]py[dot]gov[dot]in', address: 'Office of the District Collector and District Magistrate, I – Floor, New Collectorate Building, Vazhudavoor Road, Pettaiyanchathiram, Puducherry – 605 009.' },

  // West Bengal
  { id: 'WB-24PN-01', state: 'West Bengal', district: '24 Paraganas North', name: '24-paraganas-north', email: 'dswo[dot]social[dot]northparganas20[at]gmail[dot]com', address: 'Office of The District Magistrate New Administrative Building Barasat North 24 Pargana Kolkata 700124' },
  { id: 'WB-24PS-02', state: 'West Bengal', district: '24 Paraganas South', name: 'Sanjeeb Rakshit', email: 'dswos24[at]gmail[dot]com', address: 'Office of the District Magistrate New Administrative Building Thackery Road Alipore, South 24 Paraganas Kolkata -700027' },
  { id: 'WB-APD-03', state: 'West Bengal', district: 'Alipurduar', name: 'Alipurduar', email: 'rdmapd[dot]sw[at]gmail[dot]con', address: 'Office of the District Magistrate, New Administratve Building Alipurduar Court, Pin.736122 Alipurduar' },
  { id: 'WB-BKR-04', state: 'West Bengal', district: 'Bankura', name: 'Bankura', email: 'dswobankura2024[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate, Administrative Building, Bankura Collectorate, Bankura, West Bengal 722101' },
  { id: 'WB-BRH-05', state: 'West Bengal', district: 'Birbhum', name: 'Birbhum', email: 'dswo[dot]bir[at]gmial[dot]com', address: 'Office of the District Magistrate and Collector, Administrative Building, Suri Main Road, Suri, Birbhum, West Bengal 731101' },
  { id: 'WB-CBR-06', state: 'West Bengal', district: 'Cooch Behar', name: 'Ranajit Natta', email: 'socialwelfare[dot]cbr[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate, Cooch Behar, West Bengal 736101' },
  { id: 'WB-DRJ-07', state: 'West Bengal', district: 'Darjeeling', name: 'Darjeeling', email: 'dswdarjeeling[at]gmail[dot]com', address: 'Office Of The District Magistrate. Kutchery Building, Lebong CartRoad Darjeeling, West Bengal Pin-734101' },
  { id: 'WB-DKS-08', state: 'West Bengal', district: 'Dinajpur Dakshin', name: 'Dinajpur Dakshin', email: 'dswo[dot]dd[at]gmail[dot]com', address: 'Office of the District Magistrate and Collector, Manisha Rd, Chakbhabani, Balurghat, West Bengal 733101' },
  { id: 'WB-DKU-09', state: 'West Bengal', district: 'Dinajpur Uttar', name: 'Malay Chatterjee', email: 'dswoud[at]gmail[dot]com', address: 'District Magistrate Office, Karnajora, Raiganj, West Bengal 733143' },
  { id: 'WB-HGL-10', state: 'West Bengal', district: 'Hooghly', name: 'Hooghly', email: 'hooghly sw2020[at]gmail[dot]com', address: 'Office of the District Magistrate New Administrative Building (2nd Floor), P.O – Chinsurah District: Hooghly, Pin-712101' },
  { id: 'WB-HWH-11', state: 'West Bengal', district: 'Howrah', name: 'DSWO, Howrah', email: 'dswohowrah[at]gmail[dot]com', address: 'District Magistrate and Collector, New Collectorate Building, 6, Rishi Bankim Chandra Road, Shree Market, Howrah Maidan, West Bengal - 711101' },
  { id: 'WB-JPG-12', state: 'West Bengal', district: 'Jalpaiguri', name: 'Jalpaiguri', email: 'dswo_jalpaiguri[at]yahoo[dot]com', address: 'District Magistrate Office, Collectorate Ave, Jalpaiguri, West Bengal 735101' },
  { id: 'WB-JGM-13', state: 'West Bengal', district: 'Jhargram', name: 'DSWO', email: 'dswojgm[at]gmail[dot]com', address: 'Office of the District Magistrate and Collector, SH 5, Jhargram, West Bengal 721514' },
  { id: 'WB-KLP-14', state: 'West Bengal', district: 'Kalimpong', name: 'Dichen Nimad', email: 'swokalimpong[at]gmail[dot]com', address: 'Office of the District Magistrate, Kalimpong Khasmahal, Kalimpong, West Bengal 734301' },
  { id: 'WB-KLK-15', state: 'West Bengal', district: 'Kolkata', name: 'Smt. Suchismita Misra', email: 'dc-iucaw[at]kolkatapolice[dot]gov[dot]in', address: 'Office of District Collector 21, Netaji Subhash Road, Fairley Place, BBD Bagh, Kolkata West Bengal, 700001' },
  { id: 'WB-MLD-16', state: 'West Bengal', district: 'Maldah', name: 'Alpana Das', email: 'fodro[dot]mld[at]gmail[dot]com', address: 'District Magistrate & Collector Office of the District Magistrate & Collectorate New Collectorate Building Malda, West Bengal PIN – 732101' },
  { id: 'WB-MED-17', state: 'West Bengal', district: 'Medinipur East', name: 'Sudipta Biswas', email: 'dsw[dot]purbamedinipur[at]gmail[dot]com', address: 'Office of the District Magistrate Administrative Building New Administrative Building (2nd Floor), Nimtouri, Ganapatinagar, Sonamui, Tamluk Purba Medinipur – 721648' },
  { id: 'WB-MEW-18', state: 'West Bengal', district: 'Medinipur West', name: 'Shamita Bhattacharjee', email: 'pmdswo[at]gmail[dot]com', address: 'Office Of The District Magistrate, Paschim Medinipur, Midnapore, West Bengal 721101' },
  { id: 'WB-MRS-19', state: 'West Bengal', district: 'Murshidabad', name: 'Murshidabad', email: 'msddswo[at]gmail[dot]com', address: 'Office of the District Magistrate, New Administrative Building, District: Murshidabada – 742101' },
  { id: 'WB-ND-20', state: 'West Bengal', district: 'Nadia', name: 'Shamita Bhattacharjee', email: 'dsw[dot]nadia2015[at]gmail[dot]com', address: 'Office of the District Magistrate and Collector, Nadia, Krishnanagar, West Bengal 741101' },
  { id: 'WB-PBD-21', state: 'West Bengal', district: 'Paschim Bardhaman', name: 'Nimai Chandra Roy', email: 'dswopaschimbdn[at]gmail[dot]com', address: 'Office of the District Magistrate, ADDA Administrative Building, Kanyapur, P.O.: Ramkrishna Mission, Opposite DAV Public School. Pincode: 713305 West Bengal' },
  { id: 'WB-PBN-22', state: 'West Bengal', district: 'Purba Bardhaman', name: 'Purba Bardhaman', email: 'dswo[dot]bwn[at]gmail[dot]com', address: 'Office of the District Magistrate New Administrative Building (3rd Floor), Collectorate Building Purba Bardhaman, Pin-713101' },
  { id: 'WB-PRL-23', state: 'West Bengal', district: 'Purulia', name: 'Sandip Mandal', email: 'dswopurulia2015[at]gmail[dot]com', address: 'District Magistrate Office, Bus Stand Rd, Purulia, West Bengal 723101' },

  // Rajasthan
  { id: 'RJ-AJM-01', state: 'Rajasthan', district: 'Ajmer', name: 'Megha Ratan', email: 'ajmer[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, Collectorate, Civil Lines, Ajmer, Rajasthan 305001' },
  { id: 'RJ-ALW-02', state: 'Rajasthan', district: 'Alwar', name: 'Rishiraj Singh', email: 'alwar[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, Collectorate Office, Mohalla Ladiya, Alwar, Rajasthan 301001' },
  { id: 'RJ-BMR-03', state: 'Rajasthan', district: 'Barmer', name: 'Prahlad Singh Rajpurohit', email: 'barmer[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, District Collectorate Office Madhuban Colony, P S Parisar Colony, Barmer, Rajasthan 344001' },
  { id: 'RJ-BSR-04', state: 'Rajasthan', district: 'Banswara', name: 'Laxman Singh', email: 'Banswara[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, District Collectorate Office, Najmi Bagh, Nai Abadi, Banswara, Rajasthan 327001' },
  { id: 'RJ-BRN-05', state: 'Rajasthan', district: 'Baran', name: 'Assistant Director', email: 'baran[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, Collector and Magistrate Office, SH-37A, Baran, Baran, Rajasthan 325218' },
  { id: 'RJ-JDH-06', state: 'Rajasthan', district: 'Jaipur', name: 'Dr Rajesh Dogiwal', email: 'JAIPUR[dot]WE[at]RAJASTHAN[dot]GOV[dot]IN', address: 'Office District Collector and District Magistrate, COLLECTORATE CAMPUS, 230, Madho Singh Rd, Bani Park, Jaipur, Rajasthan 302006' },
  { id: 'RJ-JSL-07', state: 'Rajasthan', district: 'Jaisalmer', name: 'Ashok Kumar Goyal', email: 'jaisalmer[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, Karyalaya Collector Avam Jila Magistrate, Jaisimer To Dhanana Via Sam Road, Police Line, Jaisalmer, Rajasthan 345001' },
  { id: 'RJ-JLR-08', state: 'Rajasthan', district: 'Jalore', name: 'Laxman Singh', email: 'jalore[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, Collector Office SH-16, Jalore Rd, Jalore, Rajasthan 343001' },
  { id: 'RJ-JHW-09', state: 'Rajasthan', district: 'Jhalawar', name: 'Satya Narayan Navariya', email: 'jhalawar[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, Collectorate Jhalawar, Sai Nath Puram, Jhalawar, Rajasthan 326001' },
  { id: 'RJ-JHJ-10', state: 'Rajasthan', district: 'Jhunjhunu', name: 'Viplav Neola', email: 'jhunjhunu[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, DC Office Main Road, Indra Nagar, Jhunjhunu, Rajasthan 333001' },
  { id: 'RJ-JDH-11', state: 'Rajasthan', district: 'Jodhpur', name: 'Pharsaram Vishnoi', email: 'jodhpur[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, Collectorate, Collectorate Campus Building, High Ct Rd, Kachari Parisar, Paota, Jodhpur, Rajasthan 342001' },
  { id: 'RJ-KRL-12', state: 'Rajasthan', district: 'Karauli', name: 'Anirudh Sharma', email: 'karauli[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, Collector’s Office Collectorate Circle, Karauli, Rajasthan 322241' },
  { id: 'RJ-KTA-13', state: 'Rajasthan', district: 'Kota', name: 'Manoj Kumar Meena', email: 'kota[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, Kota District Collectorate, Civil Lines, Nayapura, Kota, Rajasthan 324001' },
  { id: 'RJ-NGR-14', state: 'Rajasthan', district: 'Nagaur', name: 'Jitendra Sharma', email: 'Nagaur[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, Nagaur Road, RJ SH 19, Nagaur, Rajasthan 341001' },
  { id: 'RJ-PLI-15', state: 'Rajasthan', district: 'Pali', name: 'Bhagirathi', email: 'pali[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, Collectorate & SP Office, Jai Narayan Vyas Colony, Pali, Rajasthan 306401' },
  { id: 'RJ-PRT-16', state: 'Rajasthan', district: 'Pratapgarh', name: 'Neha Mathur', email: 'popratapgarh[at]gmail[dot]com', address: 'Office District Collector and District Magistrate, DM Office, kutchery road, Pratapgarh, Uttar Pradesh 230001' },
  { id: 'RJ-RJS-17', state: 'Rajasthan', district: 'Rajsamand', name: 'Rashmi Koushi', email: 'rajsamand[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, District Collectorate, kishor Nagar, Rajsamand, Rajasthan 313333' },
  { id: 'RJ-SKR-18', state: 'Rajasthan', district: 'Sikar', name: 'Rajendra Kumar Choudhary', email: 'rchoudhary[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, NH 11, near Jj, Doliyon Ka Bass, Sikar, Rajasthan 332001' },
  { id: 'RJ-SRI-19', state: 'Rajasthan', district: 'Sirohi', name: 'Ankita Rajpurohit', email: 'ankita2015raj[at]gmail[dot]com', address: 'Office District Collector and District Magistrate, NH 14, Sirohi - Sheoganj Road, Sirohi, Rajasthan 307001' },
  { id: 'RJ-TNK-20', state: 'Rajasthan', district: 'Tonk', name: 'Maringtan Soni', email: 'tonk[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, Civil Line, Tonk, Rajasthan 304001' },
  { id: 'RJ-UDR-21', state: 'Rajasthan', district: 'Udaipur', name: 'Sanjay Joshi', email: 'udaipur[dot]we[at]rajasthan[dot]gov[dot]in', address: 'Office District Collector and District Magistrate, Collectorate Rd, Near Delhi Gate, Shakti Nagar, Udaipur, Rajasthan 313001' },

  // Uttarakhand
  { id: 'UK-ALM-01', state: 'Uttarakhand', district: 'Almora', name: 'Pitamber Prasad', email: 'icdsalmora[at]gmail[dot]com', address: 'Office of the District Magistrate, Kachehari, Basar, Uttarakhand 263601' },
  { id: 'UK-BGS-02', state: 'Uttarakhand', district: 'Bageshwar', name: 'Smt. Shilpy Pant', email: 'projectdirectorbageshwar[at]gmail[dot]com', address: 'Office of the District Magistrate, SH 37, District Administration, Collectorate Bageshwar, Uttarakhand 263642' },
  { id: 'UK-CML-03', state: 'Uttarakhand', district: 'Chamoli', name: 'Chamoli', email: 'dmoffice[dot]chamoli[at]gmail[dot]com', address: 'Office of the District Magistrate, Collectorate Compound - 246401 Gopeshwar' },
  { id: 'UK-CHP-04', state: 'Uttarakhand', district: 'Champawat', name: 'Nitesh Dangar', email: 'sdmpati16[at]gmail[dot]com', address: 'Office of the District Magistrate Collectorate Compound Srikhand Chaur Champawat ( Uttarakhand) Pin - 262523' },
  { id: 'UK-DHR-05', state: 'Uttarakhand', district: 'Dehradun', name: 'Jai Bharat Singh', email: 'admfr[dot]deh[at]gmail[dot]com', address: 'Office of the District Magistrate 15-17, Nardev Shastri Marg, Race Course, Dehradun, Uttarakhand 248001' },
  { id: 'UK-HDW-06', state: 'Uttarakhand', district: 'Haridwar', name: 'Kailash Nath Tiwari', email: 'pddrda2007[at]gmail[dot]com', address: 'Office of the District Magistrate Collectrate Bhawan, Roshanabad, Haridwar, Uttarakhand 249403' },
  { id: 'UK-NNT-07', state: 'Uttarakhand', district: 'Nainital', name: 'A.P Bajpai', email: 'cmhaldwani[at]gmail[dot]com', address: 'Office of the District Magistrate Near Talli Tal Nainital - 263001' },
  { id: 'UK-PGW-08', state: 'Uttarakhand', district: 'Pauri Garhwal', name: 'Mrs. Manvinder Kaur', email: 'ddopauri[at]gmail[dot]com', address: 'Office of the District Magistrate Dhara Rd, Pauri, Uttarakhand 246001' },
  { id: 'UK-PTR-09', state: 'Uttarakhand', district: 'Pithoragarh', name: 'Kavita Bhagat', email: 'cdspithoragarh2[at]gmail[dot]com', address: 'Office of the District Magistrate Pithoragarh, Uttarakhand, 262501' },
  { id: 'UK-RDP-10', state: 'Uttarakhand', district: 'Rudra Prayag', name: 'Rudra Prayag', email: 'icdsrudraprayag[at]gmail[dot]com', address: 'Office of the District Magistrate Chopta Pokhari Road, Rudraprayag, Uttarakhand 246171' },
  { id: 'UK-TGW-11', state: 'Uttarakhand', district: 'Tehri Garhwal', name: 'Nitika Khandewal', email: 'dmtehri[at]gmail[dot]com', address: 'Office of the District Magistrate New Tehri, Uttarakhand 249001' },
  { id: 'UK-USN-12', state: 'Uttarakhand', district: 'Udam Singh Nagar', name: 'Vyoma Jain', email: 'dpw-welfare-usn[at]UK[dot]gov[dot]in', address: 'Office of the District Magistrate Collectorate Compound Udham Singh Nagar, Uttarakhand 263153' },
  { id: 'UK-UTK-13', state: 'Uttarakhand', district: 'Uttar Kashi', name: 'Ms. Mukta Mishra', email: 'admuttarkashi[at]gmail[dot]com', address: 'Office of the District Magistrate District Collectorate, Uttakarshi, Uttarakhand, 249193' },

  // Dadra and Nagar Haveli

  {
    id: 'DN-DNH-01',
    state: 'Dadra and Nagar Haveli and Daman and Diu',
    district: 'Dadra and Nagar Haveli',
    name: 'Amit Kumar',
    email: 'dhewdnh[at]gmail[dot]com',
    address: 'Office of the Deputy Commissioner, Collectorate, Silvassa, Dadra and Nagar Haveli – 396230'
  },
  {
    id: 'DN-DMN-02',
    state: 'Dadra and Nagar Haveli and Daman and Diu',
    district: 'Daman',
    name: 'Social Welfare Officer',
    email: 'missionshaktidnhdd[at]gmail[dot]com',
    address: 'Office of the District Collector and District Magistrate, Collectorate, Daman – 396210'
  },
  {
    id: 'DN-DIU-03',
    state: 'Dadra and Nagar Haveli and Daman and Diu',
    district: 'Diu',
    name: 'Shivam Mishra',
    email: 'icds[dot]diu[at]gmail[dot]com',
    address: 'Office of the District Collector and District Magistrate, Collectorate, Diu – 362520'
  }
  ,

  // Telangana
  { id: 'TG-ADL-01', state: 'Telangana', district: 'Adilabad', name: 'K. Milkha', email: 'dicds[dot]adbd[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate, Collectorate, Adilabad – 504001, Telangana' },
  { id: 'TG-BKG-02', state: 'Telangana', district: 'Bhadradri Kothagudem', name: 'J.M. Swarnalatha Lenina', email: 'dwokothagudem[at]gmail[dot]com', address: 'Office of District Collector & Magistrate Opposite Kothagudem Club, N.K.Nagar, Writer Basti, Kothagudem, Telangana 507101' },
  { id: 'TG-HYD-03', state: 'Telangana', district: 'Hyderabad', name: 'Sri. E. Akkeshwar Rao', email: 'pd[dot]wdcwhyd[at]gmail[dot]com', address: 'Office of the District Collector, 6-2-10, Lakdikapul, Hyderabad, 500004' },
  { id: 'TG-JGT-04', state: 'Telangana', district: 'Jagitial', name: 'K. Raj Kumar', email: 'dwojagtial[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate, NH 16, Ganesh Nagar, Puranipet, Jagtial, Telangana 505327' },
  { id: 'TG-JNG-05', state: 'Telangana', district: 'Jangaon', name: 'Kodanda Ramulu', email: 'dwojagaon[at]gmail[dot]com', address: 'Office Of Collector & District Magistrate, Jangaon District Suryapet Rd, Jangaon, Telangana 506167' },
  { id: 'TG-JYS-06', state: 'Telangana', district: 'Jayashankar Bhupalapally', name: 'G. Malleshwari', email: 'dwojayashankar[at]gmail[dot]com', address: 'Officer of District Collector and District Magistrate, Manjoor Nagar, Bhupalpally, Telangana – 506169' },
  { id: 'TG-JGL-07', state: 'Telangana', district: 'Jogulamba Gadwal', name: 'D Sunanda', email: 'dwogad[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate, District Collectorate, PJP Camp, Jogulamba Gadwal, Telangana State - 509125' },
  { id: 'TG-KMR-08', state: 'Telangana', district: 'Kamareddy', name: 'A. Prameela', email: 'dwo[dot]wcdsc[at]gmail[dot]com', address: 'Office of the District Collector & District Magistrate Room No.1, Ground Floor, Integrated District Offices Complex, Kamareddy - 503111' },
  { id: 'TG-KRN-09', state: 'Telangana', district: 'Karimnagar', name: 'M Saraswathi', email: 'dhewkarimnagar[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate, Collectorate Karimnagar, Mukarampura, Karimnagar, Telangana 505001' },
  { id: 'TG-KHM-10', state: 'Telangana', district: 'Khammam', name: 'V. Vijatha', email: 'dwokhammam[at]gmail[dot]com' },
  { id: 'TG-KBA-11', state: 'Telangana', district: 'Kumuram Bheem Asifabad', name: 'Dr. A. Bhaskar', email: 'dwoasifabad[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate. Collectorate, Kumuram Bheem Asifabad - 504293' },
  { id: 'TG-MBD-12', state: 'Telangana', district: 'Mahabubabad', name: 'M. Sabitha', email: 'dwo[dot]wcdsc[dot]mbd[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate, Mahabubabad, Telangana 506101' },
  { id: 'TG-MBN-13', state: 'Telangana', district: 'Mahabubnagar', name: 'S. Zarina Begum', email: 'dwombnr[at]gmail[dot]com' },
  { id: 'TG-MCH-14', state: 'Telangana', district: 'Mancherial', name: 'Rauf Khan', email: 'dwo[dot]mancherial[at]gmail[dot]com' },
  { id: 'TG-MDK-15', state: 'Telangana', district: 'Medak', name: 'V. Hema Bhargavi', email: 'dwomedak[at]gmail[dot]com', address: 'Officer of District Collector and Magistrate, Integrated Collectorate Complex, Medak - 502110' },
  { id: 'TG-MEC-16', state: 'Telangana', district: 'Medchal Malkajgiri', name: 'Smt. M. Saradha', email: 'dwowcdscmedchal[at]gmail[dot]com' },
  { id: 'TG-MLG-17', state: 'Telangana', district: 'Mulugu', name: 'E.P. Premalathat', email: 'dwo[dot]wcdsc[dot]mulugu[at]gmail[dot]com' },
  { id: 'TG-NGK-18', state: 'Telangana', district: 'Nagarkurnool', name: 'K. Rajeshwari', email: 'dwongkl99[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate, Collectorate, Abbas Nagar Main Road, Nagarkurnool, Srinagar - Kanyakumari Hwy, Kurnool, Telangana 518002' },
  { id: 'TG-NLG-19', state: 'Telangana', district: 'Nalgonda', name: 'K.V. Krishnaven', email: 'nlgwdcw[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate, Nalgonda Collectorate, Miryalaguda Rd, Srinivasa Colony BTS, Nalgonda, Telangana 508001' },
  { id: 'TG-NRY-20', state: 'Telangana', district: 'Narayanpet', name: 'Sanchit Gangwar', email: 'dwonrpt[at]gmail[dot]com' },
  { id: 'TG-NRM-21', state: 'Telangana', district: 'Nirmal', name: 'Faizal Ahmed', email: 'dwonirmal[at]gmail[dot]com', address: 'Office of the District Collector & Magistrate Collectorate, Old NH 7 Rd, Shastri Nagar, Indira Nagar, Nirmal, Telangana 504106' },
  { id: 'TG-NZB-22', state: 'Telangana', district: 'Nizamabad', name: 'Sri T. Vinay Krishna Reddy', email: 'dwo[dot]wcdsc[dot]nzb1[at]gmail[dot]com', address: 'Office of the Collector and District Magistrate, Integrated District Office Complex (IDOC), District Nizamabad, Telangana - 503001' },
  { id: 'TG-PDP-23', state: 'Telangana', district: 'Peddapalli', name: 'P. Venu Gopal', email: 'dwopeddapally[at]gmail[dot]com', address: 'Office of the Collector & District Magistrate, District Collectorate Complex, Peddapalli 505172' },
  { id: 'TG-RJS-24', state: 'Telangana', district: 'Rajanna Sircilla', name: 'P. Laxmi Rajam', email: 'dwosiricilla[at]gmail[dot]com', address: 'Office of the Collector & District Magistrate, New Integrated District Offices Complex, Rajanna Sircilla, 505301' },
  { id: 'TG-RRD-25', state: 'Telangana', district: 'Ranga Reddy', name: 'L. Srilatha', email: 'dhewrrd[at]gmail[dot]com', address: 'Office of the District Collector and Magistrate, Ranga Reddy District, Lakdikapul, Telangana - 501510' },
  { id: 'TG-SGR-26', state: 'Telangana', district: 'Sangareddy', name: 'K. Lalitha Kumari', email: 'dwosrd[at]gmail[dot]com', address: 'Office of the Collector & District Magistrate, Integrated Collectorate Complex, Sangareddy – 502001' },
  { id: 'TG-SDP-27', state: 'Telangana', district: 'Siddipet', name: 'Ch. Sharada', email: 'dwosiddipet[at]gmail[dot]com', address: 'Office of the Collector & District Magistrate, Integrated District Offices Complex, Duddeda(V), Kondapak(M), Siddipet(D), Telangana, 502277' },
  { id: 'TG-SRY-28', state: 'Telangana', district: 'Suryapet', name: 'K. Narasimha Rao', email: 'dwosuryapet[at]gmail[dot]com', address: 'Office Of District Collector, 4M48+6JV, Suryapet, Telangana 508213' },
  { id: 'TG-VKB-29', state: 'Telangana', district: 'Vikarabad', name: 'Smt. B. Krishnavenl', email: 'dwowcdscvkb[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate, Vikarabad District Collectorate Vikarabad, Telangana 501102' },
  { id: 'TG-WNP-30', state: 'Telangana', district: 'Wanaparthyi', name: 'K. Sudha Rani', email: 'dwownp2023[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate, Collectorate Complex, Wanaparthy-509103, Telangana' },
  { id: 'TG-WRR-31', state: 'Telangana', district: 'Warangal Rural', name: 'B. Rajamani', email: 'dwo[dot]wcdsc[dot]warangal[at]gmail[dot]com', address: 'Office of the Collector & District Magistrate, Collectorate Warangal, NH163, Balasamudram, Hanumakonda, Telangana – 506001' },
  { id: 'TG-WRU-32', state: 'Telangana', district: 'Warangal Urban', name: 'J. Jayanthi', email: 'dwo[dot]wcdsc[dot]wglu[at]gmail[dot]com' },
  { id: 'TG-YBV-33', state: 'Telangana', district: 'Yadadri Bhuvanagiri', name: 'K. Narasimha Rao', email: 'dwoyadwcdsc[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate, Yadadri Bhuvanagiri District, Telangana - 508116' },

  // Uttar Pradesh (Sample - due to length)
  { id: 'UP-AGR-01', state: 'Uttar Pradesh', district: 'Agra', name: 'Agra DPO', email: 'dpoagra17[at]gmail[dot]com', address: 'Office of the District Magistrate, 26, Mahatma Gandhi Rd, Bank Colony, Panchkuian, Rakabganj, Agra, Uttar Pradesh 282010' },
  { id: 'UP-ALG-02', state: 'Uttar Pradesh', district: 'Aligarh', name: 'Ajit Kumar', email: 'districtprovetionaligarh[at]gmail[dot]com', address: 'Office of the District Magistrate, District E-Governance Cell, New Collectorate Building, Gate No.0-3 Jamalpur Road, Aligarh, Uttar Pradesh 202001' },
  { id: 'UP-ALL-03', state: 'Uttar Pradesh', district: 'Allahabad', name: 'Manish Kumar Verma', email: 'dmall[at]nic[dot]in', address: 'Office of the District Magistrate, Dwarika Puri, Old Katra, Prayagraj, Uttar Pradesh 211002' },
  { id: 'UP-LCK-04', state: 'Uttar Pradesh', district: 'Lucknow', name: 'Mr. Sudhakar Saran Pandey', email: 'lkodpo34[at]gmail[dot]com', address: 'Room No 49, District Magistrate Office, Qaiserbagh, Lucknow 226001' },
  { id: 'UP-VNS-05', state: 'Uttar Pradesh', district: 'Varanasi', name: 'Pankaj Kumar Mishra', email: 'dpovaranasi1[at]gmail[dot]com', address: 'District Magistrate Office, Collectorate Compound, Hamrautia, Varanasi, Uttar Pradesh 221102' },

  // Sikkim
  { id: 'SK-GGT-01', state: 'Sikkim', district: 'Gangtok', name: 'Mrs. Manikala Gurung', email: 'manikalagurung1988[at]gmail[dot]com', address: 'Social Welfare Department, Office of the District Collector, Gangtok, Sikkim 737101' },
  { id: 'SK-GYL-02', state: 'Sikkim', district: 'Gyalshing', name: 'Mrs. Sanju Rai', email: 'sanjuray0016[at]gmail[dot]com', address: 'Social Welfare Department, Office of the District Collector, Gyalshing, West Sikkim 737111' },
  { id: 'SK-MNG-03', state: 'Sikkim', district: 'Mangan', name: 'Mrs. Ganga Kumari Gurung', email: 'gangakumarigurung7[at]gmail[dot]com', address: 'Social Welfare Department, Office of the District Collector, Mangan, North Sikkim 737116' },
  { id: 'SK-NMC-04', state: 'Sikkim', district: 'Namchi', name: 'Mrs. Bimala Thatal', email: 'bimalathatal[at]gmail[dot]com', address: 'Social Welfare Department, Office of the District Collector, Namchi, South Sikkim 737126' },
  { id: 'SK-PKY-05', state: 'Sikkim', district: 'Pakyong', name: 'Mrs. Tenzin Choden Lepcha', email: 'tzinchoden[at]gmail[dot]com', address: 'Social Welfare Department, Office of the District Collector, Pakyong, East Sikkim 737106' },
  { id: 'SK-SRG-06', state: 'Sikkim', district: 'Soreng', name: 'Mrs. Gauri Tamang', email: 'gauritamang0127[at]gmail[dot]com', address: 'Social Welfare Department, Office of the District Collector, Soreng, West Sikkim 737107' },

  // Kerala
  { id: 'KL-ALP-01', state: 'Kerala', district: 'Alappuzha', name: 'District Women and Child Development Officer', email: 'dwcdoalpy[at]gmail[dot]com', address: 'Office of the district collector and District Magistrate, 1st Floor, Collectorate, Alappuzha, Kerala, India, PIN - 688 001' },
  { id: 'KL-ERN-02', state: 'Kerala', district: 'Ernakulam', name: 'District Women and Child Development Officer', email: 'dwcdekm[at]gmail[dot]com', address: 'Office of the district collector, District Collectorate First Floor, Civil station, Kakkanad, Ernakulam - 682030' },
  { id: 'KL-IDK-03', state: 'Kerala', district: 'Idukki', name: 'District Women and Child Development Department', email: 'wcdoidukki[at]gmail[dot]com', address: 'Office of District Collector & District Magistrate, Civil Station Painavu P O Idukki, Kuyilimala, Kerala PIN - 685603' },
  { id: 'KL-KNN-04', state: 'Kerala', district: 'Kannur', name: 'DNO Kannur', email: 'kannurwcdkannur[at]gmail[dot]com', address: 'Office of the District Collector & District Magistrate Collectorate Rd, Thavakkara, Kannur, Kerala - 670002' },
  { id: 'KL-KSG-05', state: 'Kerala', district: 'Kasaragod', name: 'DNO Kasaragod', email: 'Kasaragodharigreenmansion[at]gmail[dot]com', address: 'Office Of District Collector, CD Block, First floor, Collectorate, Civil Station, Vidyanagar Kasaragod - 671123' },
  { id: 'KL-KLM-06', state: 'Kerala', district: 'Kollam', name: 'District Women and Child Development Office', email: 'bijiajayakumar[at]gmail[dot]com', address: 'Office of the District Colelctor and District Magistrate, DC Office, Civil Station, Kollam - 691013, Kerala.' },
  { id: 'KL-KTM-07', state: 'Kerala', district: 'Kottayam', name: 'District Women and Child Development Project Officer', email: 'dwcdokottayam[at]gmail[dot]com', address: 'Office of the District Colelctor and District Magistrate, DC Office, Kottayam - Kumily Rd, Collectorate, Kottayam, Kerala 686002' },
  { id: 'KL-KZH-08', state: 'Kerala', district: 'Kozhikode', name: 'DNO Kozhikode', email: 'kozhikodedwcdokkd[at]gmail[dot]com', address: 'Office of District Collector & District Magistrate, Wayanad Rd, Civil Station, Eranhippalam, Kozhikode, Kerala 673020' },
  { id: 'KL-MLP-09', state: 'Kerala', district: 'Malappuram', name: 'DNO Malappuram', email: 'malappuramdwcdompm[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Collectorate, Civil station, Malappuram - 676505' },
  { id: 'KL-PLK-10', state: 'Kerala', district: 'Palakkad', name: 'District Women and Child Development Officer', email: 'dwcdopalakkad[at]gmail[dot]com', address: 'Office of the District Collector & District Magistrate Collectorate, Civil Station, Palakkad - 678 001' },
  { id: 'KL-PTA-11', state: 'Kerala', district: 'Pathanamthitta', name: 'District Women and Child Development Officer', email: 'wcdpta[at]gmail[dot]com', address: 'Office of the District Collector & District Magistrate, 2nd Floor, District Collectorate, Pathanamthitta, Kerala-689645' },
  { id: 'KL-TVR-12', state: 'Kerala', district: 'Thiruvananthapuram', name: 'District Women and Child Development Officer', email: 'dno-thiruvananthapuram[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate Collectorate Kudappanakunnu 695043, Thiruvananthapuram, Kerala' },
  { id: 'KL-TSR-13', state: 'Kerala', district: 'Thrissur', name: 'District Women and Child Development Officer', email: 'dwcdotsr[at]gmail[dot]com', address: 'Office of the District Collector and District Magistrate, DC Office, Civil Station, Ayyanthole, Thrissur 680 003' },
  { id: 'KL-WYD-14', state: 'Kerala', district: 'Wayanad', name: 'DNO Wayanad', email: 'wayanadwcdwyd[at]gmail[dot]com', address: 'Office of District Collector & District Magistrate, collectorate Wayanad, North kalpetta P.O Wayanad 673122' },

  // Ladakh
  { id: 'LD-KRG-01', state: 'Ladakh', district: 'Kargil', name: 'Nargis Banood', email: 'poicdskargil[at]gmail[dot]com' },
  { id: 'LD-LEH-02', state: 'Ladakh', district: 'Leh Ladakh', name: 'A.G Zargarh', email: 'dhewleh2023[at]gmail[dot]com' },

  // Meghalaya
  { id: 'MG-EGH-01', state: 'Meghalaya', district: 'East Garo Hills', name: 'Silnang D Shirads', email: 'wowilliamnagar[at]gmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate, DC Office Rd, Williamnagar, Meghalaya 794111' },
  { id: 'MG-EJH-02', state: 'Meghalaya', district: 'East Jaintia Hills', name: 'Rica Bareh', email: 'ricabareh1981[at]gmail[dot]com', address: 'Office of The Deputy Commissioner, East Jaintia Hills District, Khliehriat - 793 200' },
  { id: 'MG-EKH-03', state: 'Meghalaya', district: 'East Khasi Hills', name: 'Smti Olivia C. Nongbri', email: 'dswoekh2014[at]gmail[dot]com', address: 'Office of the Deputy Commissioner and Dsitrict Magistrate, Shillong 793001' },
  { id: 'MG-EWK-04', state: 'Meghalaya', district: 'Eastern West Khasi Hills', name: 'Smt.D.Pakyntein', email: 'graciapakyntein[at]gmail[dot]com', address: 'Office of Shri Wilfred Nongsiej, IAS, Deputy Commissioner, Eastern West Khasi Hills District, Mairang 793120' },
  { id: 'MG-NGH-05', state: 'Meghalaya', district: 'North Garo Hills', name: 'Smt. Norimchi A. Sangma', email: 'nsangma2[at]gmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate North Garo Hills District Resubelpara Meghalaya – 794108' },
  { id: 'MG-RBH-06', state: 'Meghalaya', district: 'Ri Bhoi', name: 'Smti. N. F. Sun', email: 'dsworbd[at]gmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate, Nongpoh, Ri Bhoi District, Meghalaya, India-793102' },
  { id: 'MG-SGH-07', state: 'Meghalaya', district: 'South Garo Hills', name: 'Shri S. S. Koch', email: 'dswosghbaghmara[at]gmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate, Baghmara, Meghalaya 794102' },
  { id: 'MG-SWG-08', state: 'Meghalaya', district: 'South West Garo Hills', name: 'Smt. Z.R Marak', email: 'dswo[dot]swgh2013[at]gmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate, Way to DC Office, South West Garo Hills, Ampati, Meghalaya 794115' },
  { id: 'MG-SWK-09', state: 'Meghalaya', district: 'South West Khasi Hills', name: 'Evershine Tariang', email: 'dswoswkh[at]gmail[dot]com' },
  { id: 'MG-WGH-10', state: 'Meghalaya', district: 'West Garo Hills', name: 'Smt. Madonna Onasis T Sangma', email: 'madonnaonasis[at]gmail[dot]com', address: 'Office of the Deputy Commissioner and District Magistrate West Garo Hills District P.O. Tura, Meghalaya, Pin: 794001' },
  { id: 'MG-WJH-11', state: 'Meghalaya', district: 'West Jaintia Hills', name: 'Smt. Y. Najiar', email: 'dswojowai[at]yahoo[dot]com', address: 'Office of The Deputy Commissioner and District Magistrate P.O.: Iawmusiang, Jowai District.:West Jaintia Hills, Meghalaya Pin: 793150' },
  { id: 'MG-WKH-12', state: 'Meghalaya', district: 'West Khasi Hills', name: 'Deigratia W Pakyntein', email: 'graciapakyntein[at]gmail[dot]com', address: 'Office of The Deputy Commissioner and District Magistrate West Khasi Hills District, Nongstoin Meghalaya - 793119' },

  // Madhya Pradesh
  { id: 'MP-ANU-03', state: 'Madhya Pradesh', district: 'Anuppur', name: 'Smt Archna Kumari', email: 'ceozpanu[at]mp[dot]gov[dot]in', address: 'Office of the Collector & District Magistrate, Collectorate Building, Kotma Road, Anuppur – 484224, Madhya Pradesh' },

  { id: 'MP-BLG-05', state: 'Madhya Pradesh', district: 'Balaghat', name: 'Abhiskek Saraf', email: 'ceozpbal[at]mp[dot]gov[dot]in', address: 'Office of the Collector & District Magistrate, Collectorate Building, Balaghat – 481001, Madhya Pradesh' },

  { id: 'MP-BRW-06', state: 'Madhya Pradesh', district: 'Barwani', name: 'Kajal Jawla', email: 'ceozpbar[at]mp[dot]gov[dot]in', address: 'Office of the District Collector and District Magistrate, DC Office, Segaon, Barwani – 451551, Madhya Pradesh' },

  { id: 'MP-BET-07', state: 'Madhya Pradesh', district: 'Betul', name: 'Akshat Jain', email: 'ceozpbet[at]mp[dot]gov[dot]in', address: 'Office of the District Collector and District Magistrate, Collector Office, Betul, Madhya Pradesh' },

  { id: 'MP-BHD-08', state: 'Madhya Pradesh', district: 'Bhind', name: 'Suneel Kumar Dubey', email: 'ceozp[at]nic[dot]in', address: 'Office of the District Collector and District Magistrate, Collectorate Building, Chaturvedi Nagar, Bhind – 477001, Madhya Pradesh' },

  { id: 'MP-BHP-09', state: 'Madhya Pradesh', district: 'Bhopal', name: 'Smt. ILA TIWARI', email: 'ceozpbho[at]mp[dot]gov[dot]in', address: 'Office of the District Collector and District Magistrate, Collectorate, A-Block, Old Secretariat, Bhopal – 462001, Madhya Pradesh' },

  { id: 'MP-BRN-10', state: 'Madhya Pradesh', district: 'Burhanpur', name: 'Shri. Srijan Varma', email: 'wcdburmp[at]nic[dot]in', address: 'Office of the District Collector and District Magistrate, Collector Office, Mohammadpura, Raver Road, Burhanpur – 450331, Madhya Pradesh' },

  { id: 'MP-CHT-11', state: 'Madhya Pradesh', district: 'Chhatarpur', name: 'Om namah shivay Arjariya', email: 'ceozpcha[at]mp[dot]gov[dot]in', address: 'Office of the District Collector and District Magistrate, Sagar Road, Shanti Nagar, Chhatarpur – 471001, Madhya Pradesh' },

  { id: 'MP-CHI-12', state: 'Madhya Pradesh', district: 'Chhindwara', name: 'Agrim Kumar Nigam', email: 'ceozpchi-mp[at]nic[dot]in', address: 'Office of the District Collector and District Magistrate, Chhindwara – 480001, Madhya Pradesh' },

  { id: 'MP-DAM-13', state: 'Madhya Pradesh', district: 'Damoh', name: 'Praveen Fulpagare', email: 'ceozpdam[at]mp[dot]gov[dot]in', address: 'Office of the Collector and District Magistrate, Rani Durgawati Composite Building, Jabalpur Road, Damoh – 470661, Madhya Pradesh' },

  { id: 'MP-DTA-14', state: 'Madhya Pradesh', district: 'Datia', name: 'Akahay Temrawal', email: 'ceozpdat[at]mp[dot]gov[dot]in', address: 'Office of the Collector and District Magistrate, New Collectorate Campus, Datia – 475661, Madhya Pradesh' },

  { id: 'MP-DEW-15', state: 'Madhya Pradesh', district: 'Dewas', name: 'Smt. Jyoti Sharma', email: 'ceozpdew[at]gov[dot]mp[dot]in', address: 'Office of the Collector, Dewas – 455001, Madhya Pradesh' },

  { id: 'MP-DHR-16', state: 'Madhya Pradesh', district: 'Dhar', name: 'Bhishek Choudhry', email: 'ceozpdhar[at]gmail[dot]com', address: 'Office of the Collector, Dhar – 454001, Madhya Pradesh' },

  { id: 'MP-DND-17', state: 'Madhya Pradesh', district: 'Dindori', name: 'Anil Kumar Rathore', email: 'wcddin[at]nic[dot]in', address: 'Office of Collector & District Magistrate, Dindori, Madhya Pradesh – 481880' },

  { id: 'MP-GUN-19', state: 'Madhya Pradesh', district: 'Guna', name: 'Abhishek Dubey', email: 'ceozpgun[at]mp[dot]gov[dot]in', address: 'Office of the Collector, Guna – 473001, Madhya Pradesh' },

  { id: 'MP-GWL-20', state: 'Madhya Pradesh', district: 'Gwalior', name: 'Shri sojan kumar rawat, I.A.S.', email: 'ceozpgwl[at]mp[dot]nic[dot]in', address: 'Collectorate, Ohadpur, Gwalior, Madhya Pradesh' },

  { id: 'MP-IND-22', state: 'Madhya Pradesh', district: 'Indore', name: 'Siddharth Jain', email: 'ceozpind[at]mp[dot]gov[dot]in', address: 'Collector Office, New Administrative Complex, Moti Tabela, Indore – 452007, Madhya Pradesh' },

  { id: 'MP-JAB-23', state: 'Madhya Pradesh', district: 'Jabalpur', name: 'Mr.Abhishek Gehlot / Mr. Saurabh Singh', email: 'wcdjab[at]nic[dot]in', address: 'Collectorate Campus Road, South Civil Lines, Jabalpur – 482001, Madhya Pradesh' },

  { id: 'MP-KTN-25', state: 'Madhya Pradesh', district: 'Katni', name: 'Shri Shishir Gemawat', email: 'ceozpkat[at]mp[dot]gov[dot]in', address: 'Collectorate Jhinjri, NH 7, Katni – 483501, Madhya Pradesh' },

  { id: 'MP-KHG-26', state: 'Madhya Pradesh', district: 'Khargone', name: 'Akash Singh', email: 'ceozpkhr[at]mp[dot]nic[dot]in', address: 'Collectorate Building, Near Navgrah Mandir, Khargone – 451001, Madhya Pradesh' },

  { id: 'MP-MNL-28', state: 'Madhya Pradesh', district: 'Mandla', name: 'Shri Shreyansh Kumoot', email: 'ceozpmal[at]mp[dot]gov[dot]in', address: 'Civil Lines, Mandla – 481661, Madhya Pradesh' },

  { id: 'MP-MDS-29', state: 'Madhya Pradesh', district: 'Mandsaur', name: 'Anukul Jain', email: 'ceozpmas[at]mp[dot]gov[dot]in', address: 'Kila Road, Sarafa Bazar, Mandsaur – 458002, Madhya Pradesh' },

  { id: 'MP-MOR-31', state: 'Madhya Pradesh', district: 'Morena', name: 'Kamlesh Kumar Bhargav', email: 'ceozpmor[at]mp[dot]nic[dot]in', address: 'Collectorate Building, Morena – 476001, Madhya Pradesh' },

  { id: 'MP-NRS-33', state: 'Madhya Pradesh', district: 'Narsinghpur', name: 'DNO Narsinghpur', email: 'narsinghpurwenar[at]mp[dot]gov[dot]in', address: 'Office of the Collector, Narsinghpur – 487001, Madhya Pradesh' },

  { id: 'MP-NEM-34', state: 'Madhya Pradesh', district: 'Neemuch', name: 'Shri Aman Vaishnav', email: 'ceozpnee[at]mp[dot]gov[dot]in', address: 'Collectorate, Neemuch – 458441, Madhya Pradesh' },

  { id: 'MP-PAN-37', state: 'Madhya Pradesh', district: 'Panna', name: 'Umrao Singh Maravi', email: 'wcdpan[at]nic[dot]in', address: 'New Joint Collectorate Building, Ajaygarh Road, Panna – 488001, Madhya Pradesh' },

  { id: 'MP-RSN-38', state: 'Madhya Pradesh', district: 'Raisen', name: 'Anju Pawan Bhadoriya', email: 'ceozp[at]mp[dot]nic[dot]in', address: 'Collectorate Office, Raisen – 464551, Madhya Pradesh' },

  { id: 'MP-RGR-39', state: 'Madhya Pradesh', district: 'Rajgarh', name: 'MAHIP KISHORE TEJASVI', email: 'ceozpraj-mp[at]nic[dot]in', address: 'New Collectorate Composite Building, Rajgarh – 465661, Madhya Pradesh' },

  { id: 'MP-RTM-40', state: 'Madhya Pradesh', district: 'Ratlam', name: 'VAISHALI JAIN', email: 'wcdrat[at]nic[dot]in', address: 'Collectorate, Ratlam – 457001, Madhya Pradesh' },

  { id: 'MP-RWA-41', state: 'Madhya Pradesh', district: 'Rewa', name: 'Mehtab Singh Gujjar', email: 'wcdrew[at]nic[dot]in', address: 'New Collectorate Building, Rewa – 486001, Madhya Pradesh' },

  { id: 'MP-SGR-42', state: 'Madhya Pradesh', district: 'Sagar', name: 'Vivek K', email: 'ceozpsag[at]mp[dot]gov[dot]in', address: 'Collectorate Office, Sagar, Madhya Pradesh' },

  { id: 'MP-STN-43', state: 'Madhya Pradesh', district: 'Satna', name: 'Shailendra Singh', email: 'cozpsat[at]mp[dot]gov[dot]in', address: 'Collectorate Office, Satna, Madhya Pradesh' },

  { id: 'MP-SHR-44', state: 'Madhya Pradesh', district: 'Sehore', name: 'DR. NEHA JAIN', email: 'wcdseh[at]nic[dot]in', address: 'Collectorate Office, Sehore – 466001, Madhya Pradesh' },

  { id: 'MP-SNI-45', state: 'Madhya Pradesh', district: 'Seoni', name: 'ANJALI SHAH', email: 'ceozpsni[at]gmail[dot]com', address: 'Collectorate Office, Seoni – 480661, Madhya Pradesh' },

  { id: 'MP-SHD-46', state: 'Madhya Pradesh', district: 'Shahdol', name: 'ANJALI RAMESH', email: 'ceozpshd[at]mp[dot]gov[dot]in', address: 'Collectorate Office, Near Jai Stambh, Shahdol – 484001, Madhya Pradesh' },

  { id: 'MP-SHJ-47', state: 'Madhya Pradesh', district: 'Shajapur', name: 'Mrs Anupama Chouhan', email: 'ceozpshj[at]mp[dot]gov[dot]in', address: 'Collectorate Building, AB Road, Shajapur – 465001, Madhya Pradesh' },

  { id: 'MP-SHP-48', state: 'Madhya Pradesh', district: 'Sheopur', name: 'SMT SOUMYA AANAND', email: 'ceozpshe[at]mp[dot]gov[dot]in', address: 'District Collectorate, Sheopur – 476337, Madhya Pradesh' },

  { id: 'MP-SHV-49', state: 'Madhya Pradesh', district: 'Shivpuri', name: 'Vijay Raj', email: 'ceozpshi[at]mp[dot]gov[dot]in', address: 'Collectorate Building, Shivpuri – 473551, Madhya Pradesh' },

  { id: 'MP-SDH-50', state: 'Madhya Pradesh', district: 'Sidhi', name: 'Shailendra Solanki', email: 'ceozpsid[at]mp[dot]gov[dot]in', address: 'Karuna Bhavan, Sidhi – 486661, Madhya Pradesh' },

  { id: 'MP-SNG-51', state: 'Madhya Pradesh', district: 'Singrauli', name: 'Saroj Sonamaniocs', email: 'singrauli2020[at]gmail[dot]com', address: 'Collectorate Building, Waidhan, Singrauli – 486886, Madhya Pradesh' },

  { id: 'MP-TKG-52', state: 'Madhya Pradesh', district: 'Tikamgarh', name: 'Shri Naveet Dhurve', email: 'ceozptik[at]mp[dot]nicin', address: 'Collectorate Office, Tikamgarh – 472001, Madhya Pradesh' },

  { id: 'MP-UJN-53', state: 'Madhya Pradesh', district: 'Ujjain', name: 'Jayti Singh', email: 'weujj[at]mp[dot]gov[dot]in', address: 'Vikramaditya Bhawan, Kothi Palace, Ujjain – 456010, Madhya Pradesh' },

  { id: 'MP-UMR-54', state: 'Madhya Pradesh', district: 'Umaria', name: 'Abhay Singh Ohariya', email: 'ceozpuma[at]mp[dot]gov[dot]in', address: 'Collectorate Office, Umaria, Madhya Pradesh' },

  { id: 'MP-VDS-55', state: 'Madhya Pradesh', district: 'Vidisha', name: 'Om Prakash Sanodiya', email: 'ceozpvid[at]mp[dot]gov[dot]in', address: 'Collectorate Office, Sanchi Road, Vidisha, Madhya Pradesh' },


  // Odisha (Orissa)

  { id: 'OR-ANG-01', state: 'Orissa', district: 'Angul', name: 'Nirupama Pani', email: 'dswoangul[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Angul – 759122, Odisha' },

  { id: 'OR-BLN-02', state: 'Orissa', district: 'Balangir', name: 'Sujata Dora', email: 'dswobolangir[at]nic[dot]in', address: 'Office of the Collector & District Magistrate, Collectorate, Balangir – 767001, Odisha' },

  { id: 'OR-BLS-03', state: 'Orissa', district: 'Baleshwar', name: 'DNO Baleshwar', email: 'dswobalasore[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Balasore – 756001, Odisha' },

  { id: 'OR-BRG-04', state: 'Orissa', district: 'Bargarh', name: 'Mangalika Dash', email: 'mdash449[at]gmail[dot]com', address: 'Office of the Collector and District Magistrate, Collectorate, Bargarh – 768028, Odisha' },

  { id: 'OR-BDR-05', state: 'Orissa', district: 'Bhadrak', name: 'Shri Dilip Routrai', email: 'Dm-bhadrakh[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Bhadrak – 756100, Odisha' },

  { id: 'OR-BDH-06', state: 'Orissa', district: 'Boudh', name: 'Sagarika Dutta', email: 'dswoboudh[at]gmail[dot]com', address: 'Office of the Collector and District Magistrate, Collectorate, Boudh – 762014, Odisha' },

  { id: 'OR-CTK-07', state: 'Orissa', district: 'Cuttack', name: 'Dr Lopamudra Nayak', email: 'dswocuttack[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Cuttack – 753002, Odisha' },

  { id: 'OR-DGH-08', state: 'Orissa', district: 'Deogarh', name: 'Surati Pradhan', email: 'dswodeogarh[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Deogarh – 768108, Odisha' },

  { id: 'OR-DHN-09', state: 'Orissa', district: 'Dhenkanal', name: 'DNO Dhenkanal', email: 'dhenkanaldkabita112[at]gmail[dot]com', address: 'Office of the Collector and District Magistrate, Collectorate, Dhenkanal – 759001, Odisha' },

  { id: 'OR-GJP-10', state: 'Orissa', district: 'Gajapati', name: 'Smt. Monorama Devi', email: 'dswogajapati[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Paralakhemundi, Gajapati – 761200, Odisha' },

  { id: 'OR-GNJ-11', state: 'Orissa', district: 'Ganjam', name: 'D .NAGARATNAM', email: 'womenprotectioncell[at]gmail[dot]com', address: 'Office of the Collector and District Magistrate, Collectorate, Chhatrapur, Ganjam – 761020, Odisha' },

  { id: 'OR-JSH-12', state: 'Orissa', district: 'Jagatsinghpur', name: 'DNO Jagatsinghpur', email: 'dswojagatsinghpur[at]gmail[dot]com', address: 'Office of the Collector and District Magistrate, Collectorate, Jagatsinghpur – 754103, Odisha' },

  { id: 'OR-JJP-13', state: 'Orissa', district: 'Jajpur', name: 'Sunanda Das', email: 'dswojajpur[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Jajpur – 755001, Odisha' },

  { id: 'OR-JHR-14', state: 'Orissa', district: 'Jharsuguda', name: 'Jayanti Gartia', email: 'dswojharsuguda[at]od[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Jharsuguda – 768201, Odisha' },

  { id: 'OR-KLD-15', state: 'Orissa', district: 'Kalahandi', name: 'Smt. Mujibun Nisha', email: 'dswokalahandi[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Bhawanipatna, Kalahandi – 766001, Odisha' },

  { id: 'OR-KNM-16', state: 'Orissa', district: 'Kandhamal', name: 'Saroj Lata Dei', email: 'sarojlatadei273[at]gmail[dot]com', address: 'Office of the Collector and District Magistrate, Collectorate, Phulbani, Kandhamal – 762001, Odisha' },

  { id: 'OR-KND-17', state: 'Orissa', district: 'Kendrapara', name: 'DNO Kendrapara', email: 'dswokendrapara[at]gmail[dot]com', address: 'Office of the Collector and District Magistrate, Collectorate, Kendrapara – 754211, Odisha' },

  { id: 'OR-KNJ-18', state: 'Orissa', district: 'Kendujhar', name: 'Basanti Mohanta', email: 'basantimohanta[dot]94[at]gmail[dot]com', address: 'Office of the Collector and District Magistrate, Collectorate, Keonjhar – 758001, Odisha' },

  { id: 'OR-KHD-19', state: 'Orissa', district: 'Khordha', name: 'DNO Khordha', email: 'dswokhurda[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Khordha – 752055, Odisha' },

  { id: 'OR-KRP-20', state: 'Orissa', district: 'Koraput', name: 'Jyotsna Padhy', email: 'dswokoraput[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Koraput – 764020, Odisha' },

  { id: 'OR-MLK-21', state: 'Orissa', district: 'Malkangiri', name: 'Shri Ashish Ishwar Patil', email: 'dm_malkangiri[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Malkangiri – 764045, Odisha' },

  { id: 'OR-MYB-22', state: 'Orissa', district: 'Mayurbhanj', name: 'Smt Niharika Mohanty', email: 'dswomayurbhanj[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Baripada, Mayurbhanj – 757001, Odisha' },

  { id: 'OR-NBR-23', state: 'Orissa', district: 'Nabarangpur', name: 'DNO Nabarangpur', email: 'draupadikanhar966[at]gmail[dot]com', address: 'Office of the Collector and District Magistrate, Collectorate, Nabarangpur – 764059, Odisha' },

  { id: 'OR-NYG-24', state: 'Orissa', district: 'Nayagarh', name: 'DNO Nayagarh', email: 'dswonayagarh[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Nayagarh – 752069, Odisha' },

  { id: 'OR-NWP-25', state: 'Orissa', district: 'Nuapada', name: 'Smt. S Geeta', email: 'dswonawapara[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Nuapada – 766105, Odisha' },

  { id: 'OR-PUR-26', state: 'Orissa', district: 'Puri', name: 'Tanuprava Beura', email: 'dswopuri[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Puri – 752001, Odisha' },

  { id: 'OR-RYG-27', state: 'Orissa', district: 'Rayagada', name: 'Smt PRATIMARANI DAS', email: 'dsworayagada[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Rayagada – 765001, Odisha' },

  { id: 'OR-SMB-28', state: 'Orissa', district: 'Sambalpur', name: 'Shri Siddeshwar Baliram Bondar', email: 'dm-sambalpur[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Sambalpur – 768001, Odisha' },

  { id: 'OR-SNP-29', state: 'Orissa', district: 'Sonepur', name: 'Smt Anjana Kishan', email: 'dswompr[at]gmail[dot]com', address: 'Office of the Collector and District Magistrate, Collectorate, Subarnapur (Sonepur) – 767017, Odisha' },

  { id: 'OR-SNG-30', state: 'Orissa', district: 'Sundargarh', name: 'Krishna Kumari Nanda', email: 'dswosundargarh[at]nic[dot]in', address: 'Office of the Collector and District Magistrate, Collectorate, Sundargarh – 770001, Odisha' },

  // Nagaland

  { id: 'NG-DPR-02', state: 'Nagaland', district: 'Dimapur', name: 'Yanthungbemo Kikon', email: 'nanajamir86[at]gmail[dot]com', address: 'Deputy Commissioner Office, Dimapur – 797112, Nagaland' },

  { id: 'NG-KPH-03', state: 'Nagaland', district: 'Kiphire', name: 'Takatemjen Pongent', email: 'emjenpongen22[at]gmail[dot]com', address: 'Office of the Deputy Commissioner, Kiphire – 798611, Nagaland' },

  { id: 'NG-KHM-04', state: 'Nagaland', district: 'Kohima', name: 'Smti Ane Khieya', email: 'abeinuojasmine[at]gmail[dot]com', address: 'Office of the Deputy Commissioner, Kohima – 797001, Nagaland' },

  { id: 'NG-LGL-05', state: 'Nagaland', district: 'Longleng', name: 'IMKONGNUKLA AO', email: 'IMKONGNUKLA777[at]GMAIL[dot]COM', address: 'Deputy Commissioner Office, Longleng, Nagaland' },

  { id: 'NG-PRN-11', state: 'Nagaland', district: 'Peren', name: 'Sentilong Ozukum', email: 'sentilongozukum123[at]gmail[dot]com', address: 'Deputy Commissioner Office, Peren – 797101, Nagaland' },

  { id: 'NG-PHK-12', state: 'Nagaland', district: 'Phek', name: 'Saratho Katir', email: 'ydhewphek[at]gmail[dot]com', address: 'Deputy Commissioner Office, Phek – 797108, Nagaland' },

  { id: 'NG-TUN-15', state: 'Nagaland', district: 'Tuensang', name: 'Toking Yimchunger', email: 'akingkhipur1[at]gmail[dot]com', address: 'Deputy Commissioner Office, Tuensang – 798612, Nagaland' },

  { id: 'NG-WKH-16', state: 'Nagaland', district: 'Wokha', name: 'Rechalungle', email: 'rechapsalms[at]gmail[dot]com', address: 'Deputy Commissioner Office, Wokha – 797111, Nagaland' },

  { id: 'NG-ZHB-17', state: 'Nagaland', district: 'Zunheboto', name: 'Sukhalu Chishi', email: 'sukhalupchishi[at]gmail[dot]com', address: 'Deputy Commissioner Office, Zunheboto – 798620, Nagaland' },

  // Lakshadweep

  { id: 'LW-LKS-01', state: 'Lakshadweep', district: 'Lakshadweep District', name: 'Sulaikha R', email: 'lkw-wcdkav[at]utl[dot]gov[dot]in', address: 'Office of the District Collector and District Magistrate, Kavaratti, Lakshadweep – 682555' },

  // Manipur
  { id: 'MN-BSH-01', state: 'Manipur', district: 'Bishnupur', name: 'Huidrom Mitabina Devi', email: 'mitabinangangbam[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Collectorate, Bishnupur, Manipur – 795126' },
  { id: 'MN-CHD-02', state: 'Manipur', district: 'Chandel', name: 'DNO Chandel', email: 'chandelhazelfaustina[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Collectorate, Chandel, Manipur – 795127' },
  { id: 'MN-CCP-03', state: 'Manipur', district: 'Churachandpur', name: 'Teresa Tangpuat', email: 'tangpua[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Collectorate, Churachandpur, Manipur – 795128' },
  { id: 'MN-IEE-04', state: 'Manipur', district: 'Imphal East', name: 'DPO ICDS Cell', email: 'dc-impe[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, Porompat, Imphal East, Manipur – 795005' },
  { id: 'MN-IWE-05', state: 'Manipur', district: 'Imphal West', name: 'DNO Imphal West', email: 'lamphelsdo[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Lamphelpat, Imphal West, Manipur – 795004' },
  { id: 'MN-JRB-06', state: 'Manipur', district: 'Jiribam', name: 'Elangbam Nirmala Chanu', email: 'nirmalachanu[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Collectorate, Jiribam, Manipur – 795116' },
  { id: 'MN-KCH-07', state: 'Manipur', district: 'Kakching', name: 'Rohit Anand, DC', email: 'dckakching[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Kakching, Manipur – 795103' },
  { id: 'MN-KMJ-08', state: 'Manipur', district: 'Kamjong', name: 'Angom Tamphasana Chanu', email: 'sanatampha13[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Kamjong, Manipur – 795145' },
  { id: 'MN-KNG-09', state: 'Manipur', district: 'Kangpokpi', name: 'Bona Khongsai', email: 'bonakhongsai[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Kangpokpi, Manipur – 795129' },
  { id: 'MN-NON-10', state: 'Manipur', district: 'Noney', name: 'Stiff Khapudang', email: 'dc-noney[at]manipur[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Noney, Manipur – 795159' },
  { id: 'MN-PZL-11', state: 'Manipur', district: 'Pherzawl', name: 'T Chingngaihlian', email: 'dc-pherzawl[at]manipur[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Pherzawl, Manipur – 795143' },
  { id: 'MN-SNP-12', state: 'Manipur', district: 'Senapati', name: 'Senapati DNO', email: 'senaptiplim[dot]s[at]manipur[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Senapati, Manipur – 795106' },
  { id: 'MN-TML-13', state: 'Manipur', district: 'Tamenglong', name: 'L Angshim Dangshawa', email: 'dc-tml[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, Tamenglong, Manipur – 795141' },
  { id: 'MN-TNP-14', state: 'Manipur', district: 'Tengnoupal', name: 'Waikhom Devratna', email: 'devratnaamom[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Tengnoupal, Manipur – 795131' },
  { id: 'MN-THL-15', state: 'Manipur', district: 'Thoubal', name: 'Lokeshor Brahmachari', email: 'lokeshor[dot]brahmachari[at]gov[dot]in', address: 'Office of District Collector and District Magistrate, Thoubal, Manipur – 795138' },
  { id: 'MN-UKH-16', state: 'Manipur', district: 'Ukhrul', name: 'W Shimreipam', email: 'dpoukhrul123[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Ukhrul, Manipur – 795142' }
  // Mizoram
  ,
  // Mizoram

  { id: 'MZ-AZL-01', state: 'Mizoram', district: 'Aizawl', name: 'Dr. Lalhruaitluangi Chhangte', email: 'dpoaizawl[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Aizawl, Mizoram – 796001' },
  { id: 'MZ-CHP-02', state: 'Mizoram', district: 'Champhai', name: 'Lalnunfela Pachaudhew', email: 'dhewchamphai[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Champhai, Mizoram – 796321' },
  { id: 'MZ-HNT-03', state: 'Mizoram', district: 'Hnahthial', name: 'F Lalnuntluangi', email: 'drewhnahthial[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Hnahthial, Mizoram – 796571' },
  { id: 'MZ-KHZ-04', state: 'Mizoram', district: 'Khawzawl', name: 'Esther Laltlinpuii', email: 'khawzawlicds21[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Khawzawl, Mizoram – 796310' },
  { id: 'MZ-KLS-05', state: 'Mizoram', district: 'Kolasib', name: 'Lalthlengkimi', email: 'thlengkimi[dot]tk[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Kolasib, Mizoram – 796081' },
  { id: 'MZ-LWT-06', state: 'Mizoram', district: 'Lawngtlai', name: 'R LAL NUNPUI', email: 'adpolawngtlai7[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Lawngtlai, Mizoram – 796891' },
  { id: 'MZ-LNL-07', state: 'Mizoram', district: 'Lungle', name: 'IC Lalnunfe', email: 'lnchawngthu84[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Lunglei, Mizoram – 796701' },
  { id: 'MZ-MMT-08', state: 'Mizoram', district: 'Mamit', name: 'FLORA LALTANPUII', email: 'mimiflora[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Mamit, Mizoram – 796441' },
  { id: 'MZ-SHH-09', state: 'Mizoram', district: 'Saiha', name: 'Hepaw Hlychoi', email: 'icdssaiha[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Saiha, Mizoram – 796901' },
  { id: 'MZ-STL-10', state: 'Mizoram', district: 'Saitual', name: 'Dorothy Muansangi', email: 'dmuansangi[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Saitual, Mizoram – 796261' },
  { id: 'MZ-SRC-11', state: 'Mizoram', district: 'Serchhip', name: 'Sailopari', email: 'doserchhipwcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Serchhip, Mizoram – 796181' },

  // Maharashtra



  { id: 'MH-AHM-01', state: 'Maharashtra', district: 'Ahmednagar', name: 'SANJAY G.KADAM', email: 'dwcd[dot]nagar[at]yahoo[dot]com', address: 'Office of District Collector and District Magistrate, Ahmednagar, Maharashtra – 414001' },
  { id: 'MH-AKL-02', state: 'Maharashtra', district: 'Akola', name: 'Ashish B. Verulkar', email: 'dwcdoakl[dot]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Akola, Maharashtra – 444001' },
  { id: 'MH-AMR-03', state: 'Maharashtra', district: 'Amravati', name: 'Residencial Deputy Collector', email: 'rdc[dot]amravati[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Amravati, Maharashtra – 444601' },
  { id: 'MH-ARB-04', state: 'Maharashtra', district: 'Aurangabad', name: 'Prabhoday Govind Muley', email: 'dist[dot]womenc[at]yahoo[dot]com', address: 'Office of District Collector and District Magistrate, Aurangabad, Maharashtra – 431001' },
  { id: 'MH-BED-05', state: 'Maharashtra', district: 'Beed', name: 'Shivkumar Swami', email: 'rdc[dot]beed[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Beed, Maharashtra – 431122' },
  { id: 'MH-BHN-06', state: 'Maharashtra', district: 'Bhandara', name: 'Tushar Paunikar', email: 'dwcdobhandara[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bhandara, Maharashtra – 441904' },
  { id: 'MH-BLD-07', state: 'Maharashtra', district: 'Buldhana', name: 'Amol Dighule', email: 'dwcdo[dot]bul[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Buldhana, Maharashtra – 443001' },
  { id: 'MH-CHP-08', state: 'Maharashtra', district: 'Chandrapur', name: 'Smt.Minakshi D. Basme', email: 'disttdwcdocha[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Chandrapur, Maharashtra – 442401' },
  { id: 'MH-DHL-09', state: 'Maharashtra', district: 'Dhule', name: 'Vaishali Hinge', email: 'dwcddhule[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Dhule, Maharashtra – 424001' },
  { id: 'MH-GDC-10', state: 'Maharashtra', district: 'Gadchiroli', name: 'Jyoti Kadu', email: 'dwcdgadchiroli[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Gadchiroli, Maharashtra – 442605' },
  { id: 'MH-GND-11', state: 'Maharashtra', district: 'Gondia', name: 'SMT. RESHMA R. MORE', email: 'dwcdo[dot]gondia[at]rediffmail[dot]com', address: 'Office of District Collector and District Magistrate, Gondia, Maharashtra – 441601' },
  { id: 'MH-HNG-12', state: 'Maharashtra', district: 'Hingoli', name: 'Anil Machewad', email: 'anil[dot]machewad[at]gov[dot]in', address: 'Office of District Collector and District Magistrate, Hingoli, Maharashtra – 431513' },
  { id: 'MH-JLG-13', state: 'Maharashtra', district: 'Jalgaon', name: 'District Women Child Development Officer', email: 'dwcwjal[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Jalgaon, Maharashtra – 425001' },
  { id: 'MH-JLN-14', state: 'Maharashtra', district: 'Jalna', name: 'Mr. R. V. Kad', email: 'dwcdjalnacd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Jalna, Maharashtra – 431203' },
  { id: 'MH-KLH-15', state: 'Maharashtra', district: 'Kolhapur', name: 'Varsha Tanaji Shigand', email: 'ro[dot]kolhapur[at]gmal[dot]com', address: 'Office of District Collector and District Magistrate, Kolhapur, Maharashtra – 416003' },
  { id: 'MH-LTR-16', state: 'Maharashtra', district: 'Latur', name: 'Gajanan Selukar', email: 'dwcdolatur[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Latur, Maharashtra – 413512' },
  { id: 'MH-MUM-17', state: 'Maharashtra', district: 'Mumbai', name: 'Shobha Shelar', email: 'dwcdmumbaicity[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Mumbai City, Maharashtra – 400001' },
  { id: 'MH-MUS-18', state: 'Maharashtra', district: 'Mumbai Suburban', name: 'Sanjay Dhangar', email: 'poshactwcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bandra (East), Mumbai Suburban, Maharashtra – 400051' },
  { id: 'MH-NGP-19', state: 'Maharashtra', district: 'Nagpur', name: 'Mr. Sunil Motiram Mesare', email: 'dw_nagpur[at]rediffmail[dot]com', address: 'Office of District Collector and District Magistrate, Nagpur, Maharashtra – 440001' },
  { id: 'MH-NND-20', state: 'Maharashtra', district: 'Nanded', name: 'SMT.R.P.RANGARI', email: 'dwcdond[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Nanded, Maharashtra – 431601' },
  { id: 'MH-NDR-21', state: 'Maharashtra', district: 'Nandurbar', name: 'Ashvini Vijaykumar Jamadar', email: 'ashvinijamadar5[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Nandurbar, Maharashtra – 425412' },
  { id: 'MH-NSK-22', state: 'Maharashtra', district: 'Nashik', name: 'Smt. Shubhangi Bharade', email: 'dronashik1[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Nashik, Maharashtra – 422001' },
  { id: 'MH-OSM-23', state: 'Maharashtra', district: 'Osmananad', name: 'Kishor Gore', email: 'dwcdosm01[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Osmanabad, Maharashtra – 413501' },
  { id: 'MH-PLG-24', state: 'Maharashtra', district: 'Palghar', name: 'Vivek Shantaram Chaudhari', email: 'dwcdopalghar[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Palghar, Maharashtra – 401404' },
  { id: 'MH-PBN-25', state: 'Maharashtra', district: 'Parbhani', name: 'Monika Manda', email: 'dwcdopbn[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Parbhani, Maharashtra – 431401' },
  { id: 'MH-PUN-26', state: 'Maharashtra', district: 'Pune', name: 'Rohini S. Dhavale', email: 'lcpune2021[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Pune, Maharashtra – 411001' },
  { id: 'MH-RGD-27', state: 'Maharashtra', district: 'Raigad', name: 'Shrikant Dnyanoba Hawale', email: 'dwcdoraigad[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Alibag, Raigad, Maharashtra – 402201' },
  { id: 'MH-RTG-28', state: 'Maharashtra', district: 'Ratnagiri', name: 'Manoj S Patankar', email: 'rtg_dwcdor[at]rediffmail[dot]com', address: 'Office of District Collector and District Magistrate, Ratnagiri, Maharashtra – 415612' },
  { id: 'MH-SNL-29', state: 'Maharashtra', district: 'Sangli', name: 'Smt. Snehal Kanicheday', email: 'collactorla9[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Sangli, Maharashtra – 416416' },
  { id: 'MH-STR-30', state: 'Maharashtra', district: 'Satara', name: 'Shilpa Vishwas Patil', email: 'shilpa[dot]vishwaspatil5[at]gov[dot]in', address: 'Office of District Collector and District Magistrate, Satara, Maharashtra – 415001' },
  { id: 'MH-SDG-31', state: 'Maharashtra', district: 'Sindhudurg', name: 'DISTRICT WOMEN AND CHILD DEVELOPMENT OFFICER', email: 'dwcdosdurg[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Sindhudurg, Maharashtra – 416812' },
  { id: 'MH-SLP-32', state: 'Maharashtra', district: 'Solapur', name: 'Ramesh Katkar', email: 'dwcdosolapur[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Solapur, Maharashtra – 413001' },
  { id: 'MH-THN-33', state: 'Maharashtra', district: 'Thane', name: 'Namita Shinde', email: 'dnothaneposh[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Thane, Maharashtra – 400601' },
  { id: 'MH-WRD-34', state: 'Maharashtra', district: 'Wardha', name: 'Shrimati Manisha Kursange', email: 'dwcdowardha[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Wardha, Maharashtra – 442001' },
  { id: 'MH-WSH-35', state: 'Maharashtra', district: 'Washim', name: 'UTTAM SHINDE', email: 'dwcdo[dot]washim[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Washim, Maharashtra – 444505' },
  { id: 'MH-YVM-36', state: 'Maharashtra', district: 'Yavatmal', name: 'Vishal Narayanrao Jadhao', email: 'dwomenchild[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Yavatmal, Maharashtra – 445001' },


  // Chhattisgarh


  { id: 'CG-BLD-01', state: 'Chhattisgarh', district: 'Balod', name: 'SMT-HETESHWARI MESRAM', email: 'dpobalod[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Balod, Chhattisgarh – 491226' },

  { id: 'CG-BZR-02', state: 'Chhattisgarh', district: 'Baloda Bazar', name: 'Atul Parihar', email: 'dpobalodabazar[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Baloda Bazar, Chhattisgarh – 493332' },

  { id: 'CG-BRM-03', state: 'Chhattisgarh', district: 'Balrampur', name: 'MISS BISMITA PATLEY', email: 'dpowcdbalrampur[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Balrampur, Chhattisgarh – 497119' },

  { id: 'CG-BST-04', state: 'Chhattisgarh', district: 'Bastar', name: 'Manoj Kumar', email: 'bastar[dot]dpo84[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Jagdalpur, Bastar, Chhattisgarh – 494001' },

  { id: 'CG-BMT-05', state: 'Chhattisgarh', district: 'Bemetara', name: 'DPO Bemetara', email: 'dpobemetara[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bemetara, Chhattisgarh – 491335' },

  { id: 'CG-BJP-06', state: 'Chhattisgarh', district: 'Bijapur', name: 'DNO Bijapur', email: 'bijapurdwcdo[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bijapur, Chhattisgarh – 494444' },

  { id: 'CG-BLS-07', state: 'Chhattisgarh', district: 'Bilaspur', name: 'SURESH SINGH', email: 'dpobilaspur[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bilaspur, Chhattisgarh – 495001' },

  { id: 'CG-DTW-08', state: 'Chhattisgarh', district: 'Dantewada', name: 'DNO Dantewada', email: 'dwcdodantewada[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Dantewada, Chhattisgarh – 494449' },

  { id: 'CG-DHM-09', state: 'Chhattisgarh', district: 'Dhamtari', name: 'DNO Dhamtari', email: 'dhamtariwcd[dot]dhamtari[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Dhamtari, Chhattisgarh – 493773' },

  { id: 'CG-DRG-10', state: 'Chhattisgarh', district: 'Durg', name: 'RAJKUMAR JAMBULKAR', email: 'dpodurg[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Durg, Chhattisgarh – 491001' },

  { id: 'CG-GRB-11', state: 'Chhattisgarh', district: 'Gariaband', name: 'Mr. Ashok Kumar Pandey', email: 'dpowcdgariaband[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Gariaband, Chhattisgarh – 493889' },

  { id: 'CG-GPM-12', state: 'Chhattisgarh', district: 'Gaurela-Pendra-Marwahi', name: 'Amit sinha', email: 'wcd[dot]gpm[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Gaurela, Chhattisgarh – 495117' },

  { id: 'CG-JGR-13', state: 'Chhattisgarh', district: 'Janjgir-Champa', name: 'Smt. Anita Agrawal', email: 'dpojgr[at]rediffmail[dot]com', address: 'Office of District Collector and District Magistrate, Janjgir, Chhattisgarh – 495668' },

  { id: 'CG-JSP-14', state: 'Chhattisgarh', district: 'Jashpur', name: 'DNO Jashpur', email: 'Dpojashpur211[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Jashpur Nagar, Chhattisgarh – 496331' },

  { id: 'CG-KBD-15', state: 'Chhattisgarh', district: 'Kabirdham', name: 'DNO Kabirdham', email: 'kabirdhamnawabihankwd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Kawardha, Kabirdham, Chhattisgarh – 491995' },

  { id: 'CG-KCG-16', state: 'Chhattisgarh', district: 'Khairagarh-Chhuikhadan-Gandai', name: 'DNO Khairagarh', email: 'dwcdokcg[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Khairagarh, Chhattisgarh – 491881' },

  { id: 'CG-KDG-17', state: 'Chhattisgarh', district: 'Kondagaon', name: 'Renu Prakash Kose', email: 'dwcdkondagaon[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Kondagaon, Chhattisgarh – 494226' },

  { id: 'CG-KRB-18', state: 'Chhattisgarh', district: 'Korba', name: 'DNO Korba', email: 'korbanawabihankorba99[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Korba, Chhattisgarh – 495677' },

  { id: 'CG-KOR-19', state: 'Chhattisgarh', district: 'Korea', name: 'District Program Officer', email: 'icds-korea[dot]cg[at]gov[dot]in', address: 'Office of District Collector and District Magistrate, Baikunthpur, Korea, Chhattisgarh – 497335' },

  { id: 'CG-MHS-20', state: 'Chhattisgarh', district: 'Mahasamund', name: 'Tikwendra Jatwar', email: 'dwcdmahasamund[at]gamil[dot]com', address: 'Office of District Collector and District Magistrate, Mahasamund, Chhattisgarh – 493445' },

  { id: 'CG-MCB-21', state: 'Chhattisgarh', district: 'Manendragarh-Chirmiri-Bharatpur', name: 'DNO Manendragarh', email: 'dwcdomcb[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Manendragarh, Chhattisgarh – 497442' },

  { id: 'CG-MMA-22', state: 'Chhattisgarh', district: 'Mohla-Manpur-Ambagarh Chouki', name: 'DNO Mohla-Manpur', email: 'wcd-mmac[at]cg[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Mohla, Chhattisgarh – 491666' },

  { id: 'CG-MNG-23', state: 'Chhattisgarh', district: 'Mungeli', name: 'Sanjula Sharma', email: 'dpomungeli[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Mungeli, Chhattisgarh – 495334' },

  { id: 'CG-NAR-24', state: 'Chhattisgarh', district: 'Narayanpur', name: 'LUPENDRA MAHINAG', email: 'dwcdnarayanpur[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Narayanpur, Chhattisgarh – 494661' },

  { id: 'CG-RGH-25', state: 'Chhattisgarh', district: 'Raigarh', name: 'DNO Raigarh', email: 'wcdraigarh[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Raigarh, Chhattisgarh – 496001' },

  { id: 'CG-RPR-26', state: 'Chhattisgarh', district: 'Raipur', name: 'Shail Thakur', email: 'dwcdraipur[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Raipur, Chhattisgarh – 492001' },

  { id: 'CG-RJN-27', state: 'Chhattisgarh', district: 'Rajnandgaon', name: 'DNO Rajnandgaon', email: 'dpowcdrjn2024[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Rajnandgaon, Chhattisgarh – 491441' },

  { id: 'CG-SKT-28', state: 'Chhattisgarh', district: 'Sakti', name: 'Sudhakar Bodle', email: 'dwcdosakti[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Sakti, Chhattisgarh – 495689' },

  { id: 'CG-SRG-29', state: 'Chhattisgarh', district: 'Sarangarh-Bilaigarh', name: 'DNO Sarangarh', email: 'wcdsarangarh[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Sarangarh, Chhattisgarh – 496445' },

  { id: 'CG-SKM-30', state: 'Chhattisgarh', district: 'Sukma', name: 'MR. SHIVDAS NETAM', email: 'dwcdsukma01[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Sukma, Chhattisgarh – 494111' },

  { id: 'CG-SRP-31', state: 'Chhattisgarh', district: 'Surajpur', name: 'Mr. Shubham Bansal', email: 'dposurajpur[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Surajpur, Chhattisgarh – 497229' },

  { id: 'CG-SRJ-32', state: 'Chhattisgarh', district: 'Surguja', name: 'DNO Surguja', email: 'dposurguja4[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Ambikapur, Surguja, Chhattisgarh – 497001' },

  { id: 'CG-UBK-33', state: 'Chhattisgarh', district: 'Uttar Bastar Kanker', name: 'DNO Kanker', email: 'kankerntsimga[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Kanker, Chhattisgarh – 494334' },

  // Goa
  { id: 'GA-KSV-01', state: 'Goa', district: 'Kushavati', name: 'Avelina Dsa e Pereira', email: 'magbr-kd[at]goa[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Collectorate, North Goa, Panaji, Goa 403001' },
  { id: 'GA-NGO-02', state: 'Goa', district: 'North Goa', name: 'Akshaya A. Amonkar', email: 'estbr-coln[dot]goa[at]gov[dot]in', address: 'Office of District Collector and District Magistrate, Collectorate, North Goa, Panaji, Goa 403001' },
  { id: 'GA-SGO-03', state: 'Goa', district: 'South Goa', name: 'Avelina Dsa E Pereira', email: 'magbr-cols[dot]goa[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, Collectorate, South Goa, Margao, Goa 403601' },

  // Delhi
  { id: 'DL-CTR-01', state: 'Delhi', district: 'Central', name: 'Sh. Dinesh Kumar', email: 'sdmhqcentral[dot]delhi[at]delhi[dot]gov[dot]in', address: 'Office of Deputy Commissioner, District Centre, Sector 10, Dwarka, Delhi 110075' },
  { id: 'DL-EST-02', state: 'Delhi', district: 'East', name: 'District Magistrate East', email: 'dceast1[at]gmail[dot]com', address: 'Office of the Deputy Commissioner, District Centre, Laxmi Nagar, Delhi 110092' },
  { id: 'DL-NDP-03', state: 'Delhi', district: 'New Delhi', name: 'Ruchi Jain', email: 'newdelhidistictshebox[at]gmail[dot]com', address: 'Office of the Deputy Commissioner, New Delhi District, Patiala House Courts, New Delhi 110001' },
  { id: 'DL-NTH-04', state: 'Delhi', district: 'North', name: 'KANIKA', email: 'sdmalipur1[at]gmail[dot]com', address: 'Office of the Deputy Commissioner, Tis Hazari Court Complex, Delhi Gate, Delhi 110054' },
  { id: 'DL-NTE-05', state: 'Delhi', district: 'North East', name: 'DNO North-East', email: 'sdmhqne[dot]delhi[at]gov[dot]in', address: 'Office of the Deputy Commissioner, Nand Nagri Industrial Area, Dilshad Garden, Delhi 110093' },
  { id: 'DL-NTW-06', state: 'Delhi', district: 'North West', name: 'Surabhi Rani', email: 'dio-nwdl[at]nic[dot]in', address: 'Office of the Deputy Commissioner, Sector 10, Rohini, Delhi 110085' },
  { id: 'DL-SHD-07', state: 'Delhi', district: 'Shahdara', name: 'DNO Shahdara', email: 'shahdaractbshah[at]gmail[dot]com', address: 'Office of the Deputy Commissioner, Karkardooma Courts Complex, Shahdara, Delhi 110032' },
  { id: 'DL-STH-08', state: 'Delhi', district: 'South', name: 'PAWAN KUMAR', email: 'sdmhqsouth[dot]nic[at]gmail[dot]com', address: 'Office of the Deputy Commissioner, South East District, Kalkaji District Centre, Delhi 110019' },
  { id: 'DL-STE-09', state: 'Delhi', district: 'South East', name: 'District South East', email: 'sdmsoutheast[at]gmail[dot]com', address: 'Office of the Deputy Commissioner, Panchsheel Park, Hauz Khas, Delhi 110017' },
  { id: 'DL-STW-10', state: 'Delhi', district: 'South West', name: 'Ms. Anuja Trivedi', email: 'sdmkpsw[at]gmail[dot]com', address: 'Office of the Deputy Commissioner, Kapashera, Dwarka, New Delhi 110037' },
  { id: 'DL-WST-11', state: 'Delhi', district: 'West', name: 'Taruna Gautam', email: 'taruna[dot]gautam[at]delhi[dot]gov[dot]in', address: 'Office of the Deputy Commissioner, ITO, Vikas Bhawan, New Delhi 110002' },

  // Jammu and Kashmir
  { id: 'JK-ANT-01', state: 'Jammu and Kashmir', district: 'Anantnag', name: 'Nazia Hassan', email: 'dicplananantnag[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), DC Office Complex, Anantnag, J&K 192101' },
  { id: 'JK-BDG-02', state: 'Jammu and Kashmir', district: 'Badgam', name: 'DSWO', email: 'dswobud[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), DC Office, Budgam, J&K 191111' },
  { id: 'JK-BDR-03', state: 'Jammu and Kashmir', district: 'Bandipora', name: 'Bashir Ahmad Malik', email: 'dswobandipora[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), DC Office, Bandipora, J&K 193502' },
  { id: 'JK-BRM-04', state: 'Jammu and Kashmir', district: 'Baramulla', name: 'Sajad Ahmad Bhat', email: 'bsajad492[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), DC Office Complex, Baramulla, J&K 193101' },
  { id: 'JK-DDA-05', state: 'Jammu and Kashmir', district: 'Doda', name: 'Zubair Ahmed', email: 'dswododa[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), DC Office, Doda, J&K 182202' },
  { id: 'JK-GDR-06', state: 'Jammu and Kashmir', district: 'Ganderbal', name: 'BASHIR AHMAD MALIK', email: 'dswomsgbl[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), DC Office, Ganderbal, J&K 191201' },
  { id: 'JK-JMM-07', state: 'Jammu and Kashmir', district: 'Jammu', name: 'Ansuya Jamwala', email: 'dclojammu[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bahu Plaza, Jammu, J&K 180012' },
  { id: 'JK-KTH-08', state: 'Jammu and Kashmir', district: 'Kathua', name: 'District Social Welfare Officer', email: 'dswokkathua[at]yahoo[dot]in', address: 'Office of District Collector and District Magistrate, DC Office Complex, Kathua, J&K 184101' },
  { id: 'JK-KSH-09', state: 'Jammu and Kashmir', district: 'Kishtwar', name: 'Tariq', email: 'dswo[dot]kishtwar[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), DC Office, Kishtwar, J&K 182204' },
  { id: 'JK-KLG-10', state: 'Jammu and Kashmir', district: 'Kulgam', name: 'Viqar Ahmed Giri', email: 'adc[dot]kulgam786[at]jk[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), DC Office, Kulgam, J&K 192231' },
  { id: 'JK-KUP-11', state: 'Jammu and Kashmir', district: 'Kupwara', name: 'DSWO Kupwara', email: 'dswokup[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), DC Office, Kupwara, J&K 193222' },
  { id: 'JK-PCH-12', state: 'Jammu and Kashmir', district: 'Poonch', name: 'Wakeel Ahmed Batt', email: 'poonchdswo[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, DC Office Complex, Poonch, J&K 185101' },
  { id: 'JK-PLW-13', state: 'Jammu and Kashmir', district: 'Pulwama', name: 'Mr. Azhar Amin', email: 'dswo-pulwama[at]jk[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), DC Office, Pulwama, J&K 192301' },
  { id: 'JK-RJR-14', state: 'Jammu and Kashmir', district: 'Rajouri', name: 'Abdul Raheem', email: 'rajouridswo[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, DC Office Complex, Rajouri, J&K 185131' },
  { id: 'JK-RMB-15', state: 'Jammu and Kashmir', district: 'Ramban', name: 'Rahul Gupta', email: 'icps[dot]ramban[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), DC Office, Ramban, J&K 182144' },
  { id: 'JK-RSI-16', state: 'Jammu and Kashmir', district: 'Reasi', name: 'DSWO Reasi', email: 'dsworeasi[at]yahoo[dot]com', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), DC Office, Reasi, J&K 182311' },
  { id: 'JK-SMB-17', state: 'Jammu and Kashmir', district: 'Samba', name: 'Mr. Jagdish Singh', email: 'adc[dot]samba[at]jk[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, DC Office Complex, Samba, J&K 184121' },
  { id: 'JK-SHP-18', state: 'Jammu and Kashmir', district: 'Shopian', name: 'Ibrar Hussain Mirza', email: 'mskshopian[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), DC Office, Shopian, J&K 192303' },
  { id: 'JK-SRG-19', state: 'Jammu and Kashmir', district: 'Srinagar', name: 'District Social Welfare Officer', email: 'dlcwsrinagar[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate (Deputy Commissioner), Raj Bagh, Srinagar, J&K 190008' },
  { id: 'JK-UDH-20', state: 'Jammu and Kashmir', district: 'Udhampur', name: 'Kanika Gupta', email: 'sankalphew[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, New District Office Complex, Udhampur, J&K 182101' },

  // Himachal Pradesh
  { id: 'HP-BLS-01', state: 'Himachal Pradesh', district: 'Bilaspur', name: 'RAHUL KUMAR', email: 'dc-bil-hp[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, DC Office, Bilaspur, Himachal Pradesh 174001' },
  { id: 'HP-CHA-02', state: 'Himachal Pradesh', district: 'Chamba', name: 'Prithi Paul Singh, HAS', email: 'ac2dc-cha-hp[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, DC Office, Chamba, Himachal Pradesh 176310' },
  { id: 'HP-HAM-03', state: 'Himachal Pradesh', district: 'Hamirpur', name: 'Rahul Chauha', email: 'adm-ham-hp[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, Collectorate, Hamirpur, Himachal Pradesh 177001' },
  { id: 'HP-KNR-04', state: 'Himachal Pradesh', district: 'Kangra', name: 'Hemraj Bairwa, IAS', email: 'dc-kan-hp[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, DC Office, Dharamshala, Kangra, Himachal Pradesh 176215' },
  { id: 'HP-KIN-05', state: 'Himachal Pradesh', district: 'Kinnaur', name: 'Sh. Om Prakash Yadav', email: 'ac-kin-hp[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, DC Office, Reckong Peo, Kinnaur, Himachal Pradesh 172107' },
  { id: 'HP-KUL-06', state: 'Himachal Pradesh', district: 'Kullu', name: 'DNO Kullu', email: 'kulludc-kul-hp[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, DC Office, Kullu, Himachal Pradesh 175101' },
  { id: 'HP-LHS-07', state: 'Himachal Pradesh', district: 'Lahul and Spiti', name: 'Smt Kiran Bhadana,IAS', email: 'dc-lah-hp[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, DC Office, Keylong, Lahaul and Spiti, Himachal Pradesh 175142' },
  { id: 'HP-MND-08', state: 'Himachal Pradesh', district: 'Mandi', name: 'Gursimar Singh', email: 'adc-man-hp[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, DC Office, Mandi, Himachal Pradesh 175001' },
  { id: 'HP-SML-09', state: 'Himachal Pradesh', district: 'Shimla', name: 'Sachin Sharma', email: 'adc-sml-hp[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, DC Office, Shimla, Himachal Pradesh 171001' },
  { id: 'HP-SIR-10', state: 'Himachal Pradesh', district: 'Sirmaur', name: 'Smt. Priyanka Verma', email: 'dc-sir-hp[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, DC Office, Nahan, Sirmaur, Himachal Pradesh 173001' },
  { id: 'HP-SLN-11', state: 'Himachal Pradesh', district: 'Solan', name: 'Sh.Manmohan Sharma', email: 'dc-sol-hp[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, DC Office, Solan, Himachal Pradesh 173212' },
  { id: 'HP-UNA-12', state: 'Himachal Pradesh', district: 'Una', name: 'Mahendra Pal Gurjar', email: 'adc-una-hp[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, DC Office, Una, Himachal Pradesh 174303' },

  // Chandigarh
  { id: 'CH-CDG-01', state: 'Chandigarh', district: 'Chandigarh', name: 'Mohan Singh', email: 'sanjeev[dot]kohli[at]chd[dot]nic[dot]in', address: 'Office of District Magistrate and Collector, Sector 17, Chandigarh 160017' },

  // Karnataka

  { id: 'KN-BGL-01', state: 'Karnataka', district: 'Bagalkot', name: 'Sri Sangappa', email: 'deo[dot]bagalkot[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bagalkot, Karnataka – 587101' },
  { id: 'KN-BLR-02', state: 'Karnataka', district: 'Ballari', name: 'Nagendra Prasad K, IAS', email: 'dcbellary[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Ballari, Karnataka – 583101' },
  { id: 'KN-BLG-03', state: 'Karnataka', district: 'Belagavi', name: 'Mohammed Roshan', email: 'deo[dot]belagavi[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Belagavi, Karnataka – 590001' },
  { id: 'KN-BRR-04', state: 'Karnataka', district: 'Bengaluru Rural', name: 'BASAVARAJU A B', email: 'deobangalorer3[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bengaluru Rural, Karnataka – 562110' },
  { id: 'KN-BRU-05', state: 'Karnataka', district: 'Bengaluru Urban', name: 'JAGADEESH A G IAS', email: 'dwcd[dot]dd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bengaluru Urban, Karnataka – 560001' },
  { id: 'KN-BDR-06', state: 'Karnataka', district: 'Bidar', name: 'SMT SHILPA SHARMA, I.A.S.', email: 'deo[dot]bidar[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bidar, Karnataka – 585401' },
  { id: 'KN-CMN-07', state: 'Karnataka', district: 'Chamarajanagar', name: 'SHREEROOPA IAS', email: 'deo[dot]cnagar[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Chamarajanagar, Karnataka – 571313' },
  { id: 'KN-CKB-08', state: 'Karnataka', district: 'Chikballapur', name: 'P N Ravindra', email: 'deo[dot]ckbpur[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Chikkaballapur, Karnataka – 562101' },
  { id: 'KN-CMG-09', state: 'Karnataka', district: 'Chikkamagalur', name: 'N M NAGARAJA', email: 'deo[dot]cmagalur[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Chikkamagaluru, Karnataka – 577101' },
  { id: 'KN-CTG-10', state: 'Karnataka', district: 'Chitradurga', name: 'VENKATESH T.', email: 'deo[dot]chitradurga[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Chitradurga, Karnataka – 577501' },
  { id: 'KN-DKD-11', state: 'Karnataka', district: 'Dakshina Kannada', name: 'Darshan H.V', email: 'dc[dot]mnglr[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Mangaluru, Dakshina Kannada, Karnataka – 575001' },
  { id: 'KN-DVD-12', state: 'Karnataka', district: 'Davanagere', name: 'G M Gangadharaswamy I A S', email: 'deo[dot]davanagere[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Davanagere, Karnataka – 577001' },
  { id: 'KN-DHW-13', state: 'Karnataka', district: 'Dharwad', name: 'R.Snehal', email: 'deo[dot]dharwad[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Dharwad, Karnataka – 580001' },
  { id: 'KN-GDG-14', state: 'Karnataka', district: 'Gadag', name: 'Sri C N Sreedhar', email: 'deo[dot]gadag[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Gadag, Karnataka – 582101' },
  { id: 'KN-HSN-15', state: 'Karnataka', district: 'Hassan', name: 'K S LATHAKUMARI', email: 'deo[dot]hassan[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Hassan, Karnataka – 573201' },
  { id: 'KN-HVR-16', state: 'Karnataka', district: 'Haveri', name: 'Dr.Vijayamahantesh B Danammanavar', email: 'deo[dot]haveri[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Haveri, Karnataka – 581110' },
  { id: 'KN-KLB-17', state: 'Karnataka', district: 'Kalaburagi', name: 'FOUZIA TARANNUM B', email: 'deo[dot]kalaburagi[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Kalaburagi, Karnataka – 585102' },
  { id: 'KN-KDG-18', state: 'Karnataka', district: 'Kodagu', name: 'Somashekar S.J.', email: 'deokodagu[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Madikeri, Kodagu, Karnataka – 571201' },
  { id: 'KN-KLR-19', state: 'Karnataka', district: 'Kolar', name: 'Dr. M Ravi I.A.S', email: 'dcoffice[dot]klr[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Kolar, Karnataka – 563101' },
  { id: 'KN-KPL-20', state: 'Karnataka', district: 'Koppal', name: 'Suresh B Itnal', email: 'deo[dot]koppal[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Koppal, Karnataka – 583231' },
  { id: 'KN-MDY-21', state: 'Karnataka', district: 'Mandya', name: 'Dr.KUMARA I A S', email: 'dcmandya09[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Mandya, Karnataka – 571401' },
  { id: 'KN-MYS-22', state: 'Karnataka', district: 'Mysuru', name: 'LAKSHMIKANTH REDDY G', email: 'dcofficemysuru[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Mysuru, Karnataka – 570001' },
  { id: 'KN-RCR-23', state: 'Karnataka', district: 'Raichur', name: 'SRI NITISH K', email: 'dcrevrcr[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Raichur, Karnataka – 584101' },
  { id: 'KN-RMN-24', state: 'Karnataka', district: 'Ramanagara', name: 'Shri. Yeshwanth V.Gurukar, IAS', email: 'deo[dot]ramanagara[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Ramanagara, Karnataka – 562159' },
  { id: 'KN-SMG-25', state: 'Karnataka', district: 'Shivamogga', name: 'Shri Prabhuling Kavalikatti I.A.S', email: 'hqa[dot]shimoga[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Shivamogga, Karnataka – 577201' },
  { id: 'KN-TMK-26', state: 'Karnataka', district: 'Tumakuru', name: 'Subha kalyan', email: 'deo[dot]tumkur[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Tumakuru, Karnataka – 572101' },
  { id: 'KN-UDP-27', state: 'Karnataka', district: 'Udupi', name: 'Abid Gadyal KAS', email: 'deo[dot]udupi[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Udupi, Karnataka – 576101' },
  { id: 'KN-UKD-28', state: 'Karnataka', district: 'Uttar Kannada', name: 'K Lakshmi Priya', email: 'dckarwar[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Karwar, Uttar Kannada, Karnataka – 581301' },
  { id: 'KN-VJN-29', state: 'Karnataka', district: 'Vijayanagara', name: 'Kavitha S Mannikeri', email: 'vijayanagardc[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Hosapete, Vijayanagara, Karnataka – 583201' },
  { id: 'KN-VJP-30', state: 'Karnataka', district: 'Vijayapura', name: 'Shri. Dr Anand K', email: 'deo[dot]bijapur[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Vijayapura, Karnataka – 586101' },
  { id: 'KN-YDG-31', state: 'Karnataka', district: 'Yadgir', name: 'Shree Harshal Bhoyar I.A.S', email: 'dcydg123[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Yadgir, Karnataka – 585201' },


  // haryana
  { id: 'HR-AMB-01', state: 'Haryana', district: 'Ambala', name: 'Smt. Miksha Ranga', email: 'poamb[dot]wcd2[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Ambala, Haryana – 134003' },
  { id: 'HR-BHW-02', state: 'Haryana', district: 'Bhiwani', name: 'Vaishali', email: 'pobhw[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bhiwani, Haryana – 127021' },
  { id: 'HR-CDD-03', state: 'Haryana', district: 'Charki Dadri', name: 'DNO Charki Dadri', email: 'dpowcddadri[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Charkhi Dadri, Haryana – 127306' },
  { id: 'HR-FBD-04', state: 'Haryana', district: 'Faridabad', name: 'Meenakshi Chaudhary', email: 'iccoscfbd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Faridabad, Haryana – 121001' },
  { id: 'HR-FTH-05', state: 'Haryana', district: 'Fatehabad', name: 'Kavita Rani', email: 'poftb[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Fatehabad, Haryana – 125050' },
  { id: 'HR-GRG-06', state: 'Haryana', district: 'Gurugram', name: 'Dr. Simran', email: 'posh-grg[dot]rev[at]hry[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Gurugram, Haryana – 122001' },
  { id: 'HR-HSR-07', state: 'Haryana', district: 'Hisar', name: 'Smt. Manju Rana', email: 'pohsr[dot] wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Hisar, Haryana – 125001' },
  { id: 'HR-JHJ-08', state: 'Haryana', district: 'Jhajar', name: 'Priyanka', email: 'pojjr[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Jhajjar, Haryana – 124103' },
  { id: 'HR-JND-09', state: 'Haryana', district: 'Jind', name: 'Smt. Seema Rohila', email: 'dpojind[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Jind, Haryana – 126102' },
  { id: 'HR-KTL-10', state: 'Haryana', district: 'Kaithal', name: 'Kaithal', email: 'poktl[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Kaithal, Haryana – 136027' },
  { id: 'HR-KRL-11', state: 'Haryana', district: 'Karnal', name: 'Seema parsad', email: 'Pokrl[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Karnal, Haryana – 132001' },
  { id: 'HR-KRK-12', state: 'Haryana', district: 'Kurukshetra', name: 'DNO Kurukshetra', email: 'dpokkr[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Kurukshetra, Haryana – 136118' },
  { id: 'HR-MHN-13', state: 'Haryana', district: 'Mahendragarh', name: 'Shalu Yadav', email: 'ponrl[dot]wcd1[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Narnaul, Mahendragarh, Haryana – 123001' },
  { id: 'HR-MWT-14', state: 'Haryana', district: 'Mewat', name: 'DNO Mewat', email: 'dpomwt[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Nuh (Mewat), Haryana – 122107' },
  { id: 'HR-PWL-15', state: 'Haryana', district: 'Palwal', name: 'Smt Nupur', email: 'popwl[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Palwal, Haryana – 121102' },
  { id: 'HR-PKL-16', state: 'Haryana', district: 'Panchkula', name: 'Ms. Seema Rohila', email: 'dpopkl[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Panchkula, Haryana – 134109' },
  { id: 'HR-PNP-17', state: 'Haryana', district: 'Panipat', name: 'DNO Panipat', email: 'popnp[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Panipat, Haryana – 132103' },
  { id: 'HR-RWR-18', state: 'Haryana', district: 'Rewari', name: 'Smt. Shalu Yadav', email: 'porwr[dot]wcd[at]hry[dot]nic[dot]in', address: 'Office of District Collector and District Magistrate, Rewari, Haryana – 123401' },
  { id: 'HR-RHK-19', state: 'Haryana', district: 'Rohtak', name: 'Smt Deepika Saini', email: 'Portk[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Rohtak, Haryana – 124001' },
  { id: 'HR-SRS-20', state: 'Haryana', district: 'Sirsa', name: 'Darshana Devi', email: 'posrs[dot]wcd[at]hry[dot]nic[dot]in', address: 'Office of District Collector and District Magistrate, Sirsa, Haryana – 125055' },
  { id: 'HR-SNP-21', state: 'Haryana', district: 'Sonipat', name: 'Smt. Parveen Kumari', email: 'posnp[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Sonipat, Haryana – 131001' },
  { id: 'HR-YMN-22', state: 'Haryana', district: 'Yamunanagar', name: 'Yamunanagar', email: 'dpoynr[dot]wcd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Yamunanagar, Haryana – 135001' },

  // Gujarat

  { id: 'GJ-AHD-01', state: 'Gujarat', district: 'Ahmedabad', name: 'JIGAR B JASANI', email: 'WCO-WCD-AHD[at]GUJARAT[dot]GOV[dot]IN', address: 'Office of District Collector and District Magistrate, Ahmedabad, Gujarat – 380001' },
  { id: 'GJ-AMR-02', state: 'Gujarat', district: 'Amreli', name: 'S. I. Kanzariya', email: 'wco-wco-amr[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Amreli, Gujarat – 365601' },
  { id: 'GJ-AND-03', state: 'Gujarat', district: 'Anand', name: 'NILESWARIBA K. GOHIL', email: 'wco-wcd-and[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Anand, Gujarat – 388001' },
  { id: 'GJ-ARV-04', state: 'Gujarat', district: 'Aravalli', name: 'HASINAABEN G. MANSURI', email: 'wco-wcd-arv[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Modasa, Aravalli, Gujarat – 383315' },
  { id: 'GJ-BNS-05', state: 'Gujarat', district: 'Banas Kantha', name: 'WOMEN AND CHILD OFFICER', email: 'wco-wcd-ban[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Palanpur, Gujarat – 385001' },
  { id: 'GJ-BHR-06', state: 'Gujarat', district: 'Bharuch', name: 'RPITESHBHAI VALJIBHAI VASAVA', email: 'dpo-wcd-bha[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Bharuch, Gujarat – 392001' },
  { id: 'GJ-BHV-07', state: 'Gujarat', district: 'Bhavnagar', name: 'R K JAKHANIYA', email: 'WCO-WCD-BAV[at]GUJARAT[dot]GOV[dot]IN', address: 'Office of District Collector and District Magistrate, Bhavnagar, Gujarat – 364001' },
  { id: 'GJ-BOT-08', state: 'Gujarat', district: 'Botadi', name: 'DNO Botadi', email: 'wco-wcd-bot[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Botad, Gujarat – 364710' },
  { id: 'GJ-CHU-09', state: 'Gujarat', district: 'Chhota Udeipur', name: 'Hinaben Dalsangbhai Chaudhari', email: 'wco-wcd-chhotta[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Chhota Udepur, Gujarat – 391165' },
  { id: 'GJ-DHD-10', state: 'Gujarat', district: 'Dahod', name: 'ROHANKUMAR A CHAUDHARI', email: 'wco-wcd-dah[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Dahod, Gujarat – 389151' },
  { id: 'GJ-DNG-11', state: 'Gujarat', district: 'Dang', name: 'Dr. M.A.Multani', email: 'wco-wcd-dan[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Ahwa, Dang, Gujarat – 394710' },
  { id: 'GJ-DWK-12', state: 'Gujarat', district: 'Devbhumi Dwarka', name: 'Dr. Chandresh C Bhambhi', email: 'wco-wcd-dwarka[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Dwarka, Gujarat – 361335' },
  { id: 'GJ-GDN-13', state: 'Gujarat', district: 'Gandhinagar', name: 'R.A.RATHOD', email: 'wco-wcd-gnr[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Gandhinagar, Gujarat – 382010' },
  { id: 'GJ-GRS-14', state: 'Gujarat', district: 'Gir Somnath', name: 'MUKESHKUMAR G VARSUR', email: 'wco-wcd-gir[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Veraval, Gir Somnath, Gujarat – 362265' },
  { id: 'GJ-JMN-15', state: 'Gujarat', district: 'Jamnagar', name: 'Dr Pooja Rameshchandra Dodiya', email: 'POOJADODIA265[at]GMAIL[dot]COM', address: 'Office of District Collector and District Magistrate, Jamnagar, Gujarat – 361001' },
  { id: 'GJ-JNG-16', state: 'Gujarat', district: 'Junagadh', name: 'CHETAN G. SOJITRA', email: 'wco-wcd-jun[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Junagadh, Gujarat – 362001' },
  { id: 'GJ-KCH-17', state: 'Gujarat', district: 'Kachchh', name: 'DNO Kachchh', email: 'wco-wcd-kut[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Bhuj, Kachchh, Gujarat – 370001' },
  { id: 'GJ-KHD-18', state: 'Gujarat', district: 'Kheda', name: 'FARJANABAANU N KHAN', email: 'wco-wcd-khe[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Nadiad, Gujarat – 387001' },
  { id: 'GJ-MHS-19', state: 'Gujarat', district: 'Mahesana', name: 'MITESHKUMAR K GADHAVI', email: 'WCO-WCD-MEH[at]GUJARAT[dot]GOV[dot]IN', address: 'Office of District Collector and District Magistrate, Mehsana, Gujarat – 384001' },
  { id: 'GJ-MHS-20', state: 'Gujarat', district: 'Mahisagar', name: 'MANHARSINH V ROZ', email: 'wco-wcd-mah[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Lunawada, Mahisagar, Gujarat – 389230' },
  { id: 'GJ-MRB-21', state: 'Gujarat', district: 'Morbi', name: 'J B Trivedi', email: 'wco-wcd-morbi[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Morbi, Gujarat – 363641' },
  { id: 'GJ-NRM-22', state: 'Gujarat', district: 'Narmada', name: 'Jitendrakumar B Parmar', email: 'wco-wcd-nar[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Rajpipla, Narmada, Gujarat – 393145' },
  { id: 'GJ-NVS-23', state: 'Gujarat', district: 'Navsari', name: 'Women and Child Officer', email: 'wconavsari[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Navsari, Gujarat – 396445' },
  { id: 'GJ-PMH-24', state: 'Gujarat', district: 'Panch Mahals', name: 'MADHAVI M CHAUHAN', email: 'wcopanchmahal[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Godhra, Gujarat – 389001' },
  { id: 'GJ-PTN-25', state: 'Gujarat', district: 'Patan', name: 'MEGHAABEN B GOSWAMI', email: 'wco-wcd-pat[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Patan, Gujarat – 384265' },
  { id: 'GJ-PRB-26', state: 'Gujarat', district: 'Porbandar', name: 'Hansaben B Tadhani', email: 'wco-wcd-por[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Porbandar, Gujarat – 360575' },
  { id: 'GJ-RJK-27', state: 'Gujarat', district: 'Rajkot', name: 'Dr. Janaksinh C Gohil', email: 'wcorajkot[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Rajkot, Gujarat – 360001' },
  { id: 'GJ-SBK-28', state: 'Gujarat', district: 'Sabar Kantha', name: 'DNO Sabar-Kantha', email: 'wcosabarkantha[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Himmatnagar, Gujarat – 383001' },
  { id: 'GJ-SRT-29', state: 'Gujarat', district: 'Surat', name: 'R.N.GAMIT', email: 'wco-wcd-sur[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Surat, Gujarat – 395003' },
  { id: 'GJ-SRN-30', state: 'Gujarat', district: 'Surendranagar', name: 'V.S.SHAH', email: 'wco-wcd-srn[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Surendranagar, Gujarat – 363001' },
  { id: 'GJ-TPI-31', state: 'Gujarat', district: 'Tapi', name: 'Sulochana S Patel', email: 'wco-wcd-tapi[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Vyara, Tapi, Gujarat – 394650' },
  { id: 'GJ-VDD-32', state: 'Gujarat', district: 'Vadodara', name: 'SHRI S.R. AMBARIYA', email: 'wcovadodara[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Vadodara, Gujarat – 390001' },
  { id: 'GJ-VLS-33', state: 'Gujarat', district: 'Valsad', name: 'S R DESAI', email: 'wco-wcd-val[at]gujarat[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Valsad, Gujarat – 396001' },

  // Jharkhand

  { id: 'JH-BKR-01', state: 'Jharkhand', district: 'Bokaro', name: 'Smt Suman Gupta', email: 'cdpo[dot]nawadih[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bokaro, Jharkhand – 827001' },
  { id: 'JH-CHT-02', state: 'Jharkhand', district: 'Chatra', name: 'Smt Renu Ravi', email: 'awc7[dot]monitoring[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Chatra, Jharkhand – 825401' },
  { id: 'JH-DGH-03', state: 'Jharkhand', district: 'Deoghar', name: 'Kumari Ranjana', email: 'awc17[dot]monitoring[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Deoghar, Jharkhand – 814112' },
  { id: 'JH-DHB-04', state: 'Jharkhand', district: 'Dhanbad', name: 'Sneh Kashyap', email: 'dcps-dhanbad[at]jharkhandmail[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Dhanbad, Jharkhand – 826001' },
  { id: 'JH-DMK-05', state: 'Jharkhand', district: 'Dumka', name: 'Kumari Ritu', email: 'jarmundicdpo[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Dumka, Jharkhand – 814101' },
  { id: 'JH-ESB-06', state: 'Jharkhand', district: 'East Singhbhum', name: 'Mrs Sandhya Rani', email: 'awc6[dot]monitoring[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Jamshedpur, Jharkhand – 831001' },
  { id: 'JH-GRH-07', state: 'Jharkhand', district: 'Garwha', name: 'Alpna Kumari', email: 'dswo-in-charge', address: 'Office of District Collector and District Magistrate, Garhwa, Jharkhand – 822114' },
  { id: 'JH-GRD-08', state: 'Jharkhand', district: 'Giridih', name: 'Smt Anita Kujur', email: 'dswgiridih2324[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Giridih, Jharkhand – 815301' },
  { id: 'JH-GDD-09', state: 'Jharkhand', district: 'Godda', name: 'Smt Purnima Kumari', email: 'DSWOGODDA[dot]JH[at]GMAIL[dot]COM', address: 'Office of District Collector and District Magistrate, Godda, Jharkhand – 814133' },
  { id: 'JH-GML-10', state: 'Jharkhand', district: 'Gumla', name: 'ARTI KUMARI', email: 'awc3[dot]monitoring[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Gumla, Jharkhand – 835207' },
  { id: 'JH-HZB-11', state: 'Jharkhand', district: 'Hazaribagh', name: 'Shipra Sinha', email: 'awc15[dot]monitoring[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Hazaribagh, Jharkhand – 825301' },
  { id: 'JH-JMT-12', state: 'Jharkhand', district: 'Jamtara', name: 'Dr. Kalidas Murmu', email: 'acmo[dot]jamtara[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Jamtara, Jharkhand – 815351' },
  { id: 'JH-KHN-13', state: 'Jharkhand', district: 'Khunti', name: 'Smt Anisha Kujur', email: 'dswo-khunti[at]jharkhandmail[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Khunti, Jharkhand – 835210' },
  { id: 'JH-KDM-14', state: 'Jharkhand', district: 'Koderma', name: 'Smt Kanak Kumari Tirky', email: 'drmanojkumar002[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Koderma, Jharkhand – 825410' },
  { id: 'JH-LTH-15', state: 'Jharkhand', district: 'Latehar', name: 'ALKA HEMBROM', email: 'latehardswo[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Latehar, Jharkhand – 829206' },
  { id: 'JH-LDG-16', state: 'Jharkhand', district: 'Lohardaga', name: 'Sushama Neelam Soreng', email: 'awc4[dot]monitoring[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Lohardaga, Jharkhand – 835302' },
  { id: 'JH-PKR-17', state: 'Jharkhand', district: 'Pakur', name: 'Smt Basanti Gladish Bara', email: 'awc20[dot]monitoring[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Pakur, Jharkhand – 816107' },
  { id: 'JH-PLM-18', state: 'Jharkhand', district: 'Palamau', name: 'NEETA CHAUHAN', email: 'dswopalamau[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Daltonganj, Palamu, Jharkhand – 822101' },
  { id: 'JH-RMG-19', state: 'Jharkhand', district: 'Ramgarh', name: 'SMT. INDU PRABHA KHALKHO', email: 'awc24[dot]monitoring[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Ramgarh, Jharkhand – 829122' },
  { id: 'JH-RNC-20', state: 'Jharkhand', district: 'Ranchi', name: 'Smt Surbhi Singh', email: 'awc1[dot]monitoring[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Ranchi, Jharkhand – 834001' },
  { id: 'JH-SHG-21', state: 'Jharkhand', district: 'Sahibganj', name: 'Sanjay Kumar Das', email: 'jilasamajkalyan[dot]sahibganj[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Sahibganj, Jharkhand – 816109' },
  { id: 'JH-SKH-22', state: 'Jharkhand', district: 'Saraikela Kharsawan', name: 'Smt. Satya Thakur, DSWO', email: 'awc11[dot]monitoring1[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Saraikela, Jharkhand – 833219' },
  { id: 'JH-SMD-23', state: 'Jharkhand', district: 'Simdega', name: 'Suraj Muni Kumari', email: 'awc5[dot]monitoring[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Simdega, Jharkhand – 835223' },
  { id: 'JH-WSB-24', state: 'Jharkhand', district: 'West Singhbhum', name: 'SWETA BHARTI', email: 'awc10[dot]monitoring1[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Chaibasa, West Singhbhum, Jharkhand – 833201' },

  // Andhra Pradesh

  { id: 'AP-ASR-01', state: 'Andhra Pradesh', district: 'Alluri Sitharama Raju', name: 'Smt. V V. Komala Lakshmi', email: 'pddwceoalluri[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Paderu, Alluri Sitharama Raju, Andhra Pradesh – 531024' },
  { id: 'AP-AKP-02', state: 'Andhra Pradesh', district: 'Anakapalli', name: 'N. SURYA LAKSHMI', email: 'dwcweoakp[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Anakapalli, Andhra Pradesh – 531001' },
  { id: 'AP-ANM-04', state: 'Andhra Pradesh', district: 'Annamayya', name: 'K. Hymavathy', email: 'annamayyadistd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Rayachoti, Annamayya, Andhra Pradesh – 516269' },
  { id: 'AP-BPT-05', state: 'Andhra Pradesh', district: 'Bapatla', name: 'Kummari Usha Rani', email: 'Sakhiosc-bapatla[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bapatla, Andhra Pradesh – 522101' },
  { id: 'AP-KSM-07', state: 'Andhra Pradesh', district: 'Dr. B.R. Ambedkar Konaseema', name: 'Smt. K. Naga Mani', email: 'dwcweokonasem[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Amalapuram, Konaseema, Andhra Pradesh – 533201' },
  { id: 'AP-ELR-09', state: 'Andhra Pradesh', district: 'Eluru', name: 'Smt. P. SARADA', email: 'pdwdcweluruwg[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Eluru, Andhra Pradesh – 534001' },
  { id: 'AP-KKD-11', state: 'Andhra Pradesh', district: 'Kakinada', name: 'CH LAKSHMI', email: 'pd_egdt[at]yahoo[dot]com', address: 'Office of District Collector and District Magistrate, Kakinada, Andhra Pradesh – 533001' },
  { id: 'AP-NDL-14', state: 'Andhra Pradesh', district: 'Nandyal', name: 'V. Leelavathi Devi', email: 'dwcwnandyal[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Nandyal, Andhra Pradesh – 518501' },
  { id: 'AP-NTR-15', state: 'Andhra Pradesh', district: 'NTR', name: 'Ch. Saigeetha', email: 'dwcweon-trvja[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Vijayawada, NTR District, Andhra Pradesh – 520002' },
  { id: 'AP-PLN-16', state: 'Andhra Pradesh', district: 'Palnadu', name: 'M. Umadevi', email: 'dwcweopalnadu[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Narasaraopet, Palnadu, Andhra Pradesh – 522601' },
  { id: 'AP-PRM-17', state: 'Andhra Pradesh', district: 'Parvathipuram Manyam', name: 'T Kanaka Durga', email: 'dwcweo-manyam[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Parvathipuram, Andhra Pradesh – 535501' },
  { id: 'AP-PLV-18', state: 'Andhra Pradesh', district: 'Polavaram', name: 'DNO Polavaram', email: 'dno-polavaram[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Polavaram, Andhra Pradesh – 534315' },
  { id: 'AP-NLR-20', state: 'Andhra Pradesh', district: 'SPSR Nellore', name: 'B. Hena Suzan', email: 'dwcweon-lr[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Nellore, Andhra Pradesh – 524001' },
  { id: 'AP-SSD-21', state: 'Andhra Pradesh', district: 'Sri Sathya Sai', name: 'M. Anuradamma', email: 'dwcweo-sssd[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Puttaparthi, Andhra Pradesh – 515134' },
  { id: 'AP-TPT-23', state: 'Andhra Pradesh', district: 'Tirupati', name: 'Smt S. Vasantha Bai', email: 'dwcweotpt[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Tirupati, Andhra Pradesh – 517501' },
  { id: 'AP-VZG-24', state: 'Andhra Pradesh', district: 'Visakhapatnam', name: 'Smt. CH. Santhoshi Kumari', email: 'dwcweo-vizag[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Visakhapatnam, Andhra Pradesh – 530002' },
  { id: 'AP-YSR-27', state: 'Andhra Pradesh', district: 'Y.S.R. Kadapa', name: 'P Nageswari', email: 'pd_kadapa[at]yahoo[dot]com', address: 'Office of District Collector and District Magistrate, Kadapa, Andhra Pradesh – 516001' },

  // Assam

  { id: 'AS-BJL-01', state: 'Assam', district: 'Bajali', name: 'Mridul Kumar Das, ACS', email: 'dc-bajali[at]assam[dot]gov[dot]in', address: 'Office of District Collector and District Magistrate, Pathsala, Bajali, Assam – 781325' },
  { id: 'AS-BKS-02', state: 'Assam', district: 'Baksa', name: 'Shri Gautam Das, ACS', email: 'dc-baksa[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, Mushalpur, Assam – 781372' },
  { id: 'AS-BRP-03', state: 'Assam', district: 'Barpeta', name: 'Sangeeta Sarkar', email: 'dc-barpeta[at]nic[dot]in', address: 'Office of District Collector and District Magistrate, Barpeta, Assam – 781301' },
  { id: 'AS-BSN-04', state: 'Assam', district: 'Biswanath', name: 'Mainul Hoque Choudhury', email: 'dswobiswanath[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Biswanath Chariali, Assam – 784176' },
  { id: 'AS-BGN-05', state: 'Assam', district: 'Bongaigaon', name: 'Jayanta Kr. Das', email: 'dhew-bongaigaon2023[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Bongaigaon, Assam – 783380' },
  { id: 'AS-CCH-06', state: 'Assam', district: 'Cachar', name: 'Mridul Kumar Yadav, IAS', email: 'dhew-cachar23[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Silchar, Assam – 788001' },
  { id: 'AS-CRD-07', state: 'Assam', district: 'Charaideo', name: 'Ms. Parismita Saikia', email: 'dswo-charaideo2019[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Sonari, Assam – 785690' },
  { id: 'AS-CRG-08', state: 'Assam', district: 'Chirang', name: 'Jatin Bora, ACS', email: 'dhew-chirang2023[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Kajalgaon, Assam – 783385' },
  { id: 'AS-DRG-09', state: 'Assam', district: 'Darrang', name: 'Sri Kukheshwar Borah', email: 'dhew-darrang2023[at]gmail[dot]com', address: 'Office of District Collector and District Magistrate, Mangaldoi, Assam – 784125' },

  // Arunachal Pradesh (remaining filled)

  { id: 'AR-BCH-02', state: 'Arunachal Pradesh', district: 'Bichom', name: 'Gashami Yamchaduma', email: 'ar[dot]womenchild[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Bichom, Arunachal Pradesh – 790001' },
  { id: 'AR-EKM-05', state: 'Arunachal Pradesh', district: 'East Kameng', name: 'Tasso Ashad', email: 'ddicds-eka[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Seppa, East Kameng, Arunachal Pradesh – 790102' },
  { id: 'AR-ESG-06', state: 'Arunachal Pradesh', district: 'East Siang', name: 'M.T. Padung', email: 'deputydirector-icds[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Pasighat, Arunachal Pradesh – 791102' },
  { id: 'AR-KML-07', state: 'Arunachal Pradesh', district: 'Kamle', name: 'Gedam Don', email: 'cdpo-tamenraga[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Raga, Kamle, Arunachal Pradesh – 791120' },
  { id: 'AR-KYP-08', state: 'Arunachal Pradesh', district: 'Keyi Panyor', name: 'Taba Anu', email: 'icds-projectyachuli[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Yachuli, Arunachal Pradesh – 791120' },
  { id: 'AR-KRD-09', state: 'Arunachal Pradesh', district: 'Kra Daadi', name: 'Tania Kampu', email: 'cdpo-palinicds[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Palin, Arunachal Pradesh – 791118' },
  { id: 'AR-KKY-10', state: 'Arunachal Pradesh', district: 'Kurung Kumey', name: 'Kago Maya', email: 'ddic-dskkumey[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Koloriang, Arunachal Pradesh – 791118' },
  { id: 'AR-LPR-11', state: 'Arunachal Pradesh', district: 'Leparada', name: 'Mikjum Doke', email: 'icds-basar[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Basar, Arunachal Pradesh – 791101' },
  { id: 'AR-LHT-12', state: 'Arunachal Pradesh', district: 'Lohit', name: 'Solel Longling', email: 'ddic-dstezu[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Tezu, Arunachal Pradesh – 792001' },
  { id: 'AR-LDG-13', state: 'Arunachal Pradesh', district: 'Longding', name: 'Nyamnop Matey', email: 'cdpo-longding12[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Longding, Arunachal Pradesh – 792131' },
  { id: 'AR-LDB-14', state: 'Arunachal Pradesh', district: 'Lower Dibang Valley', name: 'Bisailu Chaitom', email: 'ddic-dsroing[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Roing, Arunachal Pradesh – 792110' },
  { id: 'AR-LSG-15', state: 'Arunachal Pradesh', district: 'Lower Siang', name: 'Jikom Doye', email: 'cdpo-likabali2017[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Likabali, Arunachal Pradesh – 791125' },
  { id: 'AR-LSB-16', state: 'Arunachal Pradesh', district: 'Lower Subansiri', name: 'Smti. Kago Maya', email: 'dc-lsuban-arn[at]nic[dot]in', address: 'Office of Deputy Commissioner, Ziro, Arunachal Pradesh – 791120' },
  { id: 'AR-NMS-17', state: 'Arunachal Pradesh', district: 'Namsai', name: 'Dr Miti Sibok', email: 'dc-namsai-arn[at]gov[dot]in', address: 'Office of Deputy Commissioner, Namsai, Arunachal Pradesh – 792103' },
  { id: 'AR-PKS-18', state: 'Arunachal Pradesh', district: 'Pakke Kessang', name: 'S.C Tok', email: 'cdpo-pakkekesang[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Pakke Kessang, Arunachal Pradesh – 790102' },
  { id: 'AR-SHY-20', state: 'Arunachal Pradesh', district: 'Shi Yomi', name: 'TK Singh', email: 'cdpo-mechukha1[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Tato, Arunachal Pradesh – 791003' },
  { id: 'AR-SGN-21', state: 'Arunachal Pradesh', district: 'Siang', name: 'Zirngam Kadu', email: 'cdpo-pangin[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Pangin, Arunachal Pradesh – 791102' },
  { id: 'AR-TWG-22', state: 'Arunachal Pradesh', district: 'Tawang', name: 'Dondup Pema', email: 'cdpo-tawang-icds[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Tawang, Arunachal Pradesh – 790104' },
  { id: 'AR-USG-24', state: 'Arunachal Pradesh', district: 'Upper Siang', name: 'Ine Perti', email: 'icds-ykg[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Yingkiong, Arunachal Pradesh – 791002' },
  { id: 'AR-USB-25', state: 'Arunachal Pradesh', district: 'Upper Subansiri', name: 'Dr Nyajar Gusar', email: 'ddic-dsdaporijo[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Daporijo, Arunachal Pradesh – 791122' },
  { id: 'AR-WKM-26', state: 'Arunachal Pradesh', district: 'West Kameng', name: 'RT Derud', email: 'ddic-dsbomdila[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Bomdila, Arunachal Pradesh – 790001' },
  { id: 'AR-WSG-27', state: 'Arunachal Pradesh', district: 'West Siang', name: 'YR Etedagbomriba', email: 'riba0028[at]gmail[dot]com', address: 'Office of Deputy Commissioner, Aalo, Arunachal Pradesh – 791001' },
]

export const getUniqueStates = (): string[] => {
  const states = Array.from(new Set(dnoData.map((entry) => entry.state))).sort()
  return states
}

export const getDistrictsByState = (state: string): string[] => {
  const districts = Array.from(
    new Set(dnoData.filter((entry) => entry.state === state).map((entry) => entry.district))
  ).sort()
  return districts
}

export const searchOfficers = (state: string, district: string): DNOEntry[] => {
  return dnoData
    .filter((entry) => entry.state === state && entry.district === district)
    .sort((a, b) => a.name.localeCompare(b.name))
}
