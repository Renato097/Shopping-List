let lista = []
const elenco = document.getElementById('elenco')
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const clear = document.getElementById('clear')

const lista_str = new String (localStorage.getItem("lista"))

function scriviLista(){
    elenco.innerHTML = ''
    for (let i = 0; i < lista.length; i++){
        elenco.innerHTML += `<li ondblclick = "cancella(${i})">${lista[i]}</li>`
    };
}

function aggiornaStr(){
    let stringa = lista.toString()
    localStorage.setItem("lista", stringa)
}

// Caricamento stringa e prima scrittura all'avvio
if (lista_str != ''){
    lista = lista_str.split(',')

    scriviLista()

    clear.style.display = 'block'
}

// Aggiungi
btn.addEventListener('click', function(){
    if (input.value != ''){

        lista.push(input.value)

        scriviLista()

        aggiornaStr()

        input.value = ''

        clear.style.display = 'block'
    }
})

// Rimuovi tutto
clear.addEventListener('click', function(){
    const conferma = confirm("Sicuro di voler cancellare tutto?");
    if (conferma){
        
        lista = []

        elenco.innerHTML = ''
    
        aggiornaStr()
    
        clear.style.display = 'none'
    }
})

// Rimuovi singolo (onclick dall'html)
function cancella(j){
    lista.splice(j, 1)

    scriviLista()

    aggiornaStr()

    if (lista.length == 0){
        clear.style.display = 'none'
    }
}