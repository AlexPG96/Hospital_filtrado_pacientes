


function filtrarXedad(pLista, pEdadMinima, pEdadMaxima, pTipoRango = 'dentro'){
    let listaFiltrada = new Array();

    if(pTipoRango != 'fuera'){
        listaFiltrada = pLista.filter(function(paciente){
        return paciente.edad >= pEdadMinima && paciente.edad <= pEdadMaxima;

    })

    }else{
        listaFiltrada = pLista.filter(paciente => (paciente.edad >= 0 && paciente.edad < pEdadMinima) || (paciente.edad > pEdadMaxima && paciente.edad <= 100))
    }

    return listaFiltrada;
};

// var temporal = filtrarXedad(pacientes, 18, 25, 'fuera');
// console.log(temporal);


//filtrar por enfermedad

function filtrarXdiagnostico(pLista, pDiagnostico) {
    let listaFiltrada = new Array();

    for(paciente of pLista){

        if(paciente.diagnostico.toLowerCase() == pDiagnostico.toLowerCase()){
            listaFiltrada.push(paciente);
        }

    }

    return listaFiltrada;
    
}

// var temporal = filtrarXdiagnostico(pacientes, 'Calvicie');
// console.log(temporal);


//vamos a combinar los dos filtros para obtener pacientes entre un rango de edad y una enfermedad concreta. Callback

// var temporal = filtrarXdiagnostico( filtrarXedad(pacientes, 20, 40), 'Diabetes')

// console.log(temporal)

//que el ultimo numeroSS sea 0.

function filtrarXnumeroSS(pLista, pNumero){

    let listaFiltrada = new Array();

    listaFiltrada = pLista.filter( paciente => {
        let numeroSS = paciente.numeroSS;
        let ultimoDigito = parseInt(numeroSS[numeroSS.length - 1]);

        return ultimoDigito == pNumero;
        

    })


}

filtrarXnumeroSS(pacientes, 0)