window.addEventListener('keydown', function(e){

	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if(!audio)
		return;
	const keyDiv = document.querySelector(`div[data-key="${e.keyCode}"]`);
	keyDiv.classList.add('playing');
	audio.currentTime = 0;
	audio.play();

	//setTimeout(keyDiv.classList.remove('playing'),1000);

});


const keys = document.querySelectorAll(`.key`);

keys.forEach(key => {

	key.addEventListener('transitionend', function(e){
		this.classList.remove('playing');
	});
});