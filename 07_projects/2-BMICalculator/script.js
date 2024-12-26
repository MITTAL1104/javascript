const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

   const height =  parseInt(document.querySelector('#height').value)
   const weight =  parseInt(document.querySelector('#weight').value)
   const results =  document.querySelector('#results').value

   if(height==='' || height<0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
   }
   else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`Please provide a valid weight ${weight}`;
   }
   else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)

    // <p>Under Weight = Less than 18.6</p>
    // <p>Normal Range = 18.6 and 24.9</p>
    // <p>Overweight = Greater than 24.9</p>

    if(bmi<18.6){
        results.innerHTML = `<span>${bmi}<span>`;
        results.innerHTML = `<span>Under Weight<span>`;
    }
    if(bmi>18.6 && bmi<24.9){
        results.innerHTML = `<span>${bmi}<span>`;
        results.innerHTML = `<span>Normal Range<span>`;
    }
    if(bmi>24.9){
        results.innerHTML = `<span>${bmi}<span>`;
        results.innerHTML = `<span>Over Weight<span>`;
    }

   }
})