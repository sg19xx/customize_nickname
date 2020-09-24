let state = {
	colorText: 'black',
	colorPrefix: 'black',
	colorNickname: 'black'
}

const color = (type) => {
	let pathElem = document.querySelector('.pathElem');
	pathElem.parentElement.addEventListener('click', (event) => {
		if(event.target.tagName === 'path' && type === 'text') {
			let item = event.target;
			state.colorText = getComputedStyle(item).fill
		} else if (event.target.tagName === 'path' && type === 'prefix') {
			let item = event.target;
			state.colorPrefix = getComputedStyle(item).fill
		} else if (event.target.tagName === 'path' && type === 'nickname') {
			let item = event.target;
			state.colorNickname = getComputedStyle(item).fill
		}
	})
}

const check = () => {
	let textOne = document.querySelector('.one');
	let textTwo = document.querySelector('.two');
	let textThree = document.querySelector('.three');
	textOne.style.color = state.colorText;
	textTwo.style.color = state.colorPrefix;
	textThree.style.color = state.colorNickname;
}

const clickPerform = () => check()

color('text')
color('prefix')
color('nickname')