
//Vamos a empezar capturando los datos del html que necesito.

var seccionPacientes = document.querySelector('#pacientes');
var campoNumeroPacientes = document.querySelector('#numeropacientes');

//funcion para pintar pacientes que recibe una lista de pacientes.

function pintarPacientes(pListaPacientes) {
    seccionPacientes.innerHTML = "";

    //La longitud de la lista es igual a la cantidad de pacientes que hay.
    campoNumeroPacientes.innerText = pListaPacientes.length;

    pListaPacientes.forEach(paciente => {
        seccionPacientes.innerHTML += `<article>
        <h3>${paciente.nombre} ${paciente.apellido}</h3>
            <ul>
                <li>EDAD: ${paciente.edad}</li>
                <li>Numero SS: ${paciente.numeroSS}</li>
            </ul>
        <div class="diagnostico">
            ${paciente.diagnostico}
        </div>
    </article>`

    })
}

pintarPacientes(pacientes);


//Empezar con los filtros

var botonFiltroEdad = document.getElementById('botonEdad');


botonFiltroEdad.addEventListener('click', capturarDatosEdades);

function capturarDatosEdades(event){
    event.preventDefault();

    let edadMin = document.querySelector('#edadMin').value; //recojo el valor que tiene ese id
    let edadMax = document.querySelector('#edadMax').value; //recojo el valor que tiene ese id

    let miListaPacientesEdad = new Array();
    //console.log(edadMin, edadMax); lo pruebo para no tener errores.

    //para que al volver a resetear los filtros, se pongan todos de nuevo.
    if(edadMin != "" && edadMax != "") {
       miListaPacientesEdad = filtrarXedad(pacientes, edadMin, edadMax);
 
    } else {
        miListaPacientesEdad = pacientes;
    }

    
    pintarPacientes(miListaPacientesEdad)

}


//Filtro de diagnostico.

//Capturo el lanzador del evento, que en este caso es el propio select. Evento CHANGE

var selectDiagnostico = document.querySelector('#diagnostico');
selectDiagnostico.addEventListener('change', capturarDiagnostico);

function capturarDiagnostico(event){

    //En este caso, no hay que prevenir la accion por defecto porque el select está fuera del form.

    let tipoDiagnostico = event.target.value;
    //console.log(tipoDiagnostico)
    if(tipoDiagnostico != "") {
        pintarPacientes(filtrarXdiagnostico(pacientes, tipoDiagnostico))
    } else {
        pintarPacientes(pacientes);
    }

    
}

//superfiltro: recogera valores de edad y diagnostico y me filtrará usando los tres valores encadenados.

var btnSuperFiltro = document.getElementById('superboton');
btnSuperFiltro.addEventListener('click', cargarDatosSuperfiltro);

function cargarDatosSuperfiltro(event){
    event.preventDefault();

    let edadMin = document.querySelector('#edadMin2').value;
    let edadMax = document.querySelector('#edadMax2').value;
    let diagnostico = document.querySelector('#diagnostico2').value;

    pintarPacientes(filtrarXdiagnostico(filtrarXedad(pacientes, edadMin, edadMax), diagnostico))
}



//Quiero buscar un paciente por su nombre, el objetivo del buscador es que si yo pongo la palabra Ju, me tiene que encontrar los pacientes que empiecen por Ju. (Juan, Juanjo, etc)