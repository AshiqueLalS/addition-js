addNumbers=() =>{
    let num1 = document.getElementById("f-num").value
    let num2 = document.getElementById("s-num").value
   
    let sum = parseInt(num1)+parseInt(num2)

    let resultElement = document.getElementById('result')
    resultElement.innerHTML = "Sum: "+sum;

}