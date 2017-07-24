var BasicFlashcard = function(front, back){
	this.front = front;
	this.back = back;
};

var arr = [];

var material = {
	"What was the first country to recognize the independance of the U.S.?": "Morocco",
	"What food is Morocco famous for?": "Couscous",
	"What region of the world is Morocco is?": "North Africa",
	"The first university ever is in Fes, Morocco and is called: ": "The Kairaouine Mosque"
};

for (var key in material){
	arr.push(new BasicFlashcard(key, material[key]));
}

module.exports = {arr, BasicFlashcard};