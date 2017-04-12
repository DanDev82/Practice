function getRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}
document.write("<h2>" + getRandomNumber(100, 1000) + "</h2>");