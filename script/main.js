(() => {
	 // make the connections to the elements on the page
	 // that we want the user to interact with
	 const theButtons = document.querySelectorAll("#buttonHolder img");
	       theGameBoard = document.querySelector(".puzzle-board");

	 function changeBgImg () {
		 //debugger; //pause our code execution at this point
		 //let key = this.dataset.bgref;
		 //console.log(key);

		 //theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;
		 theGameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
		 // `` => this is a js template string. You can use it to write a bit of
		 //-- inline js which will be interpreted at runtime.
		 // Search for MDN js Template String
	 }

   // these are the "triggers" we want the user to use to fire off events
	 theButtons.forEach(imgBtn => imgBtn.addEventListener("click", changeBgImg));

})();
