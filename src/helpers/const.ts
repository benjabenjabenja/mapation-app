export const MENSAJE_NO_GEOLOCATION = 'Navegador no soporta geolocalización o no tiene permisos de geolocalización';
export const MENSAJE_ERROR_GEOLOCATION = 'Error al obtener la ubicación del usuario';

export const MUTATION_APP = {
    TITLE: 'MapationApp'
}

export const ERRORS = {
    NO_USER_LOCATION: 'No se ha encontrado la ubicación del usuario',
    NO_QUERY: 'No se ha ingresado ninguna consulta',
    ERROR_GEOLOCATION: 'No se pudo obtener la ubicación del usuario',
    ERROR_MAP: 'El mapa no está listo',
    ERROR_USER_LOCATION: 'No se pudo obtener la ubicación del usuario'
}

export const HOME_SCREEN = {
    MAP_VIEW: {
        LOADING_MAP: {
            MESSAGE: 'Espere por favor',
            SUBMESSAGE: 'Localizando al usuario...'
        },
        ZOOM_DEFAULT: 14,
        DEBOUNCE_TIME: 500
    }
}

export const SEARCH_RESULTS = {
    NOMBRE_LUGAR: 'Nombre del lugar',
    LOADING: {
        TITLE: 'Buscando',
        SUBMESSAGE: 'Espere por favor...'
    },
    DIRECTIONS: 'Direcciones'
}

export const INPUT_SEARCH = {
    PLACEHOLDER: 'Buscar...'
}

export const BUTTON_LOCATION = {
    TEXT: 'Mi ubicación'
}

export const SEARCH_API = {
    OPTIONS: {
        LIMIT: 5,
        LANGUAGE: 'es',
        ACCESS_TOKEN: process.env.VITE_MAPBOX_ACCESS_TOKEN || 'pk.eyJ1IjoiYWxleG9uZ2VyIiwiYSI6ImNtYW10Z211MjAwdG0ycXNtYmZ1Z2Z1Z2kifQ.MY_ACCESS_TOKEN_MAPBOX'
    },
    BASE_URL: 'https://api.mapbox.com/search/geocode/v6/forward'
}