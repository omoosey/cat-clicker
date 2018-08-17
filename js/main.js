var cat = document.getElementById('catImg');
var scoreText = document.getElementById('score');
var score = 0;

cat.addEventListener('click', function(){
	score++;
	scoreText.innerHTML = score;  

}, false);
