const cat = document.getElementById('catImg');
const cat2 = document.getElementById('catImg2');
const scoreText = document.getElementById('score');
const scoreText2 = document.getElementById('score2');
let score1 = 0;
let score2 = 0;

cat.addEventListener('click', function(){
	score1++;
	scoreText.innerHTML = score1;  

}, false);

cat2.addEventListener('click', function(){
	score2++;
	scoreText2.innerHTML = score2;  

}, false);