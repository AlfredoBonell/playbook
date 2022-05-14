class ChistesMalosService {

    static filterByChistesMalos(id){
        let mensaje = "Ya rompió el sistema joven, no se pase.";
        switch (id) {
            case 1:
                mensaje = "─ ¿Qué le dice la foca a su madre?\n─I love you, mother foca.";
                break;
            case 2:
                mensaje = "─ Doctor, tengo todo el cuerpo cubierto de pelo. ¿Qué padezco?\n─Padece uzté un ozito.";
                break;
            case 3:
                mensaje = "─ ¿Cómo queda un mago después de comer?\n─¡MAGORGITO!";
                break;
            case 4:
                mensaje = "─ ¿Sabes cuál es el colmo de un calvo?\n─Tener ideas descabelladas.";
                break;
            case 5:
                mensaje = "─ ¿Cuál es el colmo de un pastor?\n─Quedarse dormido contando ovejas.";
                break;
            case 6:
                mensaje = "─ ¿Cuál es el colmo de una botella?\n─Resfriarse por dormir destapada.";
                break;
            case 7:
                mensaje = "─ ¿Cuál es el colmo de una escoba?\n─Ser alérgica al polvo.";
                break;
            case 8:
                mensaje = "─ ¿Sabes cuál es el colmo de los colmos?\n─¡Vivir en Estocolmo!";
                break;
            case 9:
                mensaje = "─ ¿Cuál es el colmo del cantante Luis Fonsi?\n─¿Cuál es el colmo de un oculista?";
                break;
            case 10:
                mensaje = "Aquí se acaban los chistes malos. La máquina la acabas de sobrecalentar, favor de no continuar *guiño, guiño*.";
                break;
            case 11:
                mensaje = "¡Te dije que no continuaras! >:(, si lo vuelve a intentar tendrá 10 años de mala suerte.";
                break;
            case 12:
                mensaje = "La maldición de mala suerte ha sido activada. Depositarle sinko peso a Bonell si quieres deshacer la maldición.";
                break;
            case 13:
                mensaje = "¿QUÉ HACE INTENTANDO MÁS NÚMEROS? HAZME CASO.";
                break;
            case 14:
                mensaje = "Su maldición de mala suerte de mentiritas ha incrementado a 20 años, peligro.";
                break;
            case 15:
                mensaje = "No hai sistema joben.";
                break;
            case 16:
                mensaje = "JAJAJA, ya me cansé, hasta aquí llega el juego. Espero te haya sacado una sonrisa. :)";
                break;
            default:
              //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
              break;
          }
          return mensaje;
    }
}

module.exports = ChistesMalosService;