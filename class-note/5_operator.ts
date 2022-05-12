// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);

// 지정할 타입이 복수로 정해지는 (확장의 개념인거 같기도 하다) => Union type

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

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// Union
function askSomeone(someone: Developer | Person): void {
    someone.name    // Union type을 설정했지만, safe하게 하기 위해서 (보장된) 공통된 타입으로만 지정이 가능하다.
    someone.age     // 그냥 쓰기엔 unsafe
    someone.skill   // 그래서 앞서 썼던 typeof ~ 처럼 guard를 사용하여 다시 사용할 수 있다.
}

// intersection
function askSomeone(someone: Developer & Person) {
    someone.name
    someone.age
    someone.skill
}

let seho: string | number | boolean;
let capt: string & number & boolean;