function bordertext(width, strokeColor, textColor) {
	let elements = document.querySelectorAll(".border-text");
	elements.forEach((el) => {
		el.style["-webkit-text-stroke"] = `${width} ${strokeColor}`;
		el.style.color = textColor;
	});
}
bordertext("1.5px", "blue", "transparent");

module.exports.bordertext = bordertext;
// .bordertitle{
// 	-webkit-text-stroke-width: 1.5px;
// 	-webkit-text-stroke-color: #763c52;
// 	font-size: 123px;
//   	color: transparent;
// }
