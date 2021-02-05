//Sourced from W3schools
// Date object
var today = new Date();

// Current Date
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+' '+today.getDate();

  document.getElementById("current_date").innerHTML = date;

// Current Time
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  document.getElementById("current_time").innerHTML = time;

// Current Date and Time
  var dateTime = date+' '+time;
  
  document.getElementById("current_dateandtime").innerHTML = dateTime;


//alert('Call 123-456-SCAM to unlock your computer')
console.log("Log.")
console.log("Warning.")
console.log("Error.")
//confirm('Are you ready for Christmas')
//prompt('Put in your Credit Card number')


function confirmIt(){
  var r = confirm("You clicked the confirm box");
  if (r == true){
    alert('You pressed OK');
  } 
  else {
    var s = confirm('Do you want to cancel');
    if (s == false){
      alert('Glad you didnt cancel');
    }
  }
}