function add (num1, num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[2];

}
const result = add (10, 15, 20, 25);
console.log(result);