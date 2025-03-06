function changeImageSe() {
	var ImageActu = document.getElementById("imageAModifierSe").src;
	if(ImageActu.indexOf("sem.jfif") !=-1) {
		document.getElementById("imageAModifierSe").src = "./img/sem2.jpg";
	}
	else{
		if(ImageActu.indexOf("sem2.jpg") !=-1) {
			document.getElementById("imageAModifierSe").src = "./img/sem3.jfif";
		}
		else{
			document.getElementById("imageAModifierSe").src = "./img/sem.jfif";
		}
	}
}

function changeImageLy() {
	var ImageActu = document.getElementById("imageAModifierLy").src;
	if(ImageActu.indexOf("lm1.jpg") !=-1) {
		document.getElementById("imageAModifierLy").src = "./img/lm2.jpg";
	}
	else{
		if(ImageActu.indexOf("lm2.jpg") !=-1) {
			document.getElementById("imageAModifierLy").src = "./img/lm3.jpg";
		}
		else{
			document.getElementById("imageAModifierLy").src = "./img/lm1.jpg";
		}
	}
}

function changeImageCf() {
	var ImageActu = document.getElementById("imageAModifierCf").src;
	if(ImageActu.indexOf("cf1.avif") !=-1) {
		document.getElementById("imageAModifierCf").src = "./img/cf2.avif";
	}
	else{
		if(ImageActu.indexOf("cf2.avif") !=-1) {
			document.getElementById("imageAModifierCf").src = "./img/cf3.avif";
		}
		else{
			document.getElementById("imageAModifierCf").src = "./img/cf1.avif";
		}
	}
}