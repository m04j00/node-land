const number = [512, 1006, 456, 11, 72];
let i = 0;
let total = 0;
while(i < number.length){
    total += number[i++];
}
console.log(`total : ${total}`);