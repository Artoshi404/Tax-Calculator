const calculateTax = () => {
    const income = document.getElementById('income').value;
    const expenses = document.getElementById('expenses').value;
    const deductions = document.getElementById('deductions').value;
    let netIncome = income - expenses - deductions;

    let tax = 0;
    if (netIncome <= 150000) {
        tax = 0;
    } else if (netIncome <= 300000) {
        tax = (netIncome -150000) * 0.05;
    } else if (netIncome <= 500000) {
        tax = (netIncome - 300000) * 0.1 + 7500;
    } else if (netIncome <= 750000) {
        tax = (netIncome - 500000) * 0.15 + 27500;
    } else if (netIncome <= 1000000) {
        tax = (netIncome - 750000) * 0.2 + 65000;
    } else if (netIncome <= 2000000) {
        tax = (netIncome - 1000000) * 0.25 + 115000;
    } else if (netIncome <= 5000000) {
        tax = (netIncome - 2000000) * 0.3 + 365000;
    } else {
        tax = (netIncome - 5000000) * 0.35 + 1265000;
    }

    document.getElementById('net-income').innerHTML = `เงินได้สุทธิซ ${netIncome.toFixed(2)} บาท`
    document.getElementById('result').innerHTML = `ภาษีที่ต้องจ่าย: ${tax.toFixed(2)} บาท`
}