
const checkValue = (value, label, valuesArray) => {

    let data;
    const finalValue = (label.endsWith('s')) ? label : label + 's';
    switch (finalValue) {
        case valuesArray[0]:
            data = value;
            break;
        case valuesArray[1]:
            data = value * 60;
            break;
        case valuesArray[2]:
            data = value * 60 * 60;
            break;
        case valuesArray[3]:
            data = value * 24 * 60 * 60;
            break;
        default:
            throw new Error('check your input');
            break;
    }
    return data;
}

const timeAdder = (value1, label1, value2, label2) => {

    const singleValues = ["second", "minute", "hour", "day"];
    const pluralValues = ["seconds", "minutes", "hours", "days"];
    const test1 = (typeof value1 === "number" && typeof value2 === "number");
    const test2 = (typeof label1 === "string" && typeof label2 === "string");
    const test3 = (value1 === 1 && singleValues.includes(label1)) || (value1 != 1 && pluralValues.includes(label1));
    const test4 = (value2 === 1 && singleValues.includes(label2)) || (value2 != 1 && pluralValues.includes(label2));
    if (!(test1 && test2 && test3 && test4)) return false;
    if (value1 < 0 || value2 < 0) return false;
    const finalValue = checkValue(value1, label1, pluralValues) + checkValue(value2, label2, pluralValues);
    const modulo = (finalValue % (60 * 60 * 24) == 0) ? [finalValue / (60 * 60 * 24), 'days'] :
        ((finalValue % (60 * 60) == 0)) ? [finalValue / (60 * 60), 'hours'] :
            ((finalValue % (60) == 0)) ? [finalValue / 60, 'minutes'] : [finalValue, 'seconds'];

    modulo[1] = (modulo[0] > 1) ? modulo[1] : modulo[1].slice(0, modulo[1].length - 1);
    return modulo;
}

const result = timeAdder(23, 'hours', 60, 'minutes');
console.log(result);