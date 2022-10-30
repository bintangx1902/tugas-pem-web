function validate() {
    var value = document.getElementById('input1')
    if (isNaN(value)) {
        modifier = "not "
    } else {
        modifier = ""
    }
    var report = `You entered '${value}'; this is ${modifier} a valid number`
    alert(report)
}