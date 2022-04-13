const arr = ['A', 'B', 'C', 'D'];

console.log(arr[[1]]); // B
console.log(arr[[3]]); // D

// arr[2]의 'C'를 2로 변경
arr[2] = 3;
console.log(arr); // [ 'A', 'B', 3, 'D' ]

// arr의 길이 출력
console.log(arr.length); // 4

// arr 배열 마지막에 E 추가
arr.push('E');
console.log(arr); // [ 'A', 'B', 3, 'D', 'E' ]