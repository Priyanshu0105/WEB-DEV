const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  if (height <= 0 || height === '' || isNaN(height)) {
    results.innerHTML = 'please give a valid height';
  } else if (weight <= 0 || weight === '' || isNaN(weight)) {
    results.innerHTML = 'please give a valid weight';
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
     bmi2 = '';
    if(bmi<18.6 ){
      const bmi2 = ' Underweight'
    }
    else if(bmi>=18.6 && bmi <= 24.9){
     bmi2 = ' Normal range'
    }
    else{
     bmi2 = ' Over weight'
    }
    results.innerHTML = `your bmi is ${bmi} and you are ${bmi2}`
  }
});
