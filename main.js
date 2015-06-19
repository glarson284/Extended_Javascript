function Idk(){

		this.want = function() { 
			console.log('want');
			return this;

		}
		this.you = function() { 
			console.log('you');
			return this;
		}
		this.what = function() { 
			console.log('what');
			return this;
		}
		this.do = function() { 
			console.log('do');
			return this;
		}
		this.pun = function() { 
			console.log('!?');
			return this;
		}
	}
	var hello = new Idk('dont','meep');


	$(document).ready(function(){
		new Idk().what().do().you().want().pun().pun().pun();
	});
	