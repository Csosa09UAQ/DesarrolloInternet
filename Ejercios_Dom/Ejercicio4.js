function cambiarColorFondo() {
    var colores = ["red", "green", "blue", "yellow", "purple"];
    var colorIndex = Math.floor(Math.random() * colores.length);
    var color = colores[colorIndex];
    
    document.body.style.backgroundColor = color;
  }
  