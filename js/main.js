
// window.onload = function() {
	// Global Variables
	var filter = '.about';
	var step = 0;

	document.querySelector('.about-filter').addEventListener( "click", function(e){
		e.preventDefault();
		if (filter === '.about') {

		} else {
			document.querySelector(filter).style.opacity = '0';
			document.querySelector(filter).style.transform = 'scale(0)';
			document.querySelector(filter).style.left = '50vw';

			document.querySelector('.about').style.opacity = '1';
			document.querySelector('.about').style.transform = 'scale(1)';
			document.querySelector('.about').style.left = '0px';

			filter = '.about'
		}

	});

	document.querySelector('.jobs-filter').addEventListener( "click", function(e){
		e.preventDefault();
		if (filter === '.jobs') {

		} else {
			document.querySelector(filter).style.opacity = '0';
			document.querySelector(filter).style.transform = 'scale(0)';
			document.querySelector(filter).style.left = '50vw';

			document.querySelector('.jobs').style.opacity = '1';
			document.querySelector('.jobs').style.transform = 'scale(1)';
			document.querySelector('.jobs').style.left = '0px';

			filter = '.jobs'
			
		}

	});

	document.querySelector('.projects-filter').addEventListener( "click", function(e){
		e.preventDefault();
		if (filter === '.projects') {

		} else {
			document.querySelector(filter).style.opacity = '0';
			document.querySelector(filter).style.transform = 'scale(0)';
			document.querySelector(filter).style.left = '50vw';

			document.querySelector('.projects').style.opacity = '1';
			document.querySelector('.projects').style.transform = 'scale(1)';
			document.querySelector('.projects').style.left = '0px';

			filter = '.projects'
			
		}

	});

	document.querySelector('.schools-filter').addEventListener( "click", function(e){
		e.preventDefault();
		if (filter === '.schools') {

		} else {
			document.querySelector(filter).style.opacity = '0';
			document.querySelector(filter).style.transform = 'scale(0)';
			document.querySelector(filter).style.left = '50vw';

			document.querySelector('.schools').style.opacity = '1';
			document.querySelector('.schools').style.transform = 'scale(1)';
			document.querySelector('.schools').style.left = '0px';

			filter = '.schools'
			
		}

	});

	window.setInterval(function(){
		console.log('running')
		if (step === 0){
			$('h2').removeClass();
			step = 1
		} else if (step === 1) {
			$('h2').removeClass();
			$('h2').addClass('step-one')
			step = 2
		} else if (step === 2) {
			$('h2').removeClass();
			$('h2').addClass('step-two')
			step = 0
		}
	}, 1500);

	// $('about h2').addClass('step-one')
	// $('about h2').addClass('step-two')

// }