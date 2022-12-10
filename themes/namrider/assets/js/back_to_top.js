// vanilla JS
var toTop = document.getElementById("back-to-top");
  
  toTop.addEventListener("click", function(){
  scrollToTop(4000);
});
function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}
  
  