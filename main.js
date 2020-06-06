// 繰り返しを学ぶ

// whileのループ処理
// let i = 0;
// while(i <= 3) {
//     document.write(i + "<br>");
//     // インクリメントがないと無限ループ
//     i++;
// }

//forのループ処理
// for(let i = 0; i <= 10; i++) {
//     document.write(i + "<br>");
// }

//for文を使って九九の答えを出力してみる。
for(let i = 1; i <= 9; i++) {
    for(let j = 1; j <= 9; j++) {
        document.write(i + "x" + j + "=" + i * j + "<br>");
    }
}