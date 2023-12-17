export function startCountdown(initialTimeInSeconds) {
	let timeInSeconds = initialTimeInSeconds;
	
	updateDisplay(
		timeInSeconds,
		'.tariff-time__hours',
		'.tariff-time__minutes',
		'.tariff-time__seconds'
	);

	function countdown() {
		updateDisplay(
			timeInSeconds,
			'.tariff-time__hours',
			'.tariff-time__minutes',
			'.tariff-time__seconds'
		);

		if (timeInSeconds > 0) {
			timeInSeconds--;
			setTimeout(countdown, 1000);
		} else {
			const tariffTime = document.querySelector('.tariff-time');
			const parentCard = tariffTime.parentNode;
			const parentCardBtn = parentCard.querySelector('.tariff__btn');
			parentCardBtn.setAttribute('disabled', true);
			console.log('parentNode', parentCardBtn)
		}
	}

	// Начинаем отсчет
	countdown();
}

function updateDisplay(
	timeInSeconds,
	hoursSelector,
	minutesSelector,
	secondsSelector
) {
	const hoursElement = document.querySelector(hoursSelector);
	const minutesElement = document.querySelector(minutesSelector);
	const secondsElement = document.querySelector(secondsSelector);

	const hours = Math.floor(timeInSeconds / 3600);
	const minutes = Math.floor((timeInSeconds % 3600) / 60);
	const seconds = timeInSeconds % 60;

	hoursElement.textContent = padZero(hours);
	minutesElement.textContent = padZero(minutes);
	secondsElement.textContent = padZero(seconds);
}

function padZero(value) {
	return value < 10 ? '0' + value : value;
}