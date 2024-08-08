// document.getElementById('floating-button').addEventListener('click', function () {
// 	window.scrollTo({
// 		top: 0,
// 		behavior: 'smooth'
// 	});
// });

const findElement = (container, selector) => {
	if (container === null) {
		return null;
	}
	return container.querySelector(selector);
};
const findElementAll = (container, selector) => {
	if (container === null) {
		return [];
	}
	return container.querySelectorAll(selector);
};
(function burgerMenu() {
	// Меню бургер
	const iconMenu = findElement(document, '.menu__icon');
	const menuBody = findElement(document, '.menu__body');
	if (iconMenu && menuBody) {
		iconMenu.addEventListener("click", function (evt) {
			document.body.classList.toggle('_lock');
			iconMenu.classList.toggle('_active');
			menuBody.classList.toggle('_active');
		});
	}

	// const first = findElementAll(document, '.menu__link')[1];
	// const department = findElement(document, first.dataset.goto);

	function showBoundingClientRect() {
		// console.log(department.getBoundingClientRect().top + pageYOffset);
	}
	document.addEventListener('scroll', showBoundingClientRect);

	// Прокрутка при клике
	const menuLinks = findElementAll(document, '.menu__link[data-goto]');
	if (menuLinks.length > 0) {
		menuLinks.forEach(menuLink => {
			menuLink.addEventListener('click', onMenuLinkClick)
		});
		function onMenuLinkClick(evt) {
			const menuLink = evt.target;
			const gotoBlock = findElement(document, menuLink.dataset.goto);
			if (menuLink.dataset.goto && gotoBlock) {
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - findElement(document, '.header_main').offsetHeight;
				if (iconMenu.classList.contains('_active')) {
					document.body.classList.toggle('_lock');
					if (iconMenu && menuBody) {
						iconMenu.classList.toggle('_active');
						menuBody.classList.toggle('_active');
					}
				}
				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
				evt.preventDefault();
			}
		}
	}
})();

function metrika() {
	// yandex-metrika
	(function (m, e, t, r, i, k, a) {
		m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
		m[i].l = 1 * new Date();
		for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
		k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
	})
		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

	ym(97536957, "init", {
		clickmap: true,
		trackLinks: true,
		accurateTrackBounce: true
	});
}

window.addEventListener('load', setTimeout(metrika, 1000));

function loadCSS(href) {
	return new Promise((resolve, reject) => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;
		link.onload = () => resolve();
		link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
		document.head.appendChild(link);
	});
}

function loadScript(src) {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = src;
		script.async = true;
		script.onload = () => resolve();
		script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
		document.body.appendChild(script);
	});
}
