// ES2015(ES6)

class Person {
    // 클래스 로직
    constructor(name, age) {                     // 초기 생성자
        console.log('생성 되었습니다.')
        this.name = name;
        this.age = age;
    }
}

let seho = new Person('세호', 30);   // 생성 되었습니다.
console.log(seho);