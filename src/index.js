// const let

// var var1 = "変数";
// console.log(var1);

// let var2 = "let変数";
// console.log(var2);

// var2 = "let変数を上書き";
// console.log(var2);

// const var3 = "const変数";
// console.log(var3);

// const var4 = {
//   name: "matayuuu",
//   age: 27
// };
// var4.name = "matayuuu415"
// console.log(var4);

//テンプレート文字列
// const name = "またゆう";
// const age = 27;
// const massage = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massage);

//アロー関数
// function func1(str){
//   return str
// };
//console.log(func1);
// const funt1 = function (str){
//   return str
// }
// console.log(funt1("aaa"));

// const func2 = (str) => {
//   return str
// };
// console.log(func2("func2"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

//分割代入(オブジェクト編)　※配列も可能
// const myprofile = {
//   name: "matayuuu",
//   age: 27
// };
// console.log(`私の名前は${myprofile.name}です。年齢は${myprofile.age}です。`);

// const { name, age } = myprofile;
// console.log(`私の名前は${name}です。年齢は${age}です。`);

//デフォルト値、引数など
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello()
// sayHello("またゆう")

//スプレット構文
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//map関数
//const nameArr = ["田中", "佐藤", "又吉"];
// const namenameArr = [];
// for(let index=0 ; index<nameArr.length ; index++){
//   namenameArr.push(nameArr[index]);
// }
// console.log(namenameArr);

// const nameArr2 = nameArr.map((name) => {
//   return console.log(name);
// })

//nameArr.map((name) => console.log(name));
//何番目？を使うときは、indexを用いる
//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

//又吉以外に「〜さん」をつける
// const nameSonkeigoArr = nameArr.map((name) => {
//   if(name === "又吉"){
//     return name;
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(nameSonkeigoArr);

//fillter関数
// const numArr = [1, 2, 3, 4, 5];
// const numKisuuAree = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(numKisuuAree);

//参考演算し
//ある条件　？　条件がtrue ：　　false;
