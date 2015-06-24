




function Multiplier() {
	this.multiply = function(num) {
		while(this.currentValue < 1000){
			result =  num * this.getCurrentValue();
			this.currentValue = result;
			console.log(result);
		}
		return result;
	};
	this.getCurrentValue = function(){
		return this.currentValue

	}
	this.currentValue = 1;
	//mult = new Multiplier();
}



	if(song.playing){
			console.log("your song is playing")
		}
		else {
			console.log('Now it is')
			song.playing = true;
		}