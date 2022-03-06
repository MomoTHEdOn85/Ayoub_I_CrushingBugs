(() => {
	 // make the connections to the elements on the page
	 // that we want the user to interact with
	 let theButtons = document.querySelectorAll('#buttonHolder img'),
	     PuzzlePieces = document.querySelectorAll('.puzzle-pieces *'),
			 dropZone = document.querySelectorAll('.drop-zone'),
			 theGameBoard = document.querySelector('.puzzle-board');


	 const puzPaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
	 const puz = document.querySelectorAll('.puzzle-image');


	 function changeImgSet () {
		 //debugger; //pause our code execution at this point
		 //let key = this.dataset.bgref;
		 //console.log(key);

		 //theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;
		 theGameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
		 // `` => this is a js template string. You can use it to write a bit of
		 //-- inline js which will be interpreted at runtime.
		 // Search for MDN js Template String

		 puzPaths.forEach((puzzle, index) => {
			 PuzzlePieces[index].src = `images/${puzzle + this.dataset.bgref}.jpg`;
		 })
		 PuzzlePieces.appendChild(puzPaths);

	 }


	 function startDrag(event) {
		 // save a reference to the element we're dragging
		 event.dataTransfer.setData('draggedElement', event.target.id);
	 }

	 function draggedOver () {
		 event.preventDefault();
	 }

	 function dropped(event) {
		 event.preventDefault();
		 let currentstate = event.dataTransfer.getData('draggedElement');
		 console.log(`dropped this element:`, currentstate);
		 //appendChild (addChild) is a built-in js method that adds
		 //--elements to a containing (parent) elements

		 // the "this" keyword is a ref to the element you're dropping onto (or into)
		 this.appendChild(document.querySelector(`#${currentstate}`));

     //Positing one piece at a time
		 event.target.appendChild(document.getElementById(currentstate));

	 }

	 //function checkEl () {
		// let FirstEl = dropZone.firstChild;
	//	 return FirstEl;
	 //}


	 //function checkChild(PuzzlePieces, dropZone) {
	//	 for(var i = 4; i < dropZone.length; i++) {
		//	 var chek = dropZone[i];
			// PuzzlePieces.appendChild(chek);
			// console.log(chek);
		// }


   // these are the "triggers" we want the user to use to fire off events
	 theButtons.forEach(imgBtn => imgBtn.addEventListener('click', changeImgSet));
	 PuzzlePieces.forEach(puzzle => puzzle.addEventListener('dragstart', startDrag));
	 dropZone.forEach(zone => {
		 zone.addEventListener('dragover', draggedOver);
		 zone.addEventListener('drop', dropped);
	 });
	// dropZone.forEach(checkChild);


	//while (checkEl == true) {
		// dragZone.appendChild(dropZone);
	 //}

})();
