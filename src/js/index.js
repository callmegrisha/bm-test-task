import { getTariff } from "./modules/getTariff";
import { startCountdown } from "./modules/startCountdown";

document.addEventListener('DOMContentLoaded', () => {
	startCountdown(81370);
	getTariff('.tariff', '.tariff__title');
});
