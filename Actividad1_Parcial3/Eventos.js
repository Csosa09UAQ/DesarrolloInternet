function agregarTarea() {
    var input = document.getElementById("nuevaTarea");
    var tarea = input.value;
    
    if (tarea !== "") {
      var lista = document.getElementById("listaTareas");
      var nuevaTarea = document.createElement("li");
      nuevaTarea.innerText = tarea;
      lista.appendChild(nuevaTarea);
      input.value = "";
    }

    
  }
  