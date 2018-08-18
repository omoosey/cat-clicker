/* OLD CODE

const cat = document.getElementById('catImg');
const cat2 = document.getElementById('catImg2');
const catName1 = "Cute Kitten";
const catName2 = "Hiding Cat";
const scoreText = document.getElementById('score');
const scoreText2 = document.getElementById('score2');
let score1 = 0;
let score2 = 0;

document.getElementById('catName1').innerHTML = catName1;
document.getElementById('catName2').innerHTML = catName2;

cat.addEventListener('click', function(){
	score1++;
	scoreText.innerHTML = score1;  

}, false);

cat2.addEventListener('click', function(){
	score2++;
	scoreText2.innerHTML = score2;  

}, false);

*/

const catNameDiv = document.getElementById('displayCatName');
const scoreDiv = document.getElementById('score'); 
const catNames = ['Cute Kitten', 'Hiding Cat', 'Hugging Cats', 'Bowtie Cat', 'Burrito Cat'];
const catImages = ['img/cat.jpg', 'img/cat2.jpg', 'img/cat3.jpg', 'img/cat4.jpg', 'img/cat5.jpg']
// let catScores = [0, 0, 0, 0, 0];
const listOfCats = document.getElementById('catList');
const image = document.getElementsByTagName('img')[0];

for (let i = 0; i < listOfCats.children.length; i++){
	listOfCats.children[i].innerHTML = catNames[i];
	listOfCats.children[i].addEventListener('click', function(){
		catNameDiv.innerHTML = catNames[i];
		image.setAttribute("src", catImages[i]);
	});
}