/*--------------------------------------------SCRIPT.js---------------------------------------------------*/
/*                                  Created By: Logan Daugherty                                           */
/*                                                                                                        */
/*                                            Features                                                    */
/*                                                                                                        */
/*                        Screen Checker: Checks If Elements are on Screen                                */
/*                                    Counter: Count Up Animation                                         */
/*                                                                                                        */
/*--------------------------------------------------------------------------------------------------------*/


/*-----------------------------------Screen Checker and Counter--------------------------------------------*/

const counters = document.querySelectorAll('.counter'); // Set up Counters
let speed = 200; // The lower the slower

function callbackFunc(entries, observer)  // Create a Callback for Element Detection on Screen
{
  entries.forEach(entry => {  // For Every Element with an Oberserver
    if (entry.isIntersecting){  // Check to See if the Element is on Screen
    var element = document.getElementById("firstBlock");  // Create an element
    element.classList.add("slideIn"); //Add an animation
    var element2 = document.getElementById("secondBlock");// Create an element
    element2.classList.add("slideIn");//Add an animation
    var element3 = document.getElementById("thirdBlock"); // Create an element
    element3.classList.add("slideIn");//Add an animation
    var element4 = document.getElementById("fourthBlock"); // Create an element
    element4.classList.add("slideIn");//Add an animation
    counters.forEach(counter => { // For each Counter
      let currentCount = counter.innerText; // Get current amount
    	const updateCount = () => {  // Create a loop that constantly updates
    		const target = +counter.getAttribute('data-target');  // Set the target
    		const count = +currentCount;  // add simplified count by current count
    		let inc = target / speed; //  Set speed of adding
    		if (count < target) { // If count hasn't met target
          currentCount = count + inc; // Add to the current count
          counter.innerText = currentCount.toFixed(0);  // Set counter to a simplified current count
    			setTimeout(updateCount, 1);  // Wait
    		} else {  // When target met
    			counter.innerText = target;  //Set counter as target
    		}
    	};
    	updateCount(); // Update the count
    });
    }
  });
}

let options = { //Set the options
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

let observer = new IntersectionObserver(callbackFunc, options); // Create a obeserver for elements on screen

observer.observe(document.getElementById('firstBlock'));  // Create an observer for 1
observer.observe(document.getElementById('secondBlock')); // Create an observer for 24
observer.observe(document.getElementById('thirdBlock'));  // Create an observer for 16

/*------------------------------------------TESTING--------------------------------------------------------*/


function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
