"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, ArrowRight, Mail } from "lucide-react"

interface SubscriptionFormProps {
  onSuccess: () => void
}

export function SubscriptionForm({ onSuccess }: SubscriptionFormProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    // Check if it's a Gmail address
    const emailDomain = email.split("@")[1]?.toLowerCase()
    if (emailDomain !== "gmail.com") {
      setError("Please use a Gmail address (e.g., yourname@gmail.com)")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      onSuccess()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {/* Email Input - Full width on mobile, better UX */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-foreground block text-left">
          Your Gmail Address
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
          <Input
            id="email"
            type="email"
            placeholder="yourname@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-14 pl-12 pr-4 text-base bg-background border-2 border-border text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
            disabled={isLoading}
            autoComplete="email"
            inputMode="email"
          />
        </div>
        {error && (
          <p className="text-sm text-destructive font-medium text-left animate-in fade-in slide-in-from-top-1">
            {error}
          </p>
        )}
      </div>

      {/* Submit Button - Full width on mobile */}
      <Button
        type="submit"
        disabled={isLoading || !email}
        className="w-full h-14 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            <span>Joining...</span>
          </>
        ) : (
          <>
            <span>Join Beta Program</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </>
        )}
      </Button>

      {/* Helper Text */}
      <div className="pt-2 space-y-1">
        <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
          <span className="font-medium">✓</span> Use your personal Gmail account
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground/70 text-center">
          You'll receive an invite to test the app on Google Play Store
        </p>
      </div>
    </form>
  )
}
