function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
}
const person = {
    name: "John",
    age: 30,
    address: "123 Main St",
};

console.log(validateKeys(person, ["name", "age"])); 
console.log(validateKeys(person, ["name", "email"])); 