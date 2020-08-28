const counters = document.querySelectorAll('.counter');
const speed = 200; 
//The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
        const target = +counter.getAttribute('data-target');
         // "+" String to num chck type of target
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
            counter.innerText = Math.ceil(count + inc);
            // console.log(counter.innerText);
			// Call function every milli scond
			setTimeout(updateCount, 1);
		} else {
            counter.innerText = Math.ceil(target);
            // console.log(counter.innerText);
		}
	};

	updateCount();
});
