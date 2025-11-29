"use client"

import { useState } from "react"
import { Mail, CheckCircle2 } from "lucide-react"
import { SubscriptionForm } from "./subscription-form"

export function ComingSoon() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 flex flex-col">
      {/* Header */}
      <header className="w-full py-4 sm:py-6 px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-center gap-3 max-w-7xl mx-auto">
          <div className="relative">
            <img 
              src="/logo.jpg" 
              alt="University of Kabridahar" 
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-cover shadow-sm border-2 border-primary/10"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
          <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-foreground">
            University of Kabridahar
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-12 md:py-16">
        <div className="max-w-3xl w-full text-center space-y-8 sm:space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border-2 border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-xs sm:text-sm text-primary font-semibold tracking-wider uppercase">
              Beta Testers Needed
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] text-balance">
              Test Our App
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1]">
              Join Our Beta Program
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              We need <span className="text-primary font-bold">12 beta testers</span> with personal Gmail accounts 
              to test the University of Kabridahar app on Google Play Store.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
              Sign up with your Gmail address to get early access!
            </p>
          </div>

          {/* Subscription Form Card */}
          <div className="max-w-lg mx-auto w-full pt-4 sm:pt-6">
            <div className="bg-card border-2 border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
              {isSubscribed ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-primary">
                    <div className="p-2 rounded-full bg-primary/10">
                      <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <span className="font-bold text-lg sm:text-xl">You're on the beta list!</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    We'll send you an invite link to test the app on Google Play Store once we reach 12 testers.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span className="text-xs sm:text-sm">Check your email for confirmation</span>
                    </div>
                  </div>
                </div>
              ) : (
                <SubscriptionForm onSuccess={() => setIsSubscribed(true)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
