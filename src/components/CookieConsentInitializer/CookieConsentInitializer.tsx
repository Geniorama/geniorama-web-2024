'use client'

import { useEffect } from 'react'
import { useCookieConsent } from '@/hooks/useCookieConsent'

export default function CookieConsentInitializer() {
  const { preferences, isLoaded } = useCookieConsent()

  useEffect(() => {
    if (isLoaded && preferences && typeof window !== 'undefined' && window.dataLayer) {
      // Inicializar el consentimiento en GTM basándose en las preferencias guardadas
      window.dataLayer.push({
        event: 'consent',
        consent_state: {
          analytics_storage: preferences.analytics ? 'granted' : 'denied',
          ad_storage: preferences.marketing ? 'granted' : 'denied',
          functionality_storage: preferences.necessary ? 'granted' : 'denied',
          personalization_storage: preferences.marketing ? 'granted' : 'denied',
          security_storage: preferences.necessary ? 'granted' : 'denied'
        }
      })

      // También enviar un evento personalizado para tracking
      window.dataLayer.push({
        event: 'cookie_consent_loaded',
        cookie_consent: {
          necessary: preferences.necessary,
          analytics: preferences.analytics,
          marketing: preferences.marketing,
          timestamp: preferences.timestamp
        }
      })
    }
  }, [isLoaded, preferences])

  // Este componente no renderiza nada, solo maneja la lógica
  return null
} 