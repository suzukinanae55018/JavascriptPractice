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

    // 乱数生成のためのseedをランダムに設定
    const seed = Math.floor(Math.random() * 1000000);

    // 乱数生成関数 (seedを使ったランダム生成)
    function seededRandom(seed) {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    // Fisher-Yatesシャッフルアルゴリズム (seededRandomを使用)
    function shuffle(array, seed) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(seed + i) * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function getRandomNumbers(count, max) {
        let numbers = Array.from({ length: max }, (_, i) => i.toString().padStart(2, '0'));
        numbers = shuffle(numbers, seed);
        return numbers.slice(0, count);
    }

    function runGacha() {
        attempts++;
        if (attempts > maxAttempts) {
            alert('最大試行回数に達しました。');
            return;
        }

        let numList = shuffle(Array.from({ length: 100 }, (_, i) => i.toString().padStart(2, '0')), seed);
        let A = numList.splice(0, 1)[0];
        let B = numList.splice(0, 1)[0];

        let tenNumbers = getRandomNumbers(10, 100);

        let thirdNum = Math.floor(Math.random() * 100).toString().padStart(2, '0');

        let result;
        if (thirdNum === A) {
            result = `<span class="red">Aが当たりました (${A})</span>`;
        } else if (thirdNum === B) {
            result = `<span class="blue">Bが当たりました (${B})</span>`;
        } else if (tenNumbers.includes(thirdNum)) {
            result = `<span class="yellow">Cが当たりました (${thirdNum})</span>`;
        } else {
            result = `はずれ (${thirdNum})`;
        }

        let evaluation = `A: ${A}, B: ${B}, thirdNum: ${thirdNum}, 10個の数字: ${tenNumbers.join(', ')}`;
        let history = document.getElementById('history');

        let newEntry = document.createElement('div');
        newEntry.className = 'history-entry';
        newEntry.innerHTML = `試行回数 ${attempts}回目: ${result}<br>${evaluation}`;
        history.appendChild(newEntry);

        if (thirdNum === A || thirdNum === B) {
            return;
        }

        setTimeout(runGacha, 100);
    }

    runGacha();
});

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