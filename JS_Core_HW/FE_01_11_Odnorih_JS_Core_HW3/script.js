
function getArea(num) {
    console.log(num);
    if (typeof num !== 'number'){
        if (typeof num == 'undefined') {
            return 'Будь ласка, введіть радіус!';
        }
        return "Повинно бути числове значення";
    }
    const area = Math.PI * Math.pow(num,2);
    return `Площа дорівнює ${area} то квадратних одиниць.`;
}

console.log(getArea());