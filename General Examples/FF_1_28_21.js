//creates variable a and from the linked html document it gets element with id a and then pulls the text inside of it
var a = document.getElementById('a').textContent;
	console.log(a)
//updates variable a and from the linked html document it gets element with id A and then pulls the text inside of it. 'a' and 'A' are not the same they have different binary values, they are different characters so capitalization matters
var a = document.getElementById('A').textContent;
	console.log(a)
//initializes the function myfunction
function myfunction(){
  //gets the text inside of the element with Id 'a'
  var a = document.getElementById('a').textContent;
	console.log(a)
  
  var a = document.getElementById('a').textContent;
	console.log(a)

  var a = document.getElementById('A').textContent;
	console.log(a)

  /*var a = document.getElementById('b').innerHTML ="<h1>This is my(Quinton) table</h1> <a href=https://cdn.drawception.com/drawings/661265/Cpt2kxC0WY.png> <img  class='outer-image' src='https://progameguides.com/wp-content/uploads/2020/09/among-us-rocketing-popularity-900x506.jpg' cb=20200912190532> </a><table class='wide'> <theader> <th><em>Item</em></th><th>Description</th><th>Status</th><th>Picture</th></theader>";*/
  var a = document.getElementById('c').innerHTML ="<button onclick='myfunction()'>PICK ME</button>";
	console.log(a)
}

var newDiv = document.createElement('div');
newDiv.innerHTML = "<h2>Hello World</h2>"
document.body.appendChild(newDiv);


//Working addEventListener() sample
document.getElementById("listenerbtn").addEventListener("click", 
  function() {
   document.getElementById("hello").innerHTML = "Hello World";
  }
);

//Working addEventListener() & setTimeout()
document.getElementById("lst_time_btn").addEventListener("click", 
  function(){
    setTimeout(myFunc, 2000)
  }
);

function myFunc() {
  console.log("Hello");
}

/*NOTE* This section is from the slide show, code not connected properly *NOTE*
const button = document.getElementById('stop');
//let countID = setTimeout(hello, 000)
function clear(){
  clearInterval(countID);
  alert("timer cleared!");
}
//button.addEventListener("click", clear)
setTimeout(
  function(){
    document.body.innerHTML="hellooo"
  }, 1000
)
*/


