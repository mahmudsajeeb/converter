
const result = document.getElementById("result");
const submit = document.getElementById("submit");

function binary(e){
	e.preventDefault();

	const num = document.getElementById("number");

	if( num === ""){
		alert("Number is empty")
	}else if(num <0){

		alert("Please enter a positive number");

	}
}
submit.addEventListener('click',binary);
