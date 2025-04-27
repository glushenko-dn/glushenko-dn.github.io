function step(active_id){
	let active = document.getElementById(active_id);// получаем активный элемент, на который кликаем
	let empty = document.getElementById("16");//получаем пустой элемент
	let active_position = active.getAttribute("data-position");//узнаем позицию активного элемента
	let empty_position = empty.getAttribute("data-position");//узнаем позицию пустого элемента

	// узнаем находится ли активный элемент рядом с пустым

	let distance = active_position - empty_position
	let cond_1 = (distance == 4 || distance == -4);
	let cond_2 = (distance == 1 || distance == -1);
	let cond_3 = !(Math.trunc((active_position - 1) / 4) - Math.trunc((empty_position -1) / 4));
	if (cond_1 || (cond_2 && cond_3)) {
		active.setAttribute("data-position", empty_position);//активому элементу даем позицию пустого
		empty.setAttribute("data-position", active_position);//пустому элементу даем позицию активного
		playMySound("window-slide.ogg");
	}
		else {
			playMySound("bell.ogg");
		}
}

function playMySound(path){
	let mySound = new Audio();
	mySound.src = path;
	mySound.autoplay = true;
}