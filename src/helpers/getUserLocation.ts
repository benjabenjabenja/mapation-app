//Helpers:
import { MENSAJE_ERROR_GEOLOCATION } from "./const";

export const getUserLocation = async (): Promise<[number, number]> => {
    return new Promise((resolve, reject) => {
        //@NOTA: Se podria usar el navigator.geolocation.watchPosition para obtener la ubicación actual del usuario
        navigator.geolocation.getCurrentPosition(
            //@NOTA: Al usar Mapbox, se debe usar el orden de longitud y latitud invertido, 
            // google maps usa el orden de latitud y longitud, por lo que se debe invertir el orden
            ({ coords }) => resolve([coords.longitude, coords.latitude]),
            (err) => {
                alert(MENSAJE_ERROR_GEOLOCATION);
                console.error({err});
                reject(err);
            }
        );
    });
}