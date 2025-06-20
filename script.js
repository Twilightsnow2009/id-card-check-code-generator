document.getElementById('generateButton').addEventListener('click', generateCheckCode);

function generateCheckCode() {
    const idPrefix = document.getElementById('idPrefix').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (idPrefix.length !== 17) {
        alert('请输入正确的身份证前17位');
        return;
    }

    const checkCode = calculateCheckCode(idPrefix);
    const fullID = idPrefix + checkCode;
    resultDiv.textContent = `完整的身份证号码：${fullID}`;
}

function calculateCheckCode(idPrefix) {
    const coefficients = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const checkCodeMap = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    let sum = 0;
    for (let i = 0; i < 17; i++) {
        sum += parseInt(idPrefix[i]) * coefficients[i];
    }
    const remainder = sum % 11;
    return checkCodeMap[remainder];
}
