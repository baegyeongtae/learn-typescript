let user = { name: 'John', age: 34 };
let admin = {}

admin.__proto__ = user;

console.log(admin.name);
console.log(admin.age);
console.log(admin);

admin.role = 'admin';
console.log(admin);