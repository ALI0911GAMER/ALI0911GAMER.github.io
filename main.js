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
let code = 0
function resetMoney() {
    let confirmReset = confirm("مطمئنی میخوای پولت صفر بشه؟");
    if (confirmReset) {
        money = 0;
        moneyPerClick = 1;
        upgradeCost = 50;
        updateMoneyDisplay();
        updateUpgradeButton();
        code++;
    }else {
        code += 5;
        code *= 1.5;
    };
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
            btn.innerText = "ارتقا به " + (moneyPerClick + 1) + " سکه (هزینه: " + upgradeCost + "سکه)";
            btn.disabled = false;
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
        }
    }
}
function cheat() {
    /* cheat hint:
          7.5
          18.75
          19.75
          20.75
          38.625
          39.625 */
    if (code === 39.625) {
        money = 999999999999;
        updateMoneyDisplay();
        alert("Cheat actived!");
    };
    code = 0;
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
    } else {
        img.src = "x.png";
        img.alt = "x";
        cell.appendChild(img);
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
    document.getElementById("reset-ttt").disabled = true;
}
// ==========================================
// ۳. بخش آهنگ‌ها با رمز عبور
// ==========================================
function checkPassword() {
    let inputPass = document.getElementById("song-pass").value;
    if (inputPass === "music"/*رمز عبور*/) {
        document.getElementById("song-list").style.display = "block";
        document.getElementById("pass-container").style.display = "none";
    } else {
        alert("رمز عبور اشتباه است!");
    };
}
// ==========================================
// بخش کپی شماره تلفن
// ==========================================
function joon(way) {            
    let number = document.getElementById("number");
    if (way === "tanz") {
        number.innerText = "سانسور";
        number.style = "user-select: none; padding: 5px 30%; padding-bottom: 8px; font-size: 20px;";
        if (dorn === "day") {
            number.style.backgroundColor = "#000a";
            number.style.color = "whitesmoke";
        } else {
            number.style.backgroundColor = "#ddda";
            number.style.color = "#111";
        };
    Swal.fire({
        title: 'ببم جان شماره چه میخوای؟',
        imageUrl: 'https://sedatoseda.com/wp-content/uploads/Rock-meme.jpg',
        imageWidth: 500,
        imageHeight: 200,
        imageAlt: 'راک در تعجب',
        confirmButtonText: 'بوتوچه'
        });
    } else if (way === "style" && number.textContent === "سانسور") {
        if (dorn === "day") {
            number.style.backgroundColor = "#ddda";
            number.style.color = "#111";
        } else {
            number.style.backgroundColor = "#000a";
            number.style.color = "whitesmoke";
        };
    };
}
function changetitle() {
    let inputTitle = document.getElementById("textinput").value;
    if (money >= 500) {
        money -= 500;
        updateMoneyDisplay();
        alert("نام سایت با موفقیت تغییر یافت.");
        document.title = inputTitle;
    }else {
        alert("سکه کافی ندارید!");
    };
}
function runcode() {
    let inputcode = document.getElementById("codeinput").value;
    if (money >= 1000) {
        money -= 1000;
        updateMoneyDisplay();
        let confirmCode = confirm("آیا کد های سایت تغییر کند؟");
        if (confirmCode) {
            document.write('<input style="padding: 8px; font-size: 16px; text-align: left; direction: ltr; position: fixed; bottom: 0; left: 0; width: 90%;" type="text" id="codeinput" placeholder="Enter codes:">');
            document.write('<button style="padding: 8px; font-size: 16px; text-align: center; direction: ltr; position: fixed; bottom: 0; right: 0; width: 10%;" onclick="runcode2()">Run</button>');
            document.write(inputcode);
        };
    }else {
        alert("سکه کافی ندارید!");
    };
}
function runcode2() {
    let inputcode = document.getElementById("codeinput").value;
    document.write(inputcode);
}
let dorn = "day"
function dsyclen() {
    joon("style")
    if (dorn === "day") {
        dorn = "night";
        document.getElementById("body").classList.add("body-dark");
        document.getElementById("tic-tac-toe-table").classList.add("tic-tac-toe-table-dark");
        document.getElementById("switch").classList.add("switch-dark");
        document.getElementById("pass-container").classList.add("switch-dark");
        document.getElementById("d-n-sycle").classList.add("d-n-sycle-dark");
        document.getElementById("info").classList.add("table-info-dark");
        document.getElementById("enteghad").classList.add("enteghad-dark");
        document.getElementById("us").classList.add("us-dark");
    }else {
        dorn = "day";
        document.getElementById("body").classList.remove("body-dark");
        document.getElementById("tic-tac-toe-table").classList.remove("tic-tac-toe-table-dark");
        document.getElementById("switch").classList.remove("switch-dark");
        document.getElementById("pass-container").classList.remove("switch-dark");
        document.getElementById("d-n-sycle").classList.remove("d-n-sycle-dark");
        document.getElementById("info").classList.remove("table-info-dark");
        document.getElementById("enteghad").classList.remove("enteghad-dark");
        document.getElementById("us").classList.remove("us-dark");;
    };
}