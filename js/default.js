var number = Math.floor(Math.random()*3);

var answer = parseInt(window.prompt('数あてゲーム。０～２の数字を入力'));

var message;
if(answer === number){
message = '正解！おめでとう！';
}else if (answer < number){
message = '不正解、もっと大きいです';
}else if (number < answer){
message = '不正解、もっと小さいです';
}else{
message = '０～３の数字を入力してください';
}

document.getElementById('choice').textContent = message;
