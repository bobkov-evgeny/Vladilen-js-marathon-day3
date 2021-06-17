"use strict";

const btnUp = document.querySelector(".up-button");
const btnDown = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");
let activeSlideIndex = 0;

const changeSlide = function (direction) {
	if (direction === "up") {
		console.log("up");
		activeSlideIndex++;
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0;
		}
	} else if (direction === "down") {
		console.log("down");
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1;
		}
	} else {
		console.log("nothing");
	}

	const height = container.clientHeight;
	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

btnUp.addEventListener("click", function (up) {
	changeSlide(`up`);
});
btnDown.addEventListener("click", function (down) {
	changeSlide(`down`);
});
