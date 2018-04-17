// 1. Get the <form> element
form = document.querySelector("#createform");
// console.log(form);

var papa = document.getElementById('parent');
form.onsubmit = function(event) {
	event.preventDefault();
	// console.log(form);

	const toDo = document.getElementById('inputmsg')
	console.log(toDo.value);

	const listyList = document.createElement('li');
	listyList.innerHTML = toDo.value;
	listyList.contentEditable = true;
	var btn = document.createElement("button");
	btn.innerHTML = "done!"

	papa.appendChild(listyList);
	listyList.appendChild(btn);
	btn.setAttribute("onclick", "remove(event)");

	form.reset();


}

function remove(event){
	// console.log(event.target.parentNode);	
	papa.removeChild(event.target.parentNode);
	// var moveBtn = document.getElementById("movePlease");
	// moveBtn.style.marginLeft = "100px";


}
