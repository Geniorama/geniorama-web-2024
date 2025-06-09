# Configuración de Google Tag Manager para Consentimiento de Cookies

## Eventos que envía el sistema

El sistema de cookies envía los siguientes eventos a GTM:

### 1. Evento de Consentimiento Estándar
```javascript
{
  event: 'consent',
  consent_state: {
    analytics_storage: 'granted' | 'denied',
    ad_storage: 'granted' | 'denied',
    functionality_storage: 'granted' | 'denied',
    personalization_storage: 'granted' | 'denied',
    security_storage: 'granted' | 'denied'
  }
}
```

### 2. Evento Personalizado de Actualización
```javascript
{
  event: 'cookie_consent_update',
  cookie_consent: {
    necessary: true | false,
    analytics: true | false,
    marketing: true | false,
    timestamp: '2025-01-09T10:30:00.000Z'
  }
}
```

### 3. Evento de Carga Inicial
```javascript
{
  event: 'cookie_consent_loaded',
  cookie_consent: {
    necessary: true | false,
    analytics: true | false,
    marketing: true | false,
    timestamp: '2025-01-09T10:30:00.000Z'
  }
}
```

## Configuración en GTM

### 1. Variables Personalizadas

Crea las siguientes variables en GTM:

#### Variable para Analytics Storage
- **Nombre**: `Consent - Analytics Storage`
- **Tipo**: Variable de Data Layer
- **Nombre de la variable de Data Layer**: `consent_state.analytics_storage`

#### Variable para Marketing Storage
- **Nombre**: `Consent - Marketing Storage`
- **Tipo**: Variable de Data Layer
- **Nombre de la variable de Data Layer**: `consent_state.ad_storage`

### 2. Triggers (Disparadores)

#### Trigger para Consentimiento de Analytics
- **Nombre**: `Consent - Analytics Granted`
- **Tipo**: Evento personalizado
- **Nombre del evento**: `consent`
- **Condición**: `Consent - Analytics Storage` equals `granted`

#### Trigger para Consentimiento de Marketing
- **Nombre**: `Consent - Marketing Granted`
- **Tipo**: Evento personalizado
- **Nombre del evento**: `consent`
- **Condición**: `Consent - Marketing Storage` equals `granted`

#### Trigger para Actualización de Consentimiento
- **Nombre**: `Cookie Consent Update`
- **Tipo**: Evento personalizado
- **Nombre del evento**: `cookie_consent_update`

### 3. Tags (Etiquetas)

#### Google Analytics 4
- **Nombre**: `GA4 - Analytics`
- **Tipo**: Google Analytics: GA4 Configuration
- **Trigger**: `Consent - Analytics Granted`
- **Configuración**: Usar tu Measurement ID

#### Microsoft Clarity
- **Nombre**: `Microsoft Clarity`
- **Tipo**: HTML personalizado
- **Trigger**: `Consent - Analytics Granted`
- **Código HTML**:
```html
<script type="text/javascript">
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "TU_CLARITY_ID");
</script>
```

#### Tracking de Consentimiento
- **Nombre**: `Cookie Consent Tracking`
- **Tipo**: Google Analytics: GA4 Event
- **Trigger**: `Cookie Consent Update`
- **Evento**: `cookie_consent_update`
- **Parámetros**:
  - `consent_type` (text): `{{Cookie Consent Type}}`
  - `analytics_consent` (boolean): `{{Consent - Analytics Storage}}`
  - `marketing_consent` (boolean): `{{Consent - Marketing Storage}}`

### 4. Variables Adicionales

#### Variable para Tipo de Consentimiento
- **Nombre**: `Cookie Consent Type`
- **Tipo**: Variable de Data Layer
- **Nombre de la variable de Data Layer**: `cookie_consent.analytics`

## Flujo de Funcionamiento

1. **Carga inicial**: El `CookieConsentInitializer` envía el estado de consentimiento guardado
2. **Usuario interactúa**: Cuando el usuario acepta/rechaza cookies, se envía `cookie_consent_update`
3. **GTM responde**: Los triggers se activan según el consentimiento
4. **Tags se ejecutan**: Solo se cargan los scripts permitidos

## Configuración de Consentimiento en GTM

### Habilitar Consentimiento en GTM

1. Ve a **Admin** > **Configuración de la cuenta**
2. En **Configuración de consentimiento**, habilita **Consentimiento de cookies**
3. Configura los tipos de consentimiento:
   - **Analytics**: Para Google Analytics y Microsoft Clarity
   - **Marketing**: Para publicidad y remarketing
   - **Funcionalidad**: Para cookies necesarias

### Configurar Condiciones de Consentimiento

En cada tag que requiera consentimiento:
1. Ve a **Configuración avanzada**
2. En **Consentimiento**, selecciona los tipos requeridos
3. El tag solo se ejecutará si el usuario ha dado consentimiento

## Pruebas

### Verificar en la Consola del Navegador

```javascript
// Verificar que dataLayer existe
console.log(window.dataLayer);

// Verificar eventos de consentimiento
window.dataLayer.push({
  event: 'consent',
  consent_state: {
    analytics_storage: 'granted',
    ad_storage: 'denied'
  }
});
```

### Usar GTM Preview

1. Activa el modo de vista previa en GTM
2. Recarga la página
3. Verifica que los eventos se envían correctamente
4. Confirma que los tags se activan según el consentimiento

## Notas Importantes

- **Primera visita**: Los usuarios verán el banner de cookies
- **Visitas posteriores**: El consentimiento se carga automáticamente
- **Cambios**: Los usuarios pueden modificar preferencias desde el footer
- **Cumplimiento**: El sistema cumple con RGPD, CCPA y Ley 1581 de Colombia

## Troubleshooting

### Problema: Los tags no se ejecutan
**Solución**: Verificar que los triggers estén configurados correctamente y que las variables de consentimiento estén definidas.

### Problema: Consentimiento no se guarda
**Solución**: Verificar que localStorage esté disponible y que no haya errores en la consola.

### Problema: GTM no recibe eventos
**Solución**: Verificar que el código de GTM esté cargado correctamente y que dataLayer esté inicializado. 