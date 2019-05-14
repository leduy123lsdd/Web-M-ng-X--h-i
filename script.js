console.log("conneted");

// TODO: Phan signIn va gets starteds
document.getElementById('sign_in').addEventListener("click", function() {
	document.querySelector('#test1').style.display = "flex";
});

document.getElementById('start').addEventListener("click", function() {
	document.querySelector('#test1').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('#test1').style.display = "none";
});

// TODO: phan login
document.getElementById('log_in').addEventListener("click", function(){
	document.querySelector('#test2').style.display = "flex";
});
document.querySelector('#login_close').addEventListener("click", function() {
	document.querySelector('#test2').style.display = "none";
});
