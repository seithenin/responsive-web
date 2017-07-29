// Testimonials - allows to click through the dot navigation of the testimonies.

		 // if js is not active display should be the same, only clickable
		 //  dots are inactive -->

		// keep track of which testimony is active
		var activeTestimony = "testimony-1";
		var scrollbarWidth = 0;

		// Page loads, apply event listeners to the radio buttoms.
		document.addEventListener("DOMContentLoaded", function(event) {

			document.getElementById(activeTestimony).checked = true;

			var el = document.getElementsByName("dots");

			// add the listeners to the radio's
			for(var i=0; i < el.length; i++) {
				el[i].addEventListener('click', radioChange, false);
			}

			// Watch for window resizing to undo the js changes.
			window.addEventListener('resize', changedToDesktop);

			// ===== Measure the scrollbar width: https://davidwalsh.name/detect-scrollbar-width
			// Create the measurement node
			var scrollDiv = document.createElement("div");
			scrollDiv.className = "scrollbar-measure";
			document.body.appendChild(scrollDiv);

			// Get the scrollbar width
			scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

			// Delete the DIV 
			document.body.removeChild(scrollDiv);
		});

		// Radio button is clicked, then add the display-show and
		//		display hide options	
		function radioChange(x) {

			// check whether param is correct
			if(x != "testimony-1" && x != "testimony-2") x = this.id;
			
			// collect the elements
			var speech1 = document.getElementById("speech-1");
			var speech2 = document.getElementById("speech-2");

			// If first testimony is selected, hide the other one
			if (x == "testimony-1")
			{
				speech2.classList.add("display-hide");
				speech2.classList.remove("display-show");
				speech1.classList.add("display-show");
				speech1.classList.remove("display-hide");
				activeTestimony = "testimony-1";
			}
			// if second testimony is selected hide the first
			else if (x == "testimony-2")
			{
				speech2.classList.add("display-show");
				speech2.classList.remove("display-hide");				
				speech1.classList.add("display-hide");
				speech1.classList.remove("display-show");
				activeTestimony = "testimony-2";
			}
		}

		// Watch the window resizing, if it is in desktop mode then
		//		remove the hide and show styles
		function changedToDesktop(){

			if( (document.documentElement.clientWidth + scrollbarWidth) > 991)
			{
				var speech1 = document.getElementById("speech-1"), speech1style = speech1.style;
				var speech2 = document.getElementById("speech-2"), speech2style = speech2.style;

				speech1.classList.remove("display-show", "display-hide");
				speech2.classList.remove("display-show", "display-hide");
			}
			// if mobile or tablet ensure the last active radio is active again
			else
			{
				radioChange(activeTestimony);
			}
		}
