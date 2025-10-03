const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const cat = document.querySelector('#class');

    if (height <= 0 || height == '' || isNaN(height)) {
        result.innerHTML = 'Please provide a Valid Height';
    } else if (weight <= 0 || weight == '' || isNaN(weight)) {
        result.innerHTML = 'Please provide a Valid weight';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `Result : ${bmi}`;
        if (bmi < 18.6) {
            result.style.color = 'yellow';
            cat.style.color = 'yellow';
            cat.innerHTML = 'Under Weight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.style.color = 'green';
            cat.style.color = 'green';
            cat.innerHTML = 'Normal Range';
        } else if (bmi > 24.9) {
            result.style.color = 'red';
            cat.style.color = 'red';
            cat.innerHTML = 'Overweight';
        }
    }
});
