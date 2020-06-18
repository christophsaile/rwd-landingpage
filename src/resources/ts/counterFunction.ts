export default function counter(elem: HTMLElement, start: number, end: number, duration: number) {
    const obj = elem;
    const range = end - start;

	// no timer shorter than 50ms (not really visible any way)
	const minTimer = 50;
	// calc step time to show all interediate values
	let stepTime = Math.abs(Math.floor(duration / range));

	// never go below minTimer
	stepTime = Math.max(stepTime, minTimer);

	// get current time and calculate desired end time
	const startTime = new Date().getTime();
	const endTime = startTime + duration;
	let timer;

	function run() {
		const now = new Date().getTime();
		const remaining = Math.max((endTime - now) / duration, 0);
		const value = Math.round(end - remaining * range);
		obj.innerHTML = value.toLocaleString();
		if (value == end) {
			clearInterval(timer);
		}
	}

	timer = setInterval(run, stepTime);
	run();
}
