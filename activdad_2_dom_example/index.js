

let totalValue = 12030.86;
let savings = [
    {
        type: 'Escuela',
        value: 100,
        lastChange: '04/06/2023'
    },
    {
        type: 'Doctor',
        value: 30,
        lastChange: '02/06/2023'
    }
];

window.addEventListener('load', (event) => {
    console.log(event);
    loadTotalValue(totalValue);
    loadSavings()
});

function loadTotalValue(value){
    if (!value) {
        return
    }
    const totalElement = document.getElementById('total');
    totalElement.innerText = "$ " + value.toLocaleString();
}

function loadSavings(){
    const savingList = document.getElementById('saving-list');
    savingList.innerHTML = '';
    savings.forEach(saving => {
        console.log(saving);
        // Crear elementos dinamicos

        const savingLiElement = document.createElement('li');
        const savingH4Element = document.createElement('h4');
        const savingH3Element = document.createElement('h3');
        const savingPElement = document.createElement('p');

        // Guardar o asignarles data/valor

        savingH4Element.innerText = getStringType(saving.type);
        savingH3Element.innerText = saving.value;
        savingPElement.innerText = saving.lastChange;

        savingLiElement.append(savingH4Element, savingH3Element, savingPElement);
        savingList.appendChild(savingLiElement);
    })
}

function getStringType(type){
    switch (type){
        case 'Escuela':
            return 'Escuela';
        case 'Doctor':
            return 'Doctor';
        case 'Gasolina':
            return 'Gasolina';
        case 'Comida':
            return 'Comida';
        default:
            return 'Otro';
    }}

    function loadMovement(){
        const movementList = document.getElementById('movement-list');
        movementList.innerHTML = '';
        movemnts.forEach(movement =>  {

            //Crear elementos
            const movementLiElement = document.createElement('li');
            const movementH4Element = document.createElement('h4');
            const movementH3Element = document.createElement('h3');
            const movementPElement = document.createElement('p');

            //Guardar elementos
            movementH4Element.innerText = movement.location;
            movementH3Element.innerText = '$' + (movement.charge).toFixed(2);
            movementPElement.innerText = 'Realizado el ' + movement.lastChange;


            movementLiElement.append(movementH4Element, movementH3Element, movementPElement);
            movementList.appendChild(movementLiElement);

 

        })
    }


    function onTransfer(){

        const amountInput = document.getElementById('amount');

        const amountValue = amountInput.value;

        if(totalValue > amountValue){
            totalValue = totalValue - amountValue;
            loadTotalValue(totalValue);

            const newMovement = {
                location: 'Transferencia',
                charge: Number(amountValue),
                lastChange: new Date().toLocaleDateString()
            };


        }

    }

    function onSave(){
        const amountInput = document.getElementById('amountSave');
        const SaveSelect = document.querySelector('select[name="savings"]');

        const amountValue = amountInput.value;
        const SaveValue = SaveSelect.value;

        totalValue = totalValue - amountValue;
        loadTotalValue(totalValue);
        
        const newSavings = {
            type: SaveValue,
            value: Number(amountValue),
            lastChange: new Date().toLocaleDateString()
        };
        savings.map(saving => {

            if(saving.type === newSaving.type){
                saving.value = saving.value + newSaving.value;
            }

        });
        loadSavings();

    }
        