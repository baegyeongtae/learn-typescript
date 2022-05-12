// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);

// 지정할 타입이 복수로 정해지는 (확장의 개념인거 같기도 하다) => Union type
function logMessage(value: string | number) {
    console.log(value);
}

logMessage('hello');
logMessage(100);