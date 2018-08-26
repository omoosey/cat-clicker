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

	init: function(){
		model.currentCat = model.cats[0];

		view.init();
		view.render(model.cats);
	}
}

var view = {
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

		image.addEventListener('click', function(){
			currentCat.clickCount++;
			scoreDiv.innerHTML = currentCat.clickCount;
		})
	}

}

octopus.init();


