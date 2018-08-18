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

const catNames = ['Cute Kitten', 'Hiding Cat', 'Hugging Cats', 'Bowtie Cat', 'Burrito Cat'];
const listOfCats = document.getElementById('catList');

for (let i = 0; i < listOfCats.children.length; i++){
	listOfCats.children[i].innerHTML = catNames[i];
}