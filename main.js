// 1
// for(let i = 0; i < 101; i++){
//     console.log(i);
// }

// 2
// for(let i = 10; i < 21; i++){
//     console.log(i);
// }

// 3
// for(let i = 10; i < 21; i++){
//     if(i % 3 == 0)
//         console.log(i);
// }

// 4
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(let i = 0; i < a.length; i++){
//     console.log(`Число ${a[i]}`);
// }

// 5
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(let i = 0; i < a.length; i++){
//     if(a[i] % 2 == 0)
//         console.log(`${a[i]}`);
// }

// 6
// const a = [1, 'hi', 2, 'hello', 3];
// for(let i = 0; i < a.length; i++){
//     if(!isNaN(a[i])){
//         console.log(`Число ${a[i]}`);
//     }
//     else{
//         console.log(`Строка ${a[i]}`);
//     }
// }


// 7
// const a = '111111111';
// let s = 0
// for(let i=0; i < a.length; i++){
//     s += Number(a[i])
// }
// console.log(s)

// 8
// const a = [1, 2, 3, 4, 5];
// let s = 1
// for(let i=0; i < a.length; i++){
//     s *= a[i]
// }
// console.log(s)


// 9
// const n = 20;
// for(let i = 1; i <= n; i++){
//     console.log(i);
// }

// 10
// const a = [10, 20, 30, 40, 50];
// const n = 30;
// for(let i = 0; i < a.length; i++){
//     if(a[i] == n)
//         console.log('Число найдено');
// }

// 11
// const a = [5, 12, 7, 9, 14]
// let max = a[0]
// for(let i = 0; i < a.length; i++){
//     if(a[i] > max)
//         max = a[i];
// }
// console.log(max)


// 12
// const n = 9;
// for(i = 1; i < n; i++){
//     const rand = Math.floor(Math.random() * 100);
//     console.log(rand);
// }

// 13
// const str = 'hello'
// let result = ''
// const n = 3;
// for(i = 1; i <= n; i++){
//     result+=str;
// }
// console.log(result)

// 14
// const n = 7
// let result = ''
// for(let i = 1; i <= n; i++){
//     result += '**********\n'
// }
// console.log(result);

//15
const str = "hello world";
let res = str.split(' ')
let result = ''
for(i = 0; i < res.length; i++){
    if(res[i][0] == res[i][0].toLowerCase())
        result += res[i][0].toUpperCase() + res[i].slice(1) + ' ';
}
console.log(result)
