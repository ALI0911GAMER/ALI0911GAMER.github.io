let pool = 0; 
function increasePool() {
    pool++;
    document.getElementById("pool").innerText = pool; 
}
function resetPool() {
    pool = 0;
    document.getElementById("pool").innerText = pool; 
}
let nobat = 0;
function change() {
    nobat++;
    
}
if (nobat == 2) {
    nobat = 0;
}
if (nobat == 0) {
    function _1() {
        document.getElementById("1").innerText = "o";
    };
    function _2() {
        document.getElementById("2").innerText = "o";
    };
    function _3() {
        document.getElementById("3").innerText = "o";
    };
    function _4() {
        document.getElementById("4").innerText = "o";
    };
    function _5() {
        document.getElementById("5").innerText = "o";
    };
    function _6() {
        document.getElementById("6").innerText = "o";
    };
    function _7() {
        document.getElementById("7").innerText = "o";
    };
    function _8() {
        document.getElementById("8").innerText = "o";
    };
    function _9() {
        document.getElementById("9").innerText = "o";
    };
} else {
    function x1() {
        document.getElementById("1").innerText = "x";
    };
    function x2() {
        document.getElementById("2").innerText = "x";
    };
    function x3() {
        document.getElementById("3").innerText = "x";
    };
    function x4() {
        document.getElementById("4").innerText = "x";
    };
    function x5() {
        document.getElementById("5").innerText = "x";
    };
    function x6() {
        document.getElementById("6").innerText = "x";
    };
    function x7() {
        document.getElementById("7").innerText = "x";
    };
    function x8() {
        document.getElementById("8").innerText = "x";
    };
    function x9() {
        document.getElementById("9").innerText = "x";
    };
}
function joon() {
    document.getElementById("table").innerHTML = "<span class='no'> ببم جان شماره چه میخوای؟ </span>"
}
function pass_song() {
    document.getElementById("song").innerHTML = "<input type='password' name='passong' value='رمز' />"
}