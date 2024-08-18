// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');
// パターン①ソシャゲのガチャ風A,Bそれぞれ当たる確率は１００分の１
document.getElementById('startButton').addEventListener('click', function() {
    let attempts = 0;
    const maxAttempts = 200;

    function runGacha() {
        attempts++;
        if (attempts > maxAttempts) {
            alert('最大試行回数に達しました。');
            return;
        }

        // 00から99の範囲で重複しない2つのランダムな数字を生成
        let numList = Array.from({ length: 100 }, (_, i) => i.toString().padStart(2, '0'));
        let A = numList.splice(Math.floor(Math.random() * numList.length), 1)[0];
        let B = numList.splice(Math.floor(Math.random() * numList.length), 1)[0];

        // 3つ目のランダムな数字を生成
        let thirdNum = Math.floor(Math.random() * 100).toString().padStart(2, '0');

        // 判定結果
        let result;
        if (thirdNum === A) {
            result = `<span class="red">Aが当たりました (${A})</span>`;
        } else if (thirdNum === B) {
            result = `<span class="blue">Bが当たりました (${B})</span>`;
        } else {
            result = `はずれ (${thirdNum})`;
        }

        // 結果と各数字の表示
        let evaluation = `A: ${A}, B: ${B}, thirdNum: ${thirdNum}`;
        let history = document.getElementById('history');

        // 実行履歴を表示するための新しい要素を作成
        let newEntry = document.createElement('div');
        newEntry.className = 'history-entry';
        newEntry.innerHTML = `試行回数 ${attempts}回目: ${result}<br>${evaluation}`;
        history.appendChild(newEntry);

        // AまたはBが当たったら停止
        if (thirdNum === A || thirdNum === B) {
            return;
        }

        // AまたはBが当たっていない場合、次のガチャを実行
        setTimeout(runGacha, 100); // 100msの間隔で実行
    }

    // ガチャを開始
    runGacha();
});

// 初回の履歴表示用の要素を追加
document.body.insertAdjacentHTML('beforeend', '<div id="history"><h3>実行履歴</h3></div>');
// パターン②
// 除外したい数字を入力させる

// let userInput = prompt('除外したい数字をカンマで区切って入力してください (例: 12,34,56)');
// let excludeNumbers = userInput ? userInput.split(',').map(Number) : [];

// // ぞろ目の数字を配列で定義
// let doubleDigits = [];
// for (let i = 0; i <= 9; i++) {
//   doubleDigits.push(i * 11); // 00, 11, 22, ..., 99
// }

// // 00から99までの数字を列挙
// let result = [];
// for (let i = 0; i < 100; i++) {
//   // ぞろ目の数字またはユーザーが入力した数字を除外
//   if (!doubleDigits.includes(i) && !excludeNumbers.includes(i)) {
//     result.push(i.toString().padStart(2, '0')); // 2桁にフォーマット
//   }
// }

// // 結果を表示
// alert('結果: ' + result.join(', '));