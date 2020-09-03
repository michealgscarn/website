/*--------------------------------------------SCRIPT.js---------------------------------------------------*/
/*                                  Created By: Logan Daugherty                                           */
/*                                                                                                        */
/*                                            Features                                                    */
/*                                                                                                        */
/*              Navbar Display: Slides In and out Navbar based on Screen Scrolling Up or Down             */
/*                                                                                                        */
/*--------------------------------------------------------------------------------------------------------*/


/*----------------------------------------Navbar Display---------------------------------------------------*/

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};
    document.getElementById("navbar").style.opacity = "0";
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.opacity = "0.9";
  } else {
    document.getElementById("navbar").style.opacity = "0";
  }
}
