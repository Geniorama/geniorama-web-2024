'use client'

import { useEffect } from 'react'
import { useLocale } from 'next-intl'

export default function Cookies() {
  const locale = useLocale()

  useEffect(() => {
   console.log('locale', locale)
  }, [locale])

  
  return (
    <div className='container text-white py-24'>
        <h1 className='text-8xl text-center'>
            {locale === 'en' ? 'Cookie Policy' : 'Política de Cookies'}
        </h1>
        
        {locale === 'en' ? (
            <div className='mt-5'>
                <h5><b>Last updated</b>: June 9, 2025</h5>
                <br />
                <p>
                    At Geniorama.co, we use cookies and similar technologies to improve your browsing experience, analyze site traffic, and personalize content. This policy explains what cookies are, what types we use, and how you can manage them.
                </p>
                
                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>1. What Are Cookies?</h2>
                <p>Cookies are small text files that websites store on your device when you visit them. They help remember your actions and preferences (such as language, session state, etc.), and they help us understand how users interact with our site.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>2. Types of Cookies We Use</h2>
                <div className='overflow-x-auto'>
                    <table className='w-full border-collapse border border-gray-600 mt-4'>
                        <thead>
                            <tr className='bg-gray-800'>
                                <th className='border border-gray-600 p-3 text-left'>Type of Cookie</th>
                                <th className='border border-gray-600 p-3 text-left'>Purpose</th>
                                <th className='border border-gray-600 p-3 text-left'>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-gray-600 p-3'><strong>Technical cookies</strong></td>
                                <td className='border border-gray-600 p-3'>Essential for the site to function</td>
                                <td className='border border-gray-600 p-3'>Save your preferences or login status</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-600 p-3'><strong>Analytics cookies</strong></td>
                                <td className='border border-gray-600 p-3'>Help us analyze user behavior and traffic</td>
                                <td className='border border-gray-600 p-3'>Google Analytics, Microsoft Clarity</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-600 p-3'><strong>Third-party cookies</strong></td>
                                <td className='border border-gray-600 p-3'>Set by external tools we use</td>
                                <td className='border border-gray-600 p-3'>Google, Brevo, Microsoft</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>3. Herramientas de Análisis y Seguimiento</h2>
                <p>We use the following tools to analyze website usage and user behavior:</p>
                
                <h3 className='text-xl font-bold mt-6 mb-3'>Google Analytics</h3>
                <p>We use Google Analytics, a web analysis service provided by Google LLC. This helps us understand how users interact with our website. Google may transfer this data to servers outside your country. More info:</p>
                <p className='mt-2'>👉 <a href="https://policies.google.com/technologies/cookies" className="text-blue-400 hover:underline">https://policies.google.com/technologies/cookies</a></p>
                
                <h3 className='text-xl font-bold mt-6 mb-3'>Microsoft Clarity</h3>
                <p>We use Microsoft Clarity to analyze user behavior and create heatmaps that help us understand how visitors interact with our website. Microsoft may transfer this data to servers outside your country. More info:</p>
                <p className='mt-2'>👉 <a href="https://clarity.microsoft.com/terms" className="text-blue-400 hover:underline">https://clarity.microsoft.com/terms</a></p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>4. Consent</h2>
                <p>When you first visit our site, a cookie banner allows you to accept or customize your cookie preferences. You can withdraw your consent at any time by changing your browser settings or reopening the banner.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>5. How to Disable Cookies</h2>
                <p>You can delete or block cookies from your browser settings:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li><strong>Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" className="text-blue-400 hover:underline">https://support.google.com/chrome/answer/95647</a></li>
                    <li><strong>Firefox:</strong> <a href="https://support.mozilla.org/en-US/kb/cookies" className="text-blue-400 hover:underline">https://support.mozilla.org/en-US/kb/cookies</a></li>
                    <li><strong>Safari:</strong> <a href="https://support.apple.com/en-us/HT201265" className="text-blue-400 hover:underline">https://support.apple.com/en-us/HT201265</a></li>
                    <li><strong>Edge:</strong> <a href="https://support.microsoft.com/en-us/help/4027947" className="text-blue-400 hover:underline">https://support.microsoft.com/en-us/help/4027947</a></li>
                </ul>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>6. Changes to This Policy</h2>
                <p>We reserve the right to update this policy to reflect legal or technical changes. We encourage you to review it regularly.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>7. Contact</h2>
                <p>If you have any questions about our cookie policy, contact us at:</p>
                <p className='text-lg'><a href="mailto:contacto@geniorama.co" className="text-blue-400 hover:underline">contacto@geniorama.co</a></p>
            </div>
        ) : (
            <div className='mt-5'>
                <h5><b>Última actualización</b>: 9 junio 2025</h5>
                <br />
                <p>
                    En Geniorama.co, utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario, analizar la navegación y personalizar contenidos. Esta política explica qué son las cookies, qué tipos usamos y cómo puedes gestionarlas.
                </p>
                
                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>1. ¿Qué son las Cookies?</h2>
                <p>Las cookies son pequeños archivos de texto que un sitio web guarda en tu dispositivo cuando lo visitas. Sirven para recordar tu actividad (como idioma preferido, sesiones iniciadas, etc.) y para analizar el comportamiento de navegación.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>2. Tipos de Cookies que Usamos</h2>
                <div className='overflow-x-auto'>
                    <table className='w-full border-collapse border border-gray-600 mt-4'>
                        <thead>
                            <tr className='bg-gray-800'>
                                <th className='border border-gray-600 p-3 text-left'>Tipo de cookie</th>
                                <th className='border border-gray-600 p-3 text-left'>Finalidad</th>
                                <th className='border border-gray-600 p-3 text-left'>Ejemplo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-gray-600 p-3'><strong>Cookies técnicas</strong></td>
                                <td className='border border-gray-600 p-3'>Esenciales para el funcionamiento del sitio</td>
                                <td className='border border-gray-600 p-3'>Guardar tus preferencias o sesión</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-600 p-3'><strong>Cookies de análisis</strong></td>
                                <td className='border border-gray-600 p-3'>Nos permiten entender cómo navegan los usuarios</td>
                                <td className='border border-gray-600 p-3'>Google Analytics, Microsoft Clarity</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-600 p-3'><strong>Cookies de terceros</strong></td>
                                <td className='border border-gray-600 p-3'>Cookies de servicios externos que usamos</td>
                                <td className='border border-gray-600 p-3'>Google, Brevo, Microsoft</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>3. Herramientas de Análisis y Seguimiento</h2>
                <p>Usamos las siguientes herramientas para analizar el uso del sitio web y el comportamiento del usuario:</p>
                
                <h3 className='text-xl font-bold mt-6 mb-3'>Google Analytics</h3>
                <p>Usamos Google Analytics, una herramienta de análisis web de Google LLC, que nos ayuda a entender cómo interactúan los visitantes con nuestro sitio. Google puede transferir esta información a servidores fuera de tu país. Puedes obtener más información aquí:</p>
                <p className='mt-2'>👉 <a href="https://policies.google.com/technologies/cookies" className="text-blue-400 hover:underline">https://policies.google.com/technologies/cookies</a></p>
                
                <h3 className='text-xl font-bold mt-6 mb-3'>Microsoft Clarity</h3>
                <p>Usamos Microsoft Clarity para analizar el comportamiento del usuario y crear mapas de calor que nos ayudan a entender cómo interactúan los visitantes con nuestro sitio. Microsoft puede transferir esta información a servidores fuera de tu país. Puedes obtener más información aquí:</p>
                <p className='mt-2'>👉 <a href="https://clarity.microsoft.com/terms" className="text-blue-400 hover:underline">https://clarity.microsoft.com/terms</a></p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>4. Consentimiento</h2>
                <p>Cuando accedes por primera vez a nuestro sitio, te mostramos un aviso de cookies para que puedas aceptarlas o configurarlas. Puedes retirar tu consentimiento en cualquier momento modificando la configuración de tu navegador o desde el aviso de cookies.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>5. Cómo desactivar las Cookies</h2>
                <p>Puedes eliminar o bloquear las cookies desde la configuración de tu navegador:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li><strong>Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" className="text-blue-400 hover:underline">https://support.google.com/chrome/answer/95647</a></li>
                    <li><strong>Firefox:</strong> <a href="https://support.mozilla.org/es/kb/cookies" className="text-blue-400 hover:underline">https://support.mozilla.org/es/kb/cookies</a></li>
                    <li><strong>Safari:</strong> <a href="https://support.apple.com/es-es/HT201265" className="text-blue-400 hover:underline">https://support.apple.com/es-es/HT201265</a></li>
                    <li><strong>Edge:</strong> <a href="https://support.microsoft.com/es-es/help/4027947" className="text-blue-400 hover:underline">https://support.microsoft.com/es-es/help/4027947</a></li>
                </ul>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>6. Cambios en la Política</h2>
                <p>Nos reservamos el derecho de modificar esta política para adaptarla a futuras exigencias legales o técnicas. Recomendamos revisarla periódicamente.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>7. Contacto</h2>
                <p>Si tienes preguntas sobre nuestra política de cookies, puedes escribirnos a:</p>
                <p className='text-lg'><a href="mailto:contacto@geniorama.co" className="text-blue-400 hover:underline">contacto@geniorama.co</a></p>
            </div>
        )}
    </div>
  )
} 