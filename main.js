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
// const str = "hello world";
// let res = str.split(' ')
// let result = ''
// for(i = 0; i < res.length; i++){
//     if(res[i][0] == res[i][0].toLowerCase())
//         result += res[i][0].toUpperCase() + res[i].slice(1) + ' ';
// }
// console.log(result)


// 16
// for(let i = 0; i < 101; i++){
//     if(i % 7 == 0)
//         continue;
//     console.log(i)
// }


// 17
// for(let i = 1; i < 51; i++){
//     if(i % 2 == 0 & i % 3 == 0)
//         continue;
//     console.log(i)
// }

// 18 
// for(let i = 1; i < 101; i++){
//     console.log(i)
//     if(i % 7 == 0 & i % 9 == 0)
//         break;
// }


// 19
// for(let i = 1; i < 101; i++){
//     console.log(i)
//     if(i % 4 == 0 & i % 8 != 0)
//         continue;
//     else if(i % 5 == 0 & i % 10 == 0)
//         break;
// }

// 20
// const a = [5, "hello", 15, "world", 25, 3, "test"];
// for(let i = 0; i < a.length; i++){
//     if(!isNaN(a[i]) & a[i] < 10)
//         console.log("Маленькое число")
    
//     else if(!isNaN(a[i]) & a[i] >= 10 & a[i] < 20)
//         console.log("Среднее число");
    
//     else if (!isNaN(a[i]) & a[i] >= 20)
//         console.log("Большое число");
//     else
//         continue;
// }

// 21
// const a = [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4];
// const n = 5
// let count = 0;
// switch(n){
//     case 1:
//         for(let i = 0; i<a.length; i++){
//             if(a[i] == 1)
//                 count++;
//         }
//         console.log(count);
//         break;
//     case 2:
//         for(let i = 0; i<a.length; i++){
//             if(a[i] == 2)
//                 count++;
//         }
//         console.log(count);
//         break; 
//     case 3:
//         for(let i = 0; i<a.length; i++){
//             if(a[i] == 3)
//                 count++;
//         }
//         console.log(count);
//         break;
//     case 4:
//         for(let i = 0; i < a.length; i++){
//             if(a[i] == 4)
//                 count++;
//         }
//         console.log(count);
//         break;
//     case 5:
//         for(let i = 0; i < a.length; i++){
//             if(a[i] == 5)
//                 count++;
//         }
//         console.log(count)
//         break;
// }

// 22
// const a = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// const n = "Saturday"
// switch(n){
//     case "Monday":
//         console.log('будний день');
//         break;
//     case "Tuesday":
//         console.log('будний день');
//         break; 
//     case "Wednesday":
//         console.log('будний день');
//         break;
//     case "Thursday":
//         console.log('будний день');
//         break;
//     case "Friday":
//         console.log('будний день')
//         break;
//     case "Saturday":
//         console.log('выходной день')
//         break;
//     case "Sunday":
//         console.log('выходной день')
//         break;
// }

// 23
// const a = [2, 4, 6, 8, 10];
// let chet = 0;
// let nechet = 0;
// for(let i = 0; i < a.length; i++){
//     if(a[i] % 2 == 0)
//         chet++;
//     else
//         nechet++;
// }
// console.log(`Четные: ${chet}, Нечетные: ${nechet}`)

// 24
// const a = "Hello World!";
// let count = 0;
// for(let i = 0; i < a.length; i++){
//     if(a[i] == ' ')
//         continue;
//     else
//         count++;
// }
// console.log(`Количество символов: ${count}`)

// 25
// const a = [1, 3, 6, 8, 9, 12];
// let res = 0;
// for(let i = 0; i < a.length; i++){
//     if(a[i] % 3 == 0)
//         res+=a[i];
// }
// console.log(`Сумма чисел, кратных 3: ${res}`)


// 26
// const glas = 'aeiou'
// const a = "Hello!";
// let count = 0;
// for(let i = 0; i < a.length; i++){
//     if(glas.includes(a[i].toLowerCase())){
//         count++;
//     }
// }
// console.log(`Количество гласных: ${count}`)


// 27
// const sogl = 'bcdfghjklmnpqrstvwxyz';
// const a = "AEIOU";
// let count = 0;
// for(let i = 0; i < a.length; i++){
//     if(sogl.includes(a[i].toLowerCase())){
//         count++;
//     }
// }
// console.log(`Количество согласных:${count}`)

// 28
// const a = [1, -2, 3, -4, 5, -6];
// let res = 0;
// for(let i = 0; i < a.length; i++){
//     if(a[i] < 0)
//         continue
//     else
//         res += a[i]
// }
// console.log(`Сумма положительных чисел: ${res}`)