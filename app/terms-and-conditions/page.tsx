import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms & Conditions - University of Kabridahar",
  description:
    "Terms and Conditions for the University of Kabridahar Student Information Management System (UOK SIMS) mobile application.",
};

export default function TermsAndConditionsPage() {
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
              Terms & Conditions
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              <strong>Effective Date:</strong> November 30, 2025
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-foreground">
            <section className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                These terms and conditions apply to the{" "}
                <strong>UOK SIMS</strong> app (hereby referred to as
                "Application") for mobile devices that was created by{" "}
                <strong>cellutech</strong> (hereby referred to as "Service
                Provider") as a Free service.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Upon downloading or utilizing the Application, you are
                automatically agreeing to the following terms. It is strongly
                advised that you thoroughly read and understand these terms
                prior to using the Application.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Intellectual Property
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Unauthorized copying, modification of the Application, any part
                of the Application, or our trademarks is strictly prohibited.
                Any attempts to extract the source code of the Application,
                translate the Application into other languages, or create
                derivative versions are not permitted. All trademarks,
                copyrights, database rights, and other intellectual property
                rights related to the Application remain the property of the
                Service Provider.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Service Modifications and Charges
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Service Provider is dedicated to ensuring that the
                Application is as beneficial and efficient as possible. As such,
                they reserve the right to modify the Application or charge for
                their services at any time and for any reason. The Service
                Provider assures you that any charges for the Application or its
                services will be clearly communicated to you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Data Storage and Security
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Application stores and processes personal data that you have
                provided to the Service Provider in order to provide the
                Service. It is your responsibility to maintain the security of
                your phone and access to the Application. The Service Provider
                strongly advise against jailbreaking or rooting your phone,
                which involves removing software restrictions and limitations
                imposed by the official operating system of your device. Such
                actions could expose your phone to malware, viruses, malicious
                programs, compromise your phone's security features, and may
                result in the Application not functioning correctly or at all.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Third-Party Services
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Please note that the Application utilizes third-party services
                that have their own Terms and Conditions. Below are the links to
                the Terms and Conditions of the third-party service providers
                used by the Application:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Google Play Services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Internet Connection Requirements
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Please be aware that the Service Provider does not assume
                responsibility for certain aspects. Some functions of the
                Application require an active internet connection, which can be
                Wi-Fi or provided by your mobile network provider. The Service
                Provider cannot be held responsible if the Application does not
                function at full capacity due to lack of access to Wi-Fi or if
                you have exhausted your data allowance.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                If you are using the application outside of a Wi-Fi area, please
                be aware that your mobile network provider's agreement terms
                still apply. Consequently, you may incur charges from your
                mobile provider for data usage during the connection to the
                application, or other third-party charges. By using the
                application, you accept responsibility for any such charges,
                including roaming data charges if you use the application
                outside of your home territory (i.e., region or country) without
                disabling data roaming. If you are not the bill payer for the
                device on which you are using the application, they assume that
                you have obtained permission from the bill payer.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Device Responsibility
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Similarly, the Service Provider cannot always assume
                responsibility for your usage of the application. For instance,
                it is your responsibility to ensure that your device remains
                charged. If your device runs out of battery and you are unable
                to access the Service, the Service Provider cannot be held
                responsible.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                In terms of the Service Provider's responsibility for your use
                of the application, it is important to note that while they
                strive to ensure that it is updated and accurate at all times,
                they do rely on third parties to provide information to them so
                that they can make it available to you. The Service Provider
                accepts no liability for any loss, direct or indirect, that you
                experience as a result of relying entirely on this functionality
                of the application.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Application Updates and Termination
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Service Provider may wish to update the application at some
                point. The application is currently available as per the
                requirements for the operating system (and for any additional
                systems they decide to extend the availability of the
                application to) may change, and you will need to download the
                updates if you want to continue using the application. The
                Service Provider does not guarantee that it will always update
                the application so that it is relevant to you and/or compatible
                with the particular operating system version installed on your
                device. However, you agree to always accept updates to the
                application when offered to you. The Service Provider may also
                wish to cease providing the application and may terminate its
                use at any time without providing termination notice to you.
                Unless they inform you otherwise, upon any termination, (a) the
                rights and licenses granted to you in these terms will end; (b)
                you must cease using the application, and (if necessary) delete
                it from your device.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Changes to These Terms and Conditions
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                The Service Provider may periodically update their Terms and
                Conditions. Therefore, you are advised to review this page
                regularly for any changes. The Service Provider will notify you
                of any changes by posting the new Terms and Conditions on this
                page.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                These terms and conditions are effective as of{" "}
                <strong>November 30, 2025</strong>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                If you have any questions or suggestions about the Terms and
                Conditions, please do not hesitate to contact the Service
                Provider at{" "}
                <a
                  href="mailto:info@cellutech.net"
                  className="text-primary hover:underline"
                >
                  info@cellutech.net
                </a>
                .
              </p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-muted-foreground">
                <p className="font-semibold text-foreground">cellutech</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@cellutech.net"
                    className="text-primary hover:underline"
                  >
                    info@cellutech.net
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
