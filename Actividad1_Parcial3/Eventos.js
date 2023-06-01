function addTask() {
    const input = document.getElementById('Texto');
    const text =input.value;

    if(text.length){

        const list = document.getElementById('Filas');

        const newItem  =document.createElement('div');

        const checkbox =  document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.innerText = text;

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';

        const DeleteButton = document.createElement('button');
        DeleteButton.textContent = 'Eliminar'; 

        buttons.appendChild(editButton) ;
        buttons.appendChild(DeleteButton);
        newItem.appendChild(checkbox);
        newItem.appendChild(label);
        newItem.appendChild(buttons);

        list.appendChild(newItem);

        input.value = ' ';


    }

}