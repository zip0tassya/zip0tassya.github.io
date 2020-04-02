var canvas;
var context;

window.onload = function() {
      canvas = document.getElementById("drawingCanvas");
      context = canvas.getContext("2d");
       
// Подключаем требуемые для рисования события
      canvas.onmousedown = startDrawing;
      canvas.onmouseup = stopDrawing;
      canvas.onmouseout = stopDrawing;
      canvas.onmousemove = draw;
   }
   
   var previousColorElement;

function changeColor(color) {
// 	Меняем цвет кисти
	context.strokeStyle = color;
}

var previousThicknessElement;

function changeThickness (thickness, imgElement)
{
// Изменяем текущую толщину линии
	context.lineWidth = thickness;
}

function startDrawing(e) {
// Начинаем рисовать
	isDrawing = true;
	
// Создаем новый путь (с текущим цветом и толщиной линии) 
	context.beginPath();
	
// Нажатием левой кнопки мыши помещаем "кисть" на холст
	context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function draw(e) {
	if (isDrawing == true)
	{
// Определяем текущие координаты указателя
		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;
		
// Рисуем линию до новой координаты
		context.lineTo(x, y);
		context.stroke();
	}
}
function stopDrawing() {
    isDrawing = false;	
}

function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}