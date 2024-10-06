let styleMode = localStorage.getItem('styleMode')

const btnDay = document.querySelector('.change-theme-day')
const btnNeon = document.querySelector('.change-theme-neon')
const btnAuto = document.querySelector('change-theme-auto')
const navItem = document.querySelectorAll('.nav__item')

const enableDay = () => {
	document.body.classList.remove('neon')
	document.body.classList.add('day')
	localStorage.setItem('styleMode', 'dayStyle')
}

const disableDay = () => {
	// document.body.classList.remove('day');
	localStorage.setItem('styleMode', null)
}

const enableNeon = () => {
	document.body.classList.remove('day')
	document.body.classList.add('neon')
	localStorage.setItem('styleMode', 'neonStyle')
}

const disableNeon = () => {
	document.body.classList.remove('neon')
	localStorage.setItem('styleMode', null)
}

btnDay.addEventListener('click', () => {
	styleMode = localStorage.getItem('styleMode')
	
	if (styleMode !== 'dayStyle') {
		enableDay()
	} else {
		disableDay()
	}
})

if (styleMode === 'dayStyle') {
	enableDay()
}

if (styleMode === 'neonStyle') {
	enableNeon()
}

btnNeon.addEventListener('click', () => {
	styleMode = localStorage.getItem('styleMode')

	if (styleMode !== 'neonStyle') {
		enableNeon()
	} else {
		disableNeon()
	}
})

for (var i = 0; i < navItem.length; i++) {
	navItem[i].addEventListener('click', ()=>{
		navItem.classList.add('active')
	})
}