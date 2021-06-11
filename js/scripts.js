console.log("Hello and welcome! Have a look around!");

function myFunction() {
   var x = document.getElementById('myNavtoggle');
   if (x.className === 'navtoggle') {
     x.className += ' responsive';
   } else {
     x.className = 'navtoggle';
   }
 }
