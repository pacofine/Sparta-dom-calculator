document.addEventListener("DOMContentLoaded", function () {

    var btn0 = document.getElementById('calc-0');
    var btn1 = document.getElementById('calc-1');
    var btn2 = document.getElementById('calc-2');
    var btn3 = document.getElementById('calc-3');
    var btn4 = document.getElementById('calc-4');
    var btn5 = document.getElementById('calc-5');
    var btn6 = document.getElementById('calc-6');
    var btn7 = document.getElementById('calc-7');
    var btn8 = document.getElementById('calc-8');
    var btn9 = document.getElementById('calc-9');

    var btnEqu = document.getElementById('key-0')
    var btnDec = document.getElementById('key-1')
    var btnDiv = document.getElementById('key-2')
    var btnMult = document.getElementById('key-3')
    var btnSub = document.getElementById('key-4')
    var btnAdd = document.getElementById('key-5')
    var btnPow2 = document.getElementById('key-6')
    var btnClr = document.getElementById('key-7')

    var displayVal = '0';
    var pendingVal;
    var evalStringArray = [];

    var calcNumBts = document.getElementsByClassName('calc-btn-num')
    var calcNumBts = document.getElementsByClassName('calc-btn-opp')

    var updateDisplayVal = (clickObj) => {
        btnText = clickObj.target.innerText;

        if displayVal === '0')
         displayVal == '';

         displayVal += btnText;
            dispValElement.innerText = displayVal;
    }

    for (let i = 0; i < calcNumBts.length; i++) {
        calcNumBts[i].addEventListener('click', updateDisplayVal. false)
    }

})