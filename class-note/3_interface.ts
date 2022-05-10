interface User {
    age: number;
    name: string;
}

// 변수에 활용한 인터페이스
let seho: User = { 
    age: 33,
    name: '세호'
}

//함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const capt = {
    name: '캡틴',
    age: 100
}

getUser(capt);

// 함수의 스텍(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}