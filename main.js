// ==========================================
// ۱. بخش سکه، چیت‌کد و خریدها (حافظه‌دار)
// ==========================================
let money = parseInt(localStorage.getItem("userMoney")) || 0;
let moneyPerClick = parseInt(localStorage.getItem("userMoneyPerClick")) || 1; 
let upgradeCost = parseInt(localStorage.getItem("userUpgradeCost")) || 50; 
let autoClickLevel = parseInt(localStorage.getItem("userAutoClickLevel")) || 0;
let autoClickCost = parseInt(localStorage.getItem("userAutoClickCost")) || 100;

let code = 0;

// بارگذاری اولیه داده‌ها پس از باز شدن صفحه
window.addEventListener("DOMContentLoaded", function() {
    updateMoneyDisplay();
    updateUpgradeButton();
    updateAutoClickButton();
    updateScoreboardDisplay();

    // حلقه کلیک‌کننده خودکار (هر ۱ ثانیه)
    setInterval(function() {
        if (autoClickLevel > 0) {
            money += autoClickLevel;
            saveCoinData();
            updateMoneyDisplay();
        }
    }, 1000);
});

function saveCoinData() {
    localStorage.setItem("userMoney", money);
    localStorage.setItem("userMoneyPerClick", moneyPerClick);
    localStorage.setItem("userUpgradeCost", upgradeCost);
    localStorage.setItem("userAutoClickLevel", autoClickLevel);
    localStorage.setItem("userAutoClickCost", autoClickCost);
}
function increaseMoney() {
    money += moneyPerClick;
    saveCoinData();
    updateMoneyDisplay(); 
}

function buyUpgrade() {
    if (moneyPerClick >= 20) {
        alert("شما به حداکثر سطح ارتقا (20 سکه در هر کلیک) رسیده‌اید!");
        return;
    };
    if (money >= upgradeCost) {
        money -= upgradeCost;
        moneyPerClick++;
        upgradeCost = moneyPerClick * 50;
        
        saveCoinData();
        updateMoneyDisplay();
        updateUpgradeButton();
        updateAutoClickButton();
    } else {
        alert("پول کافی ندارید! برای ارتقا به " + upgradeCost + " سکه نیاز دارید.");
    }
}
// تابع خرید ربات کلیک‌کننده خودکار
function buyAutoClicker() {
    if (autoClickLevel >=200) {
        alert("شما به حداکثر سطح ارتقا (۲۰۰ سکه در ثانیه) رسیده‌اید!");
        return;
    };
    if (money >= autoClickCost) {
        money -= autoClickCost;
        autoClickLevel++;
        autoClickCost += 100;
        
        saveCoinData();
        updateMoneyDisplay();
        updateAutoClickButton();
    } else {
        alert("پول کافی ندارید! نیاز به " + autoClickCost + " سکه دارید.");
    }
}

function resetMoney() {
    let confirmReset = confirm("مطمئنی میخوای پولت صفر بشه؟");
    if (confirmReset) {
        money = 0;
        moneyPerClick = 1;
        upgradeCost = 50;
        autoClickLevel = 0;
        autoClickCost = 100;
        
        localStorage.clear();

        updateMoneyDisplay();
        updateUpgradeButton();
        updateAutoClickButton();
        code++;
    } else {
        code += 5;
        code *= 1.5;
    }
}

function updateMoneyDisplay() {
    let moneyElem = document.getElementById("money");
    if (moneyElem) moneyElem.innerText = money; 
}

function updateUpgradeButton() {
    let btn = document.getElementById("btn-upgrade");
    if (btn) {
        if (moneyPerClick >= 20) {
            btn.innerText = "ارتقا کامل شد (20 سکه در هر کلیک)";
            btn.disabled = true;
            btn.style.opacity = "0.6";
        } else {
            btn.innerText = "ارتقا به " + (moneyPerClick + 1) + " سکه (هزینه: " + upgradeCost + "سکه)";
            btn.disabled = false;
            btn.style.opacity = "1";
        }
    }
}

function updateAutoClickButton() {
    let btn = document.getElementById("btn-autoclick");
    if (btn) {
        if (autoClickLevel >= 200) {
            btn.innerText = "ارتقا کامل شد (200 سکه در ثانیه)";
            btn.disabled = true;
            btn.style.opacity = "0.6";
        } else {
          btn.innerText = "ربات کلیک‌کننده (سطح " + autoClickLevel + ") - هزینه: " + autoClickCost;
            btn.disabled = false;
            btn.style.opacity = "1";
       };
   };
}

function cheat() {
    if (code === 39.625) {
        money = 1*10**309;
        saveCoinData();
        updateMoneyDisplay();
        alert("Cheat activated!");
    }
    code = 0;
}


// ==========================================
// ۲. بخش بازی دوز (شامل جدول بردهاب ذخیره‌شده)
// ==========================================
let turn = "O"; 
let board = ["", "", "", "", "", "", "", "", ""];
let isGameOver = false;

