'use client'

import { useEffect } from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'

export default function Privacy() {
  const locale = useLocale()

  useEffect(() => {
   console.log('locale', locale)
  }, [locale])

  
  return (
    <div className='container text-white py-24'>
        <h1 className='text-8xl text-center'>
            {locale === 'en' ? 'Privacy Policy' : 'Politica de privacidad'}
        </h1>
        
        {locale === 'en' ? (
            <div className='mt-5'>
                <h5><b>Last updated</b>: June 9, 2025</h5>
                <br />
                <p>
                    At Geniorama.co, we respect your privacy and protect the personal data you share with us. This Privacy Policy explains how we collect, use, store, and protect your data, in compliance with current legislation in Colombia, Spain (European Union), and the United States.
                </p>
                
                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>1. Data Controller</h2>
                <p><strong>Owner:</strong> Geniorama</p>
                <p><strong>Website:</strong> https://geniorama.co/</p>
                <p><strong>Contact email:</strong> contacto@geniorama.co</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>2. Data We Collect</h2>
                <p>We only collect personal information that you provide to us through our contact or subscription forms:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number (optional)</li>
                </ul>
                
                <p>Additionally, we automatically collect some navigation data through cookies:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li>IP address</li>
                    <li>Approximate location data</li>
                    <li>Browser and device type</li>
                    <li>Pages visited</li>
                </ul>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>3. Processing Purposes</h2>
                <p>Your data is used for:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li>Responding to your inquiries or messages sent through forms.</li>
                    <li>Sending you our newsletter only if you voluntarily subscribe through the corresponding form.</li>
                    <li>Analyzing website usage through tools like Google Analytics (for statistical purposes and continuous improvement).</li>
                </ul>
                <p>We do not share, sell, or transfer your data to third parties for commercial purposes.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>4. Legal Bases for Processing</h2>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li><strong>Colombia:</strong> Prior, express, and informed consent (Law 1581 of 2012).</li>
                    <li><strong>Spain / EU:</strong> Data subject consent (Art. 6.1.a GDPR).</li>
                    <li><strong>USA:</strong> Consent (and right to opt-out of tracking, according to CCPA if applicable).</li>
                </ul>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>5. Service Providers (Data Processors)</h2>
                <p>We use third-party tools that may process your data on our behalf:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li><strong>Brevo (Sendinblue SAS):</strong> Email delivery. Servers in the EU. Policy: <a href="https://www.brevo.com/legal/privacypolicy/" className="text-blue-400 hover:underline">https://www.brevo.com/legal/privacypolicy/</a></li>
                    <li><strong>Google Analytics:</strong> Navigation analysis. Policy: <a href="https://policies.google.com/privacy" className="text-blue-400 hover:underline">https://policies.google.com/privacy</a></li>
                    <li><strong>Microsoft Clarity:</strong> Análisis de comportamiento del usuario y mapas de calor. Política: <a href="https://clarity.microsoft.com/terms" className="text-blue-400 hover:underline">https://clarity.microsoft.com/terms</a></li>
                </ul>
                <p>These providers operate under data protection agreements and adequate safeguards in accordance with GDPR and other international regulations.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>6. International Data Transfer</h2>
                <p>Your data may be stored on servers located outside your country of residence, such as in the USA or EU. We ensure that such transfers are carried out with adequate safeguards, including standard contractual clauses.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>7. Data Retention</h2>
                <p>Your data will be retained:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li>While there is an active communication or subscription relationship.</li>
                    <li>Until you request deletion or cancellation.</li>
                </ul>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>8. User Rights</h2>
                <p>You can exercise the following rights at any time:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li>Access to your personal data</li>
                    <li>Rectification or updating</li>
                    <li>Deletion or cancellation</li>
                    <li>Opposition to processing</li>
                    <li>Data portability (EU only)</li>
                </ul>
                <p>To exercise them, write to us at <a href="mailto:contacto@geniorama.co" className="text-blue-400 hover:underline">contacto@geniorama.co</a> with the subject &quot;Data Protection&quot;.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>9. Cookie Usage</h2>
                <p>We use our own and third-party cookies (Google Analytics, Microsoft Clarity) to analyze browsing behavior. You can accept or reject cookies from your browser settings or our cookie banner.</p>
                <p>See more in our <Link className="hover:underline transition text-blue-400" href="/cookies">Cookie Policy</Link>.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>10. Commercial Communications</h2>
                <p>You will only receive our newsletter if you expressly subscribe through the form enabled for this purpose. You can unsubscribe at any time by clicking the link at the bottom of each email.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>11. Information Security</h2>
                <p>We implement technical and organizational security measures to protect your data against unauthorized access, alteration, loss, or destruction.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>12. Changes to this Policy</h2>
                <p>We may update this policy to adapt it to new regulations or changes in our services. We will notify changes through the website.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>13. Contact</h2>
                <p>For questions or requests related to your data, contact us at:</p>
                <p className='text-lg'><a href="mailto:contacto@geniorama.co" className="text-blue-400 hover:underline">contacto@geniorama.co</a></p>
            </div>
        ) : (
            <div className='mt-5'>
                <h5><b>Última actualización</b>: 9 junio 2025</h5>
                <br />
                <p>
                    En Geniorama.co, respetamos tu privacidad y protegemos los datos personales que nos compartes. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos tus datos, en cumplimiento con la legislación vigente en Colombia, España (Unión Europea) y Estados Unidos.
                </p>
                
                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>1. Responsable del Tratamiento</h2>
                <p><strong>Titular:</strong> Geniorama</p>
                <p><strong>Sitio web:</strong> https://geniorama.co/</p>
                <p><strong>Correo electrónico de contacto:</strong> contacto@geniorama.co</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>2. Qué Datos Recopilamos</h2>
                <p>Solo recopilamos información personal que tú mismo nos proporcionas a través de nuestros formularios de contacto o suscripción:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li>Nombre</li>
                    <li>Correo electrónico</li>
                    <li>Número de teléfono (opcional)</li>
                </ul>
                
                <p>Además, recopilamos automáticamente algunos datos de navegación mediante cookies:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li>Dirección IP</li>
                    <li>Datos de ubicación aproximada</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Páginas visitadas</li>
                </ul>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>3. Finalidades del Tratamiento</h2>
                <p>Tus datos se utilizan para:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li>Responder a tus consultas o mensajes enviados por formulario.</li>
                    <li>Enviarte nuestro boletín de noticias únicamente si te suscribes voluntariamente mediante el formulario correspondiente.</li>
                    <li>Analizar el uso del sitio web mediante herramientas como Google Analytics (con fines estadísticos y de mejora continua).</li>
                </ul>
                <p>No compartimos, vendemos ni transferimos tus datos a terceros con fines comerciales.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>4. Bases Legales del Tratamiento</h2>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li><strong>Colombia:</strong> Consentimiento previo, expreso e informado (Ley 1581 de 2012).</li>
                    <li><strong>España / UE:</strong> Consentimiento del interesado (Art. 6.1.a RGPD).</li>
                    <li><strong>EE.UU.:</strong> Consentimiento (y derecho a optar por no ser rastreado, según CCPA si aplica).</li>
                </ul>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>5. Proveedores de Servicios (Encargados de Tratamiento)</h2>
                <p>Utilizamos herramientas de terceros que pueden tratar tus datos por cuenta nuestra:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li><strong>Brevo (Sendinblue SAS):</strong> Envío de correos electrónicos. Servidores en la UE. Política: <a href="https://www.brevo.com/legal/privacypolicy/" className="text-blue-400 hover:underline">https://www.brevo.com/legal/privacypolicy/</a></li>
                    <li><strong>Google Analytics:</strong> Análisis de navegación. Política: <a href="https://policies.google.com/privacy" className="text-blue-400 hover:underline">https://policies.google.com/privacy</a></li>
                    <li><strong>Microsoft Clarity:</strong> Análisis de comportamiento del usuario y mapas de calor. Política: <a href="https://clarity.microsoft.com/terms" className="text-blue-400 hover:underline">https://clarity.microsoft.com/terms</a></li>
                </ul>
                <p>Estos proveedores operan bajo acuerdos de protección de datos y garantías adecuadas conforme a RGPD y demás normativas internacionales.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>6. Transferencia Internacional de Datos</h2>
                <p>Tus datos pueden almacenarse en servidores ubicados fuera de tu país de residencia, como en EE.UU. o la UE. Nos aseguramos de que dichas transferencias se realicen con las garantías adecuadas, incluyendo cláusulas contractuales estándar.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>7. Conservación de Datos</h2>
                <p>Tus datos serán conservados:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li>Mientras exista una relación de comunicación o suscripción activa.</li>
                    <li>Hasta que solicites su supresión o cancelación.</li>
                </ul>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>8. Derechos de los Usuarios</h2>
                <p>Puedes ejercer los siguientes derechos en cualquier momento:</p>
                <ul className='list-disc list-inside ml-4 mb-4'>
                    <li>Acceso a tus datos personales</li>
                    <li>Rectificación o actualización</li>
                    <li>Cancelación o supresión</li>
                    <li>Oposición al tratamiento</li>
                    <li>Portabilidad de datos (solo UE)</li>
                </ul>
                <p>Para ejercerlos, escríbenos a <a href="mailto:contacto@geniorama.co" className="text-blue-400 hover:underline">contacto@geniorama.co</a> con el asunto &ldquo;Protección de Datos&rdquo;.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>9. Uso de Cookies</h2>
                <p>Utilizamos cookies propias y de terceros (Google Analytics, Microsoft Clarity) para analizar el comportamiento de navegación. Puedes aceptar o rechazar cookies desde la configuración de tu navegador o nuestro banner de cookies.</p>
                <p>Consulta más en nuestra <Link className="hover:underline transition text-blue-400" href="/cookies">Política de Cookies</Link></p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>10. Comunicaciones Comerciales</h2>
                <p>Solo recibirás nuestro boletín si te suscribes expresamente mediante el formulario habilitado para ello. Puedes darte de baja en cualquier momento haciendo clic en el enlace que aparece al pie de cada correo electrónico.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>11. Seguridad de la Información</h2>
                <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra el acceso no autorizado, alteración, pérdida o destrucción.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>12. Cambios a esta Política</h2>
                <p>Podremos actualizar esta política para adaptarla a nuevas normativas o cambios en nuestros servicios. Notificaremos los cambios a través del sitio web.</p>

                <h2 className='text-2xl font-bold mt-8 mb-4' style={{fontFamily: 'var(--font-geniorama)'}}>13. Contacto</h2>
                <p>Para preguntas o solicitudes relacionadas con tus datos, contáctanos en:</p>
                <p className='text-lg'><a href="mailto:contacto@geniorama.co" className="text-blue-400 hover:underline">contacto@geniorama.co</a></p>
            </div>
        )}
    </div>
  )
}
