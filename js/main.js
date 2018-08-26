var model = {
	currentCat: null,
	cats: [{
		name: 'Cute Kitten',
		imgSrc: 'img/cat.jpg',
		clickCount: 0,
	},
	{
		name: 'Hiding Cat',
		imgSrc: 'img/cat2.jpg',
		clickCount: 0,
	},
	{
		name: 'Hugging Cats',
		imgSrc: 'img/cat3.jpg',
		clickCount: 0,
	},
	{
		name: 'Bowtie Cat',
		imgSrc: 'img/cat4.jpg',
		clickCount: 0,
	},
	{
		name: 'Burrito Cat',
		imgSrc: 'img/cat5.jpg',
		clickCount: 0,
	}]
}

var octopus = {
	// catDisplay: function(cat){
	// 	console.log(cat);
	// },

	currentCat: function(){
		return model.currentCat;
	},

	setCurrentCat: function(cat){
		model.currentCat = cat;
	},

	incrementClick: function(cat){
		cat.clickCount++;
	},

	renameCat: function(cat, catName){
		cat.name = catName;
	},

	changeURL: function(cat, catURL){
		cat.imgSrc = catURL;
	},

	changeClicks: function(cat, clicks){
		cat.clickCount = clicks;
	},

	init: function(){
		model.currentCat = model.cats[0];

		listView.init();
		listView.render(model.cats);
		displayView.init();
		adminView.init();
	}
}

var listView = {
	init: function(){
		this.catNameDiv = document.getElementById('displayCatName');
		this.scoreDiv = document.getElementById('score'); 
		this.listOfCats = document.getElementById('catList');
		this.image = document.getElementsByTagName('img')[0];

	},

	render: function(catArray){

		var listOfCats = this.listOfCats,
			catNameDiv = this.catNameDiv,
			scoreDiv = this.scoreDiv,
			image = this.image;
			currentCat = octopus.currentCat();

		listOfCats.innerHTML = "";

		for (let i = 0; i < catArray.length; i++){
			let newLi = document.createElement("li");
			newLi.textContent = catArray[i].name;
			listOfCats.appendChild(newLi);
			listOfCats.children[i].addEventListener('click', function(){
				catNameDiv.innerHTML = catArray[i].name;
				scoreDiv.innerHTML = catArray[i].clickCount;
				currentCat = catArray[i];
				image.src = catArray[i].imgSrc;
			});
		};

		
	}

}

var displayView = {
	init: function(){
		this.catNameDiv = document.getElementById('displayCatName');
		this.scoreDiv = document.getElementById('score'); 
		this.listOfCats = document.getElementById('catList');
		this.image = document.getElementsByTagName('img')[0];

		this.render();
	},

	render: function(){
		var listOfCats = this.listOfCats,
			catNameDiv = this.catNameDiv,
			scoreDiv = this.scoreDiv,
			image = this.image;
			currentCat = octopus.currentCat();

		image.addEventListener('click', function(){
			octopus.incrementClick(currentCat);
			scoreDiv.innerHTML = currentCat.clickCount;
		});
	}
}

var adminView = {
	init: function(){
		this.adminButton = document.getElementById('admin');
		this.adminDisplay = document.getElementById('adminDisplay');
		this.adminName = document.getElementById('adminName');
		this.adminURL = document.getElementById('adminURL');
		this.adminClicks = document.getElementById('adminClicks');
		this.cancelButton = document.getElementById('cancel');
		this.saveButton = document.getElementById('save');

		this.render();
	},

	render: function(){
		var adminButton = this.adminButton,
			adminDisplay = this.adminDisplay,
			saveButton = this.saveButton;
			currentCat = octopus.currentCat();

		adminButton.addEventListener('click', function(){
			if(adminDisplay.hidden){
				adminDisplay.hidden = false;
			} else {
				adminDisplay.hidden = true;
			}
		});

		saveButton.addEventListener('click', function(){
			octopus.renameCat(currentCat, adminName.value);
			listView.render(model.cats);
			// displayView.render();
		});
	}
}

octopus.init();


