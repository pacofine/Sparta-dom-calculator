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
    var displayValElement = document.getElementById('calc-display-val') // var fot the calculator dispaly


    var displayVal = '0'; //the display automatically displays zero
    var pendingVal;
    var evalStringArray = [];

    //array of the buttons containing numbers 
    var calcNumBtns = document.getElementsByClassName('calc-btn-num')
    //array of the buttons containing opperators
    var calcOopBtns = document.getElementsByClassName('calc-btn-opp')

    //updateDisplayVal is a function
    var updateDisplayVal = (clickObj) => {  //clickobj = whenever i click a calcNumBtns its going to call updateDisplayVal and is outomatically going to pass the click event to the updateDisplayVal funtion
       var btnText = clickObj.target.innerText;

       
        if(displayVal === '0'); 
         displayVal == ''; // this clears the display so that when we press a button the value does not add to the current zero

         displayVal += btnText;
          displayValElement.innerText = displayVal; //this should allow me to type into my display
    }
    // a loop through the calcNumBtns array to give each item/element/button a click function
    for (let i = 0; i < calcNumBtns.length; i++) {
        calcNumBtns[i].addEventListener('click', updateDisplayVal)
    }

})