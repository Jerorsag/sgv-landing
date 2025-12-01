// Configuración de URL de la aplicación desde variable de entorno
const LINK_APP = import.meta.env.PUBLIC_LINK_APP || '';

// URLs de la aplicación web - todos apuntan a la misma URL base
export const APP_URLS = {
	AGENDAR_CITA: LINK_APP || '#contacto',
	INGRESAR: LINK_APP || '#contacto',
	AGENDAR_CONSULTA: LINK_APP || '#contacto',
} as const;

