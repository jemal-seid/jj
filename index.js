const colors = ["green", "red", "yellow", "blue", "rgba(133,122,200)"];
const container = document.querySelector(".container");
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
	// const randomNumber = 2;
	const random = Math.floor(Math.random() * colors.length);

	// document.body.style.backgroundColor = colors[randomNumber];
	container.style.backgroundColor = colors[random];
	color.textContent = colors[random];
});
