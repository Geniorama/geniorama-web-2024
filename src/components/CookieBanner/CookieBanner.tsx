'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { useCookieConsent } from '@/hooks/useCookieConsent'

export default function CookieBanner() {
  const locale = useLocale()
  const { preferences, isLoaded, savePreferences, hasConsent } = useCookieConsent()
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Siempre true, no se puede desactivar
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Solo mostrar el banner si no hay consentimiento previo
    if (isLoaded && !hasConsent()) {
      setShowBanner(true)
    }
  }, [isLoaded, hasConsent])

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    savePreferences(preferences)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const preferences = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    savePreferences(preferences)
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    savePreferences(cookiePreferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handlePreferencesChange = (type: string, value: boolean) => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: value
    }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-50 border-t border-gray-700">
      <div className="container mx-auto max-w-6xl">
        {!showSettings ? (
          // Vista principal del banner
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2" style={{fontFamily: 'var(--font-geniorama)'}}>
                {locale === 'en' ? '🍪 Cookie Notice' : '🍪 Aviso de Cookies'}
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                {locale === 'en' 
                  ? 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.'
                  : 'Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en "Aceptar Todo", consientes al uso de cookies.'
                }
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <Link href="/cookies" className="text-blue-400 hover:underline">
                  {locale === 'en' ? 'Cookie Policy' : 'Política de Cookies'}
                </Link>
                <span>•</span>
                <Link href="/privacy" className="text-blue-400 hover:underline">
                  {locale === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm border border-gray-600 hover:border-white transition-colors"
              >
                {locale === 'en' ? 'Customize' : 'Personalizar'}
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm border border-gray-600 hover:border-white transition-colors"
              >
                {locale === 'en' ? 'Reject All' : 'Rechazar Todo'}
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm bg-white text-black hover:bg-gray-200 transition-colors font-semibold"
              >
                {locale === 'en' ? 'Accept All' : 'Aceptar Todo'}
              </button>
            </div>
          </div>
        ) : (
          // Vista de configuración personalizada
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold" style={{fontFamily: 'var(--font-geniorama)'}}>
                {locale === 'en' ? 'Cookie Preferences' : 'Preferencias de Cookies'}
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                <div>
                  <h4 className="font-semibold">
                    {locale === 'en' ? 'Necessary Cookies' : 'Cookies Necesarias'}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {locale === 'en' 
                      ? 'Essential for the website to function properly. Cannot be disabled.'
                      : 'Esenciales para el funcionamiento del sitio web. No se pueden desactivar.'
                    }
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.necessary}
                  disabled
                  className="w-4 h-4"
                />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                <div>
                  <h4 className="font-semibold">
                    {locale === 'en' ? 'Analytics Cookies' : 'Cookies de Análisis'}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {locale === 'en' 
                      ? 'Help us understand how visitors interact with our website (Google Analytics, Microsoft Clarity).'
                      : 'Nos ayudan a entender cómo interactúan los visitantes con nuestro sitio (Google Analytics, Microsoft Clarity).'
                    }
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.analytics}
                  onChange={(e) => handlePreferencesChange('analytics', e.target.checked)}
                  className="w-4 h-4"
                />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                <div>
                  <h4 className="font-semibold">
                    {locale === 'en' ? 'Marketing Cookies' : 'Cookies de Marketing'}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {locale === 'en' 
                      ? 'Used to deliver personalized advertisements and track marketing campaign performance.'
                      : 'Se utilizan para mostrar anuncios personalizados y rastrear el rendimiento de campañas de marketing.'
                    }
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.marketing}
                  onChange={(e) => handlePreferencesChange('marketing', e.target.checked)}
                  className="w-4 h-4"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors font-semibold"
              >
                {locale === 'en' ? 'Save Preferences' : 'Guardar Preferencias'}
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 border border-gray-600 hover:border-white transition-colors"
              >
                {locale === 'en' ? 'Cancel' : 'Cancelar'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 