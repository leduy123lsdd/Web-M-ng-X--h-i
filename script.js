console.log("conneted");

document.getElementById('sign_in').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.getElementById('start').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});
