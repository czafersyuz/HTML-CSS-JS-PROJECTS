let enter = document.getElementById("enter");
let result = document.getElementById("result");
let number = document.getElementById("number");

enter.addEventListener("click", () => {
    if (Number(number.value) < 1 || Number(number.value) > 8 ) {
        result.innerHTML = "Please enter a number between 1 to 8";
        number.value = ""
    } else {
        count = 0
        while (number.value > count) {
            resultNumber = [];
            while (resultNumber.length < 6) {
                let randomNumber = Math.floor(Math.random() * 90)+1
                if (resultNumber.includes(randomNumber)) { continue; }
                else { resultNumber.push(randomNumber) }
            }
            resultNumber7 = [];
            let randomNumber = Math.floor(Math.random() * 90)+1
            if (resultNumber.includes(randomNumber)) { continue; }
            else { resultNumber7.push(randomNumber) }

            let randomNumber8 = Math.floor(Math.random() * 90)+1
            resultNumber7.push(randomNumber8);
            count += 1
            result.innerHTML += resultNumber.sort(function (a, b) { return a - b }).join(" , ") + " | " + resultNumber7.join(" | ") + "<hr>"
        }
        number.value = ""
    }
    
    number.addEventListener("change", () => {
        result.innerHTML = ""
    })
})