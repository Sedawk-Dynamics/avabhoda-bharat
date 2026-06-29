import { Navigation } from '@/components/navigation'
import { DistrictOfficerDirectory } from '@/components/district-officer-directory'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'PoSH District Officer Directory | Avabodha Bharat',
  description: 'Find District Compliance Officers under the PoSH Act across India. Connect with your district officer for POSH compliance guidance and support.',
}

export default function DistrictOfficerPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Gradient Header */}
      <div className="bg-gradient-to-b from-[#6B1B47] via-[#5A1B3F] to-[#2D1B4E] text-white pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            District Officer Directory under the PoSH Act (India)
          </h1>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl text-white/90 mb-4">
            Under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, the District Officer plays a critical compliance and oversight role.
          </p>
          <p className="text-sm text-white/80">
            The District Officer is responsible for administrative oversight, monitoring, and statutory compliance under the PoSH Act, including facilitation of local coordination and relief of mandatory grievance appeals.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/90">
            <p className="font-semibold">The directory helps enable users to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Search District Officers by State and District</li>
              <li>Identify the appropriate PoSH District Officer for compliance-related communication</li>
              <li>Submit formal grievances or requests to the District Officer</li>
              <li>Coordinate inter-organizational compliance efforts with district-level oversight</li>
            </ul>
          </div>
        </div>
      </div>
      <DistrictOfficerDirectory />
      <Footer />
    </main>
  )
}
