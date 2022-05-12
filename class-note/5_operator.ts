// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);

// 지정할 타입이 복수로 정해지는 (확장의 개념인거 같기도 하다) => Union type
let seho: string | number | boolean;
function logMessage(value: string | number) {
    console.log(value);
    if (typeof value === 'string') {
        value.toLocaleString();
    }
    if (typeof value === 'number') {
        value.toString();
    }
    throw new TypeError('value must be a string or number');
}

logMessage('hello');
logMessage(100);