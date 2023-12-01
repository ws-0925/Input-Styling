let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}

/* -- ↓↓↓ If you want the sparkle effect to only occur on hover, replace lines 16 and on with this code ↓↓↓ -- */

// let timeouts = [],
//     intervals = [];

// const magic = document.querySelector(".magic");

// magic.onmouseenter = () => {
//   let index = 1;
  
//   for(const star of document.getElementsByClassName("magic-star")) {
//     timeouts.push(setTimeout(() => {  
//       animate(star);
      
//       intervals.push(setInterval(() => animate(star), 1000));
//     }, index++ * 300));
//   };
// }

// magic.onmouseleave = onMouseLeave = () => {
//   for(const t of timeouts) clearTimeout(t);  
//   for(const i of intervals) clearInterval(i);
  
//   timeouts = [];
//   intervals = [];
// }

var showanimation = 0;
jQuery('.magic.butterdiv').hide();
var timeId;
var timecount = 8000;
function anmationshow() {
  if(showanimation != 0){
    jQuery('.magic.butterdiv').show();
  }
  
}
jQuery('#email').on( "focus", function() {
  
  if(showanimation == 0){
    showanimation =1;
    var value = document.getElementById('email').value;
    if (value == "") {

      timeId = setTimeout(anmationshow, timecount);
    }
  }
  
} );
jQuery('#email').on( "focusout", function() {
  
  showanimation = 0;
  jQuery('.magic.butterdiv').hide();
  clearTimeout(timeId);
  
} );

$("#email").keyup(function(){
  var value = document.getElementById('email').value;
  if (value == "") {
    timeId = setTimeout(anmationshow, timecount);
    //jQuery('.magic.butterdiv').show();
    showanimation =1;
  }else{
    jQuery('.magic.butterdiv').hide();
    showanimation =1;
  }
});