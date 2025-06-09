'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { useCookieConsent } from '@/hooks/useCookieConsent'

export default function CookieManager() {
  const locale = useLocale()
  const { preferences, savePreferences } = useCookieConsent()
  const [showModal, setShowModal] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: preferences?.analytics || false,
    marketing: preferences?.marketing || false
  })

  const handleSavePreferences = () => {
    savePreferences(cookiePreferences)
    setShowModal(false)
  }

  const handlePreferencesChange = (type: string, value: boolean) => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: value
    }))
  }

  const handleResetPreferences = () => {
    // Eliminar las preferencias guardadas
    localStorage.removeItem('cookieConsent')
    window.location.reload() // Recargar para mostrar el banner nuevamente
  }

  if (!preferences) return null

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="hover:underline text-lg underline hover:opacity-50 transition"
      >
        {locale === 'en' ? 'Manage Cookies' : 'Gestionar Cookies'}
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-black text-white p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold" style={{fontFamily: 'var(--font-geniorama)'}}>
                {locale === 'en' ? 'Cookie Preferences' : 'Preferencias de Cookies'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3 mb-4">
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
            
            <div className="flex flex-col gap-2">
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors font-semibold"
              >
                {locale === 'en' ? 'Save Preferences' : 'Guardar Preferencias'}
              </button>
              <button
                onClick={handleResetPreferences}
                className="px-4 py-2 border border-gray-600 hover:border-white transition-colors"
              >
                {locale === 'en' ? 'Reset All Preferences' : 'Restablecer Preferencias'}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-600 hover:border-white transition-colors"
              >
                {locale === 'en' ? 'Cancel' : 'Cancelar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 