let scoreX = parseInt(localStorage.getItem("scoreX")) || 0;
let scoreO = parseInt(localStorage.getItem("scoreO")) || 0;
let scoreM = parseInt(localStorage.getItem("scoreM")) || 0;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function play(cellId, index) {
    if (isGameOver || board[index] !== "") return; 

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
            if (board[a] === "X") scoreX++; else scoreO++;
            
            localStorage.setItem("scoreX", scoreX);
            localStorage.setItem("scoreO", scoreO);
            localStorage.setItem("scoreM", scoreM);
            updateScoreboardDisplay();

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
        scoreM++;
        updateScoreboardDisplay();
    }
}

function updateScoreboardDisplay() {
    let elemX = document.getElementById("score-x");
    let elemO = document.getElementById("score-o");
    let elemM = document.getElementById("mosavi");
    if (elemX) elemX.innerText = scoreX;
    if (elemO) elemO.innerText = scoreO;
    if (elemM) elemM.innerText = scoreM;
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
function resetScoreboard() {
    let confirmResetScoreboard = confirm("امتیازات ریست شوند؟");
    if (confirmResetScoreboard) {
        scoreO = 0;
        scoreX = 0;
        scoreM = 0;
        updateScoreboardDisplay();
    };
}

// ==========================================
// ۳. بخش آهنگ‌ها، تغییر عنوان و کدهای سفارشی
// ==========================================
function checkPassword() {
    let inputPass = document.getElementById("song-pass").value;
    if (inputPass === "music") {
        document.getElementById("song-list").style.display = "block";
        document.getElementById("pass-container").style.display = "none";
    } else {
        alert("رمز عبور اشتباه است!");
    }
}

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
        }
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
        }
    }
}

function changetitle() {
    let inputTitle = document.getElementById("textinput").value;
    if (money >= 500) {
        money -= 500;
        saveCoinData();
        updateMoneyDisplay();
        alert("نام سایت با موفقیت تغییر یافت.");
        document.title = inputTitle;
    } else {
        alert("سکه کافی ندارید!");
    }
}

function runcode() {
    let inputcode = document.getElementById("codeinput").value;
    if (money >= 1000) {
        money -= 1000;
        saveCoinData();
        updateMoneyDisplay();
        let confirmCode = confirm("آیا کدهای سایت تغییر کند؟");
        if (confirmCode) {
            document.write('<input style="padding: 8px; font-size: 16px; text-align: left; direction: ltr; position: fixed; bottom: 0; left: 0; width: 90%;" type="text" id="codeinput" placeholder="Enter codes:">');
            document.write('<button style="padding: 8px; font-size: 16px; text-align: center; direction: ltr; position: fixed; bottom: 0; right: 0; width: 10%;" onclick="runcode2()">Run</button>');
            document.write(inputcode);
        }
    } else {
        alert("سکه کافی ندارید!");
    }
}

function runcode2() {
    let inputcode = document.getElementById("codeinput").value;
    document.write(inputcode);
}

let dorn = "day";
function dsyclen() {
    joon("style");
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
    } else {
        dorn = "day";
        document.getElementById("body").classList.remove("body-dark");
        document.getElementById("tic-tac-toe-table").classList.remove("tic-tac-toe-table-dark");
        document.getElementById("switch").classList.remove("switch-dark");
        document.getElementById("pass-container").classList.remove("switch-dark");
        document.getElementById("d-n-sycle").classList.remove("d-n-sycle-dark");
        document.getElementById("info").classList.remove("table-info-dark");
        document.getElementById("enteghad").classList.remove("enteghad-dark");
        document.getElementById("us").classList.remove("us-dark");
    }
}
// تابع پخش صدای افکت
function playSound(fileName) {
    let audio = new Audio(fileName);
    audio.play().catch(() => {}); // جلوگیری از ارور مرورگر
}

// تابع افزایش پول همراه با صدا و پارتیکل
function increaseMoney(event) {
    money += moneyPerClick;
    saveCoinData();
    updateMoneyDisplay(); 

    // ۱. پخش صدای کلیک (فایل click.m4a رو کنار HTML بذار)
    playSound("click.m4a");

    // ۲. تولید پارتیکل و متن شناور دقیقاً زیر ماوس/انگشت
    if (event) {
        createCoinParticles(event);
    }
}

// تابع ساخت پارتیکل‌های سه بعدی و متفرق شونده
function createCoinParticles(e) {
    // ایجاد متن شناور (+۱ یا +۲)
    let floatText = document.createElement("div");
    floatText.className = "floating-text";
    floatText.innerText = "+" + moneyPerClick;
    floatText.style.left = (e.clientX - 10) + "px";
    floatText.style.top = (e.clientY - 25) + "px";
    document.body.appendChild(floatText);

    setTimeout(() => floatText.remove(), 700);

    // ایجاد ۱۰ جرقه‌ی طلایی که به اطراف پرتاب می‌شن
    for (let i = 0; i < 10; i++) {
        let particle = document.createElement("div");
        particle.className = "coin-particle";
        particle.style.left = e.clientX + "px";
        particle.style.top = e.clientY + "px";

        // محاسبه زاویه و جهت پرتاب
        let angle = Math.random() * Math.PI * 2;
        let distance = 30 + Math.random() * 60;
        let x = Math.cos(angle) * distance;
        let y = Math.sin(angle) * distance;

        particle.style.setProperty('--x', x + 'px');
        particle.style.setProperty('--y', y + 'px');

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 600);
    }
}