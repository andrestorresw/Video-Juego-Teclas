var lienzo = document.getElementById("papel");
var lienzo = lienzo.getContext("2d");
var teclas = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};
var x = 150;
var y = 150;

document.addEventListener("keydown", dibujarLinea);


function dibujarLinea(evento)
{
  switch (evento.keyCode)
  {
    case teclas.UP:
      lienzo.beginPath();
      lienzo.moveTo(x, y);
      lienzo.lineTo(x, y - 5);
      lienzo.stroke();
      lienzo.closePath();
      y = y - 5;
      break;
    case teclas.DOWN:
      lienzo.beginPath();
      lienzo.moveTo(x, y);
      lienzo.lineTo(x, y + 5);
      lienzo.stroke();
      lienzo.closePath();
      y = y + 5;
      break;
    case teclas.RIGHT:
      lienzo.beginPath();
      lienzo.moveTo(x, y);
      lienzo.lineTo(x + 5, y);
      lienzo.stroke();
      lienzo.closePath();
      x = x + 5;
      break;
    case teclas.LEFT:
      lienzo.beginPath();
      lienzo.moveTo(x, y);
      lienzo.lineTo(x - 5, y);
      lienzo.stroke();
      lienzo.closePath();
      x = x - 5;
    default:

  }
}
