import { useState, useEffect } from 'react'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp?: string
}

export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Cargar preferencias desde localStorage
    const stored = localStorage.getItem('cookieConsent')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setPreferences(parsed)
      } catch (error) {
        console.error('Error parsing cookie preferences:', error)
      }
    }
    setIsLoaded(true)
  }, [])

  const savePreferences = (newPreferences: CookiePreferences) => {
    const preferencesWithTimestamp = {
      ...newPreferences,
      timestamp: new Date().toISOString()
    }
    
    localStorage.setItem('cookieConsent', JSON.stringify(preferencesWithTimestamp))
    setPreferences(preferencesWithTimestamp)
    
    // Aplicar las preferencias a través de GTM
    applyPreferencesToGTM(newPreferences)
  }

  const applyPreferencesToGTM = (prefs: CookiePreferences) => {
    if (typeof window === 'undefined') return

    // Configurar el consentimiento a través de GTM
    if (window.dataLayer) {
      // Enviar evento de consentimiento a GTM
      window.dataLayer.push({
        event: 'cookie_consent_update',
        cookie_consent: {
          necessary: prefs.necessary,
          analytics: prefs.analytics,
          marketing: prefs.marketing,
          timestamp: new Date().toISOString()
        }
      })

      // También enviar el formato estándar de consentimiento para GTM
      window.dataLayer.push({
        event: 'consent',
        consent_state: {
          analytics_storage: prefs.analytics ? 'granted' : 'denied',
          ad_storage: prefs.marketing ? 'granted' : 'denied',
          functionality_storage: prefs.necessary ? 'granted' : 'denied',
          personalization_storage: prefs.marketing ? 'granted' : 'denied',
          security_storage: prefs.necessary ? 'granted' : 'denied'
        }
      })
    }
  }

  const hasConsent = () => {
    return preferences !== null
  }

  const canTrackAnalytics = () => {
    return preferences?.analytics === true
  }

  const canTrackMarketing = () => {
    return preferences?.marketing === true
  }

  return {
    preferences,
    isLoaded,
    savePreferences,
    hasConsent,
    canTrackAnalytics,
    canTrackMarketing
  }
} 