function obliczBmi() {

    let weight = document.getElementById('kgInput').value;
    let height = document.getElementById('heightInput').value;
    let result = document.getElementById('result');

    if ((isNaN(weight)) || (isNaN(height))) {
        result.innerHTML = "Niepoprawne dane, spróbuj ponownie";
    } else {

        height = height / 100;

        let bmi = weight / Math.pow(height, 2);
        result.innerHTML = "Twoj współrzynnik BMI to: " + bmi.toPrecision(4);

    }
}
document.getElementById("buttonBmi").addEventListener("click", obliczBmi);
//test
