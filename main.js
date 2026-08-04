// ==========================================
// بخش بازی سکه (Coin Clicker)
// ==========================================
let money = 0; 
let moneyPerClick = 1; // مقدار اولیه پول با هر کلیک
let upgradeCost = 50;  // هزینه اولیه ارتقا
function increaseMoney() {
    money += moneyPerClick;
    updateMoneyDisplay(); 
}
function buyUpgrade() {
    if (moneyPerClick >= 10) {
        alert("شما به حداکثر سطح ارتقا (۱۰ سکه در هر کلیک) رسیده‌اید!");
        return;
    }

    if (money >= upgradeCost) {
        money -= upgradeCost;
        moneyPerClick++;
        // افزایش هزینه ارتقا برای مرحله بعد
        upgradeCost = moneyPerClick * 50;
        
        updateMoneyDisplay();
        updateUpgradeButton();
    } else {
        alert("پول کافی ندارید! برای ارتقا به " + upgradeCost + " سکه نیاز دارید.");
    }
}
function resetMoney() {
    let confirmReset = confirm("مطمئنی میخوای پولت صفر بشه؟");
    if (confirmReset) {
        money = 0;
        moneyPerClick = 1;
        upgradeCost = 50;
        updateMoneyDisplay();
        updateUpgradeButton();
    }
}
function updateMoneyDisplay() {
    document.getElementById("money").innerText = money; 
}
function updateUpgradeButton() {
    let btn = document.getElementById("btn-upgrade");
    if (btn) {
        if (moneyPerClick >= 10) {
            btn.innerText = "ارتقا کامل شد (۱۰ سکه در هر کلیک)";
            btn.disabled = true;
            btn.style.opacity = "0.6";
            btn.style.cursor = "not-allowed";
        } else {
            btn.innerText = "ارتقا به " + (moneyPerClick + 1) + " سکه (هزینه: " + upgradeCost + ")";
            btn.disabled = false; // فعال‌سازی مجدد دکمه
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
        }
    }
}

// ==========================================
// ۲. بخش بازی دوز (Tic Tac Toe)
// ==========================================
let turn = "O"; 
let board = ["", "", "", "", "", "", "", "", ""];
let isGameOver = false;
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function play(cellId, index) {
    if (isGameOver || board[index] !== "") {
        return; 
    }

    let cell = document.getElementById(cellId);
    board[index] = turn;
    let img = document.createElement("img");
    img.style.width = "50px";

    if (turn === "O") {
        img.src = "o.png";
        img.alt = "o";
        cell.appendChild(img);
        cell.className = "o";
    } else {
        img.src = "x.png";
        img.alt = "x";
        cell.appendChild(img);
        cell.className = "x";
    }
    checkGameStatus();
    if (!isGameOver) {
        turn = (turn === "O") ? "X" : "O";
        updateTurnIndicator();
    }
}
function updateTurnIndicator() {
    let iconO = document.getElementById("icon-o");
    let iconX = document.getElementById("icon-x");

    if (turn === "O") {
        iconO.classList.add("active-turn");
        iconX.classList.remove("active-turn");
    } else {
        iconX.classList.add("active-turn");
        iconO.classList.remove("active-turn");
    }
}
function checkGameStatus() {
    let hasWinner = false;

    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
            hasWinner = true;
            alert("بازیکن " + board[a] + " برنده شد!");
            break;
        }
    }
    if (hasWinner) {
        isGameOver = true;
        document.getElementById("reset-ttt").disabled = false;
    } else if (!board.includes("")) {
        isGameOver = true;
        alert("بازی مساوی شد!");
        document.getElementById("reset-ttt").disabled = false;
    }
}
function resetTTT() {
    board = ["", "", "", "", "", "", "", "", ""];
    isGameOver = false;
    turn = "O";
    for (let i = 1; i <= 9; i++) {
        document.getElementById("c" + i).innerHTML = "";
    }

    updateTurnIndicator();
    document.getElementById("reset-ttt").disabled = true; // غیرفعال کردن مجدد دکمه ریست
}
// ==========================================
// ۳. بخش آهنگ‌ها با رمز عبور
// ==========================================
function checkPassword() {
    let inputPass = document.getElementById("song-pass").value;
    if (inputPass === "jafar26"/*رمز عبور*/) {
        document.getElementById("song-list").style.display = "block";
        document.getElementById("pass-container").style.display = "none";
    } else {
        alert("رمز عبور اشتباه است!");
    }
}
function joon() {
    Swal.fire({
    title: 'ببم جان شماره چه میخوای؟',
    imageUrl: 'https://sedatoseda.com/wp-content/uploads/Rock-meme.jpg',
    imageWidth: 500,
    imageHeight: 200,
    imageAlt: 'راک در تعجب',
    confirmButtonText: 'بوتوچه'
    });
    document.getElementById("table").innerHTML = "<span class='no'> ببم جان شماره چه میخوای؟ </span>";
}