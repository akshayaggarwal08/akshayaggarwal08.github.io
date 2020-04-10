//var x = myFunction(4, 3);   // Function is called, return value will end up in x
//let x = '4';
//const myHeading = document.querySelector('h1');
//myHeading.textContent = "Hey there senorita!";	  //.toString(); //heading1 = 'Hello World';

/*function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}*/




setHeading("Hello World","chocolate");

function setHeading(heading/*Hello World*/, iceCream/*chocolate*/){

	let myHeading = document.querySelector('h1');
	let peace = "Peace of mind is very important";
	/*
	The idea is to see if things are happening the right way. 
	*/

	myHeading.textContent = peace;

	if (iceCream === 'chocolate'){

		peace = 'Yay, i love hot chocolate.';
		
	}

	myHeading.textContent = peace;

}

let myImage = document.querySelector('img');

myImage.onclick = function(){

	let mySrc = myImage.getAttribute('src');
	
	if(mySrc === '/mowgli3.jpeg'){

		myImage.setAttribute('src', '/mowgli4.jpeg');
	
	}else{

		myImage.setAttribute('src', '/mowgli3.jpeg');
	}
}

let myButton = document.querySelector('button');

myButton.onclick = function(){

	setUsername();
}


function setUsername(){

	let myName = prompt('Please enter your name.');
	let myHeading = document.querySelector('h1');

	if (!myName || myName === null){
		myName = 'Reader';
		//localStorage.setItem('name', myName);
		myHeading.textContent = 'Disney is cool, ' + myName;
	}else{
		localStorage.setItem('User', myName);
	}
	myHeading.textContent = 'Disney is cool, ' + myName;

}



/*document.querySelector('img').onclick = function() {
let mySrc = 

    alert('Ouch! Stop poking me!');
}*/