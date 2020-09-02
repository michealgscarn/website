/*--------------------------------------------SlideShow.js---------------------------------------------------*/
/*                                  Created By: Logan Daugherty                                           */
/*                                                                                                        */
/*                                            Features                                                    */
/*                                                                                                        */
/*                        SlideShow: Displays Images In a slide show                                      */
/*                                                                                                        */
/*--------------------------------------------------------------------------------------------------------*/

/*-------------------------------------------SlideShow----------------------------------------------------*/
var slideIndex = 1; // Current Slide

showSlides(slideIndex); // Display Slide

function plusSlides(n) {  // Go to Next Slide If Button Pressed
  showSlides(slideIndex += n);
}

function currentSlide(n) {  // Go to Previous Slide If Button Pressed
  showSlides(slideIndex = n);
}

function showSlides(n) {  // Display Slides
  var slides = document.getElementsByClassName("mySlides"); //Stylize Slides
  var dots = document.getElementsByClassName("dot");  //Stylize Dots
  if (n > slides.length) {slideIndex = 1} // Loop Back To First Slide
  if (n < 1) {slideIndex = slides.length} // Loop Back To Last Slide
  for (var i = 0; i < slides.length; i++) { // Set Every Slide to Not Be Visible
      slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) { // Set Every Dot to Be Inactive
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; // Set Current Slide
  dots[slideIndex-1].className += " active";  // Set Current Dot
}

function loadImage(n) { // Load Image
    if(!LoadImage){showSlides(n)}
}
