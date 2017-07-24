var ClozeFlashcard = function(cloze, question){
	this.cloze = cloze;
	this.question = question;

	this.displayQuestion = function(){
		var display = question.replace(cloze, "...");
		return display;
	};

};

var arr = [];

var material = {
	"August": "August has the highest rate of births",
	"11%": "11% of people are left handed",
	"8%": "8% of people have an extra rib",
	"lobsters": "lobsters blood is colorless but when exposed to oxygen it turns blue",
	"armadillos": "armadillos have 4 babies at a time and are all the same sex",
	"birds": "birds need gravity to swallow"
};

for (var key in material){
	arr.push(new ClozeFlashcard(key, material[key]));
}

module.exports = {arr, ClozeFlashcard};