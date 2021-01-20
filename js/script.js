let wrap = document.querySelector('.wrap');
wrap.addEventListener('click', func);
let boxes = document.querySelectorAll('.box');
//console.log(boxes);


function func(){
	console.log(event.target.style.backgroundImage);

let filterClass = event.target.dataset['sel'];


for (elem of boxes){	
	
	if (event.target.dataset.sel == filterClass && event.target.tagName == 'LI'){
	
	if(!elem.classList.contains(filterClass)){
		
	elem.classList.add('hide');	
	}else {
		elem.classList.remove('hide');
	}
	if (event.target.dataset.sel == 'all') {
		elem.classList.remove('hide');			
	}
	
    }
  }
}
