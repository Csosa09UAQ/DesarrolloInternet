function addTask() {
    const input = document.getElementById('TextBox')
    const text = input.value;

    if (text.length) {
        const list = document.getElementById('lista');

        const newItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', completed);

        const p = document.createElement('p');
        p.textContent = text;

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'acciones');

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', editarElemento);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', deleteTask);

        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);
        newItem.appendChild(checkbox);
        newItem.appendChild(p);
        newItem.appendChild(buttons);

        list.appendChild(newItem);
        input.value ='';
    }
}

function completed(event){
    const value = event.target.checked;

    const list = document.getElementById('lista');
    const item = event.target.parentNode;
    list.removeChild(item);

    const completedList = document.getElementById('LC');
    const completedItem = document.createElement('li');
    const checkbox = document.createElement('input'); 
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    checkbox.disabled = true;

    const p = document.createElement('p'); 
    const text = item.querySelector('p').textContent; 
    p.textContent = text;

    completedItem.appendChild(checkbox); 
    completedItem.appendChild(p);

    completedList.appendChild(completedItem);
}


function deleteTask(event){
    const deleteItem = event.target.parentNode.parentNode;

    const list = document.getElementById('lista');
    list.removeChild(deleteItem)
}

function clearList() {
    const list = document.getElementById('LC');
    list.innerHTML = '';
    
}

function editarElemento(event) {
    const parrafo = event.target.parentNode.parentNode.querySelector('p');
    parrafo.contentEditable = true;
    parrafo.focus();
  }
