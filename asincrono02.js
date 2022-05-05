//Instanciando un objeto con la hora local y fecha de hoy.
var ahora = new Date (); 

//Creando un arreglo con los días de la semana.
var arregloDiasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

//Creando una función que recorrerá el arreglo anterior y entregará el día de la semana cuya posición coincida con el valor numérico generado por el método getDay(). Esta función será invocada al presionar un botón y mostrará el día mediante un alert.
function diaEnPalabra () {
    for (i = 0; i < arregloDiasSemana.length; i ++) {
        if (i == ahora.getDay()) {
            alert("Hoy es " + arregloDiasSemana[i] + ". Que buen día para programar.");
        }
    }
}

console.log(ahora.getDay()); //En la consola se podrá revisar el valor numérico del día actual, aún sin haber invocado a la función.
