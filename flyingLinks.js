// set container style
document.getElementsByTagName("body")[0].style.position = 'relative';

// get all links and add event on click to animate
var links = document.getElementsByTagName("a");

function move(event){
		event.preventDefault();

		var thisLink = this;

		thisLink.style.position = 'fixed';
		linkPos = thisLink.getBoundingClientRect();

		// do animation in random direction
		var topPos = 0;
		var leftPos = 0;
		var id = setInterval(frame, 5);

		var pos = Math.floor(Math.random() * 8) + 1;

		function frame(){
    		if(pos == 1){
    			topPos++;
    		}
    		else if(pos == 2){
    			topPos++;
    			leftPos++;
    		}
    		else if(pos == 3){
    			leftPos++;
    		}
    		else if(pos == 4){
    			topPos--;
    			leftPos++;
    		}
    		else if(pos == 5){
    			topPos--;
    		}
    		else if(pos == 6){
    			topPos--;
    			leftPos--;
    		}
    		else if(pos == 7){
    			leftPos--;
    		}
    		else{
    			topPos++;
    			leftPos--;
    		}

    		// change position of link based on position in window
    		thisLink.style.top = linkPos.top - window.scrollY + topPos + 'px'; 
    		thisLink.style.left = linkPos.left - window.scrollX + leftPos + 'px'; 
	  	}
    }

// adding event listener for animation and to remove event listener (so link can be clicked) on each link
for(var i = 0; i < links.length; i++){
	
	links[i].addEventListener("click", move);

    links[i].addEventListener("click", function(){
    	this.removeEventListener("click", move);
    });

}
