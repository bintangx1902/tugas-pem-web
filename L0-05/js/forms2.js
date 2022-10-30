function validate() {
    var value = document.getElementById('input1').value

    if (isNaN(value)) {
        modifier = "not "
        report = `You entered '${value}'; this is ${modifier} a valid number`
        
    } else {
        if (value <= 100 && value >= 81) {
            report = `Nilai Anda A`
        } else if (value < 81 && value >= 71) {
            report = `Nilai Anda AB`
        } else if (value < 71 && value >= 66) {
            report = `Nilai Anda B`
        } else if (value < 66 && value >= 61) {
            report = `Nilai Anda BC`
        } else if (value < 61 && value >= 56) {
            report = `Nilai Anda C`
        } else if (value < 56 && value >= 41) {
            report = `Nilai Anda D`
        } else {
            report = `Nilai Anda E`
        }
    }
    document.getElementById('text').innerHTML = report
}

function count(operator) {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

    if (operator == '+') {
        res = num1 + num2    
    } else if (operator == '-') {
        res = num1 - num2
    } else if (operator == '*') {
        res = num1 * num2
    } else if (operator == '/') {
        res = num1 / num2
    }
    document.getElementById('text').innerHTML = res
}