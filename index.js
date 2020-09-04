function bordertext(width, strokeColor, textColor) {
	let elements = document.querySelectorAll(".border-text");
	elements.forEach((el) => {
		el.style["-webkit-text-stroke"] = `${width} ${strokeColor}`;
		el.style.color = textColor;
	});
}

module.exports.bordertext = bordertext;
