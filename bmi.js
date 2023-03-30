function calculate(){
    let bmi;
    let result = document.getElementById("result");
    let height = parseInt(document.getElementById("heightVal").value);
    let weight = parseInt(document.getElementById("weightVal").value);

    //formula for BMI
    bmi = (weight / Math.pow( (height/100), 2)).toFixed(1);
    
    //dispay the result of BMI
    result.textContent = bmi;

    //category to display after BMI calculation
    if(bmi<18.5){
        category = "Underweight";
        result.style.color = "pink";
    } else if(bmi>=18.5 && bmi<25){
        category = "Normal Weight";
        result.style.color = "blue";
    } else if(bmi>=25 && bmi<30){
        category = "Overweight";
        result.style.color = "orange";
    } else {
        category = "Obese";
        result.style.color = "red";
    }

    // display the category
    document.getElementById("category").textContent = category;
}