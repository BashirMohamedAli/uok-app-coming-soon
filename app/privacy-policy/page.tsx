import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy - University of Kabridahar",
  description: "Privacy Policy for the University of Kabridahar Student Information Management System (UOK SIMS) mobile application.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Header */}
      <header className="w-full py-4 sm:py-6 px-4 sm:px-6 md:px-12 border-b border-border">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12">
              <Image 
                src="/logo.jpg" 
                alt="University of Kabridahar" 
                fill
                className="rounded-xl object-cover shadow-sm border-2 border-primary/10"
              />
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-foreground">
              University of Kabridahar
            </span>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-card border-2 border-border rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              <strong>Effective Date:</strong> November 30, 2025
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-foreground">
            <section className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                This privacy policy applies to the <strong>UOK SIMS</strong> app (hereby referred to as "Application") for mobile devices 
                that was created by <strong>cellutech</strong> (hereby referred to as "Service Provider") as a Free service. 
                This service is intended for use "AS IS".
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Collection and Use</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Application collects information when you download and use it. This information may include information such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your device's Internet Protocol address (e.g. IP address)</li>
                <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                <li>The time spent on the Application</li>
                <li>The operating system you use on your mobile device</li>
              </ul>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Application does not gather precise information about the location of your mobile device.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Service Provider may use the information you provided to contact you from time to time to provide you with 
                important information, required notices and marketing promotions.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                For a better experience, while using the Application, the Service Provider may require you to provide us with certain 
                personally identifiable information, including but not limited to <a href="mailto:info@cellutech.net" className="text-primary hover:underline">info@cellutech.net</a>. 
                The information that the Service Provider request will be retained by them and used as described in this privacy policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Third Party Access</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in 
                improving the Application and their service. The Service Provider may share your information with third parties in 
                the ways that are described in this privacy statement.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. 
                Below are the links to the Privacy Policy of the third-party service providers used by the Application:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Google Play Services</li>
              </ul>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Service Provider may disclose User Provided and Automatically Collected Information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the 
                safety of others, investigate fraud, or respond to a government request;</li>
                <li>with their trusted services providers who work on their behalf, do not have an independent use of the information 
                we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Opt-Out Rights</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                You can stop all collection of information by the Application easily by uninstalling it. You may use the standard 
                uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Retention Policy</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time 
                thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact 
                them at <a href="mailto:info@cellutech.net" className="text-primary hover:underline">info@cellutech.net</a> and they will 
                respond in a reasonable time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Children</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally 
                identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 
                13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a 
                parent or guardian and you are aware that your child has provided us with personal information, please contact the Service 
                Provider (<a href="mailto:info@cellutech.net" className="text-primary hover:underline">info@cellutech.net</a>) so that they 
                will be able to take the necessary actions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Security</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides 
                physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Changes</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes 
                to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy 
                regularly for any changes, as continued use is deemed approval of all changes.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                This privacy policy is effective as of <strong>November 30, 2025</strong>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Your Consent</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy 
                now and as amended by us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                If you have any questions regarding privacy while using the Application, or have questions about the practices, please 
                contact the Service Provider via email at <a href="mailto:info@cellutech.net" className="text-primary hover:underline">info@cellutech.net</a>.
              </p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-muted-foreground">
                <p className="font-semibold text-foreground">cellutech</p>
                <p>Email: <a href="mailto:info@cellutech.net" className="text-primary hover:underline">info@cellutech.net</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

