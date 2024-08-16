// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');


// 除外したい数字を入力させる
let userInput = prompt('除外したい数字をカンマで区切って入力してください (例: 12,34,56)');
let excludeNumbers = userInput ? userInput.split(',').map(Number) : [];

// ぞろ目の数字を配列で定義
let doubleDigits = [];
for (let i = 0; i <= 9; i++) {
  doubleDigits.push(i * 11); // 00, 11, 22, ..., 99
}

// 00から99までの数字を列挙
let result = [];
for (let i = 0; i < 100; i++) {
  // ぞろ目の数字またはユーザーが入力した数字を除外
  if (!doubleDigits.includes(i) && !excludeNumbers.includes(i)) {
    result.push(i.toString().padStart(2, '0')); // 2桁にフォーマット
  }
}

// 結果を表示
alert('結果: ' + result.join(', '));