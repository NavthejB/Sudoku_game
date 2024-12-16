
let sudokuStartingValuesArray = [
    [
        [null, 8,6,5,1,3,null, null, null],
        [5,7,4,null,8,9,3,null,null],
        [null, 1,2, null, 7,6, null, 5,9],
        [null, null, 2, null, null, null, 8, 3, null],
        [null, null, null, null, 2,8,6,4,null],
        [5,null, null, null, 6, null, null, null, null],
        [null, 9, 8, null, null, null, 2, 5, null],
        [null, null, null, 4, null, null, null, null, 7],
        [7,3,null, null, 8, null, 6, null ,null] 
    ],
    [
        [9, null,null,null,5,1,4,null,3],
        [null,null,7,null,9,4,null,null,null],
        [null,null,null,7,2,null,8,null,null],
        [6,8,null,null,3,4,2,1,null],
        [null,2,3,5,null,null,null,null,6],
        [4,7,null,1,6,null,5,null,null],
        [null,null,null,null,4,2,1,9,7],
        [4,null,2,null,5,null,null,null,null],
        [null,1,null,6,null,null,2,5,null]
    ],
    [
        [6, null, 3, 5, null, 8, 7, null, 4],
        [2, 4, 8, 6, null, 9, null, null, null],
        [9, 7, null, 3, 1, 4, null, null, 2],
        [null, 4, null, null, null, 6, null, null, null],
        [5, null, null, null, null, null, null, 9, 2],
        [null, null, null, 5, 9, null, 1, null, 6],
        [null, null, 9, null, 3, 2, null, 6, null],
        [null, null, null, 9, null, 7, null, 5, 4],
        [null, null, 1, null, null, null, null, 3, null]
    ],
    [
        [null, null, 9, null, 6, null, 5, null, 8],
        [null, 6, 5, null, null, 4, null, 2, 9],
        [null, 2, null, 5, 8, null, 7, null, null],
        [9, null, null, null, null, null, 6, null, null],
        [6, null, 8, 9, 1, 7, null, null, null],
        [4, 7, 2, null, null, 8, 9, null, 1],
        [null, 4, 5, 7, null, null, null, null, null],
        [null, null, null, 5, 8, 1, 7, null, 3],
        [8, null, null, 3, null, 4, 2, null, null]
    ]
]

let sudokuFinalValuesArray = [
    [
        [9, 8, 6, 5, 1, 3, 4, 2, 7],
        [5, 7, 4, 2, 8, 9, 3, 6, 1],
        [3, 1, 2, 4, 7, 6, 8, 5, 9],
        [7, 6, 2, 1, 4, 5, 8, 3, 9],
        [9, 1, 3, 7, 2, 8, 6, 4, 5],
        [5, 4, 8, 9, 6, 3, 1, 2, 7],
        [6, 9, 8, 3, 7, 1, 2, 5, 4],
        [1, 5, 2, 4, 9, 6, 8, 3, 7],
        [7, 3, 4, 2, 8, 5, 6, 9, 1] 
    ],
    [
        [9, 2, 6, 8, 5, 1, 4, 7, 3],
        [8, 1, 7, 3, 9, 4, 2, 6, 5],
        [3, 4, 5, 7, 2, 6, 8, 9, 1],
        [6, 8, 5, 7, 3, 4, 2, 1, 9],
        [1, 2, 3, 5, 8, 9, 7, 4, 6],
        [4, 7, 9, 1, 6, 2, 5, 3, 8],
        [5, 6, 8, 3, 4, 2, 1, 9, 7],
        [4, 7, 2, 9, 5, 1, 6, 3, 8],
        [9, 1, 3, 6, 8, 7, 2, 5, 4]
    ],
    [
        [6, 1, 3, 5, 2, 8, 7, 9, 4],
        [2, 4, 8, 6, 7, 9, 3, 1, 5],
        [9, 7, 5, 3, 1, 4, 6, 8, 2],
        [9, 4, 1, 2, 7, 6, 3, 8, 5],
        [5, 3, 6, 4, 8, 1, 7, 9, 2],
        [8, 2, 7, 5, 9, 3, 1, 4, 6],
        [4, 5, 9, 1, 3, 2, 8, 6, 7],
        [8, 2, 3, 9, 6, 7, 1, 5, 4],
        [7, 6, 1, 4, 5, 8, 2, 3, 9]
    ],
    [
        [4, 7, 9, 1, 6, 2, 5, 3, 8],
        [8, 6, 5, 3, 7, 4, 1, 2, 9],
        [1, 2, 3, 5, 8, 9, 7, 4, 6],
        [9, 1, 3, 2, 5, 4, 6, 8, 7],
        [6, 5, 8, 9, 1, 7, 4, 3, 2],
        [4, 7, 2, 6, 3, 8, 9, 5, 1],
        [3, 4, 5, 7, 2, 6, 8, 9, 1],
        [2, 9, 6, 5, 8, 1, 7, 4, 3],
        [8, 1, 7, 3, 9, 4, 2, 6, 5]
    ]
]

let root = document.querySelector(':root');
let darkModeToggle = document.getElementById("dark-mode-slider-container");

darkModeToggle.addEventListener('change', function() {
    if(this.checked){
        
        darkMode();
        localStorage.setItem("darkModeToggleLocal", 1);
        document.getElementById("dark-mode-slider").setAttribute("title", "Lumos!");
        
    }else{
        lightMode();
        localStorage.setItem("darkModeToggleLocal", 0);
        document.getElementById("dark-mode-slider").setAttribute("title", "Nox!");
        
    }

})

function darkMode(){
    root.style.setProperty('--BG-COLOR', '#36454F');
    root.style.setProperty('--MAIN-ACCENT-COLOR', 'white');
    root.style.setProperty('--SUB-ACCENT-COLOR', 'rgb(50, 173, 218)');
    root.style.setProperty('--MAIN-HEADING-COLOR', 'white');
    root.style.setProperty('--UTILITIES-BTN-BGCOLOR', 'rgba(143, 143, 143, 0.2)');
    root.style.setProperty('--MISTAKE-FONT-COLOR', 'rgba(255,255,255,0.5)');
    root.style.setProperty('--MICRO-CANVAS-BORDER-COLOR', 'rgba(255,255,255,0.6)');
    root.style.setProperty('--HISTORY-EMPTY-TEXT-COLOR', 'hsla(205, 18%, 34%, 0.4)');
    root.style.setProperty('--NUM-PAD-BGCOLOR', 'rgb(50, 173, 218)');
    root.style.setProperty('--NUM-PAD-COLOR', '#36454F');
    root.style.setProperty('--INP-NUM-COLOR', 'rgba(255,255,255,1)');
    root.style.setProperty('--SETTINGS-INPUT-COLOR', 'rgba(255,255,255,0.6)');
    mistakeText.style.color = "rgba(255,255,255,0.6)";
    root.style.setProperty('--NUM-PAD-COLOR-SM-SCREEN', 'rgb(50, 173, 218)');
    for(let i=0; i<6; i++){
        if(i%2!=0){
            timerValues.childNodes[i].style.color = "white";
        }
    }
}

function lightMode(){
    root.style.setProperty('--BG-COLOR', 'white');
    root.style.setProperty('--MAIN-ACCENT-COLOR', '#36454F');
    root.style.setProperty('--SUB-ACCENT-COLOR', '#FF7F50');
    root.style.setProperty('--MAIN-HEADING-COLOR', '#3d3d3d');
    root.style.setProperty('--UTILITIES-BTN-BGCOLOR', 'rgba(143, 143, 143, 0.3)');
    root.style.setProperty('--MISTAKE-FONT-COLOR', '#465865');
    root.style.setProperty('--MICRO-CANVAS-BORDER-COLOR', '#838383');
    root.style.setProperty('--HISTORY-EMPTY-TEXT-COLOR', 'hsla(205, 18%, 34%, 0.4)');
    root.style.setProperty('--NUM-PAD-BGCOLOR', 'hsla(16, 100%, 66%, 0.4)');
    root.style.setProperty('--NUM-PAD-COLOR', '#FF7F50');
    root.style.setProperty('--INP-NUM-COLOR', '#36454F');
    root.style.setProperty('--SETTINGS-INPUT-COLOR', '#36454F');
    root.style.setProperty('--NUM-PAD-COLOR-SM-SCREEN', '#FF7F50');
    mistakeText.style.color = "#465865";
    for(let i=0; i<6; i++){
        if(i%2!=0){
            timerValues.childNodes[i].style.color = "#465865";
        }
    }
}


let sudokuStartIndex;
let sudokuFinalIndex;

const highscoreTune = new Audio("audio/highScore_tune.mp3");

let microCanva = document.getElementsByClassName("micro-canvas__input");
let microCanvaArray = Array.from(microCanva)

let highscoreDisplay = document.getElementById("highscore-display");

if(localStorage.getItem("highscoreLocal")){
    highscoreDisplay.innerText = localStorage.getItem("highscoreLocal");
}

let hintBtn = document.getElementById("hint-btn");
let hintBtnCount = 0;
let randomHintIndex;

let lastActionArray1 = [];
let lastActionArray2 = [];
let lastActionArrayIndices = [];
let undoBtn = document.getElementById("undo-btn");
let historyParentObj = [];
let mistakeText = document.getElementById("mistake-text");

if(localStorage.getItem("historyLocal")){
    historyParentObj = JSON.parse(localStorage.getItem("historyLocal"));

}

let historySummaryList = Array.from(document.getElementsByClassName("history-summary"));
let historyDetailsList = Array.from(document.getElementsByClassName("history-details"));

let sudokuUserInputIndexArray = [];
let sudokuUserInputValueArray = [];

let lastClickedBox = 0;
let eraseBtn = document.getElementById("erase-btn");

let settingsBtn = document.getElementById("settings-btn");
let SettingModal = document.getElementById("settings-modal");
let hintUpBtn = document.getElementById("hint-up");
let hintDownBtn = document.getElementById("hint-down");
let hintInp = document.getElementById("hint-input");
let settingContent = document.getElementById("settings__content");
let mistakeUpBtn = document.getElementById("mistake-up");
let mistakeDownBtn = document.getElementById("mistake-down");
let mistakeInp = document.getElementById("mistake-input");
let settingsSubmitBtn = document.getElementById("settings-submit-btn");

let mistakesMade = document.getElementById("mistakes-made");
let maxMistakes = document.getElementById("max-mistakes");

let timerMinute = document.getElementById("timer-minute");
let timerSecond = document.getElementById("timer-second");

let historyBtn = document.getElementById("history-btn");
let historyModal = document.getElementById("history-modal");
let historyModalContent = document.getElementById("history-modal-content");

let gameWonToggle = 0;
let gameLostToggle = 0;

let newGame = document.getElementById("new-game");

let sudokuStartingValuesArrayTemp = sudokuStartingValuesArray.map((val) => {
    return val;
});

let timeStart = null;

let timerValues = document.getElementById("timer-values");

if(!(localStorage.getItem("gameWonLossToggleLocal"))){
    localStorage.setItem("gameWonLossToggleLocal" , 0);
}

let score = 0;

let numPadBtn = Array.from(document.getElementsByClassName("num-pad__btn"));
let numPad = document.getElementById("num-pad");



if(Number(localStorage.getItem("gameWonLossToggleLocal"))==0){
    if(localStorage.getItem("darkModeToggleLocal")){
        if(Number(localStorage.getItem("darkModeToggleLocal"))==1){
            darkModeToggle.checked = true;
            document.getElementById("dark-mode-slider").setAttribute("title", "Lumos!");
            darkMode()
        }else{
            darkModeToggle.checked = false;
            lightMode();
            document.getElementById("dark-mode-slider").setAttribute("title", "Nox!");
        }
    }
    if(localStorage.getItem("limitOfHintslocal")){
        hintBtn.setAttribute("limitOfHints", Number(localStorage.getItem("limitOfHintslocal")))
    }
    if(localStorage.getItem("hintBtnCountLocal")){
        hintBtnCount = Number(localStorage.getItem("hintBtnCountLocal"));
    }
    if(localStorage.getItem("randomHintIndexLocal")){
        randomHintIndex = Number(localStorage.getItem("randomHintIndexLocal"));
    }
    if(localStorage.getItem("lastActionArrayLocal")){
        let i = JSON.parse(localStorage.getItem("lastActionArrayLocal"));
        lastActionArrayIndices = i;
        i.forEach((element) => {
            lastActionArray1.push(microCanva[element]);
        });
    }
    if(localStorage.getItem("mistakesCountLocal")){
        mistakesMade.innerText = Number(localStorage.getItem("mistakesCountLocal"));
    }
    if(localStorage.getItem("maxMistakesLocal")){
        maxMistakes.innerText = Number(localStorage.getItem("maxMistakesLocal"));
    }
    if(localStorage.getItem("timeSecondLocal")){
        timerSecond.innerText = (Number(localStorage.getItem("timeSecondLocal"))).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
    }
    if(localStorage.getItem("timeMinuteLocal")){
        timerMinute.innerText = (Number(localStorage.getItem("timeMinuteLocal"))).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
    }
    if(localStorage.getItem("sudokuStartIndexLocal")  && localStorage.getItem("sudokuFinalIndexLocal")){
        sudokuStartIndex = Number(localStorage.getItem("sudokuStartIndexLocal"));
        sudokuFinalIndex = Number(localStorage.getItem("sudokuFinalIndexLocal"));
    }else{
        randomSudokuSelector()
    }

    if(localStorage.getItem("sudokuUserInputIndexLocal")){
        sudokuUserInputIndexArray = JSON.parse(localStorage.getItem("sudokuUserInputIndexLocal"))
    }
    if(localStorage.getItem("sudokuUserInputValueLocal")){
        sudokuUserInputValueArray = JSON.parse(localStorage.getItem("sudokuUserInputValueLocal"))
    }
}else{
    randomSudokuSelector();
}


function removeLocalStorage(){
    localStorage.removeItem("limitOfHintslocal");
    localStorage.removeItem("hintBtnCountLocal");
    localStorage.removeItem("randomHintIndexLocal");
    localStorage.removeItem("lastActionArrayLocal");
    localStorage.removeItem("mistakesCountLocal");
    localStorage.removeItem("timeSecondLocal");
    localStorage.removeItem("timeMinuteLocal");
    localStorage.removeItem("sudokuStartIndexLocal");
    localStorage.removeItem("sudokuFinalIndexLocal");
    localStorage.removeItem("sudokuUserInputIndexLocal");
    localStorage.removeItem("sudokuUserInputValueLocal");

    hintBtn.setAttribute("limitOfHints", 3);
    hintBtnCount = 0;
    randomHintIndex = null;
    lastActionArrayIndices = [];
    lastActionArray1 = [];
    lastActionArray2 = [];
    sudokuUserInputIndexArray = []
    sudokuUserInputValueArray = []

}

if(!(localStorage.getItem("timeSecondLocal"))){
    localStorage.setItem("timeSecondLocal", "0");
}
if(!(localStorage.getItem("timeMinuteLocal"))){
    localStorage.setItem("timeMinuteLocal", "0");
}


gameStartOnRefresh();



//////////////////////////////////////////////////      FUNCTIONS START   ///////////////////////////////////////////////////////

function randomSudokuSelector(){
    let index = null;
    if(sudokuStartIndex == null){
        index = Math.floor(Math.random()*sudokuStartingValuesArrayTemp.length);
    }else if(sudokuStartingValuesArrayTemp.length<=1){
        index = 0;
        sudokuStartingValuesArrayTemp.pop();
        sudokuStartingValuesArrayTemp = sudokuStartingValuesArray.map((val) => {
            return val;
        });
    }
    else{
        
        sudokuStartingValuesArrayTemp.splice(sudokuStartingValuesArrayTemp.indexOf(sudokuStartingValuesArray[sudokuStartIndex]), 1);
        index = Math.floor(Math.random()*sudokuStartingValuesArrayTemp.length);
    }
    sudokuStartIndex = sudokuStartingValuesArray.indexOf(sudokuStartingValuesArrayTemp[index]);
    sudokuFinalIndex = sudokuStartIndex;
    console.log("index in randomsudokuselector : ", index);
    console.log("sudoku start index in randomsudokuselector is : ", sudokuStartIndex)
    localStorage.setItem("sudokuStartIndexLocal", sudokuStartIndex);
    localStorage.setItem("sudokuFinalIndexLocal", sudokuFinalIndex);
}


function gameStartOnRefresh() {
    if(Number(localStorage.getItem("gameWonLossToggleLocal")) == 1){
        randomSudokuSelector()
        let j=0
        for(let i=0;i<9;i++){
            
            for(let k=0; k<9; k++){
                microCanva[j].value = sudokuStartingValuesArray[sudokuStartIndex][i][k];
                j++;
            }
        }
        for(let i=0; i<81 ;i++){
            if(microCanva[i].value>0){
                microCanva[i].disabled = true;
                microCanvaArray[i].style.opacity = "0.5"
            }
        }
        localStorage.setItem("gameWonLossToggleLocal", 0);
    }else{
        let j=0
        for(let i=0;i<9;i++){
            
            for(let k=0; k<9; k++){
                microCanva[j].value = sudokuStartingValuesArray[sudokuStartIndex][i][k];
                j++;
            }
        }
        for(let i=0; i<81 ;i++){
            if(microCanva[i].value>0){
                microCanva[i].disabled = true;
                microCanvaArray[i].style.opacity = "0.5"
            }
        }
        for(let i=0; i<sudokuUserInputIndexArray.length; i++){
            microCanva[sudokuUserInputIndexArray[i]].value = Number(sudokuUserInputValueArray[i]);
        }
    }
    let j = 0;
    for(let i=0; i<9; i++){
        for(let k=0; k<9; k++){
            if(!(microCanva[j].value==sudokuFinalValuesArray[sudokuFinalIndex][i][k])){
                
                if(microCanva[j].value>0){
                    microCanva[j].classList.add("micro-canvas__input-red-bg");  
                }
            }
            j++;
        }
    }
    timerStart();
}


function startGame(){
    randomSudokuSelector();
    let j=0
    for(let i=0;i<9;i++){
        for(let k=0; k<9; k++){
            microCanva[j].disabled = false;
            microCanva[j].value = sudokuStartingValuesArray[sudokuStartIndex][i][k];
            j++;
        }
    }
    for(let i=0; i<81 ;i++){
        if(microCanva[i].value>0){
            microCanva[i].disabled = true;
            microCanvaArray[i].style.opacity = "0.5"
        }
    }
    for(let i=0; i<81; i++){
        microCanva[i].classList.remove("micro-canvas__input-red-bg");
    }
    timerStart();
}


function inputAction(typOfInput, element){
    let inputField;
    let value;
    if(typOfInput==0){
        inputField = lastClickedBox;
        value = inputField.value;
        lastClickedBox.value = element.innerText;
    }else{
        inputField = element;
        value = inputField.value;
        if(value.length > 1){
            if(value.slice(1) == sudokuUserInputValueArray[sudokuUserInputIndexArray.indexOf(microCanvaArray.indexOf(inputField))]){
                inputField.value = value.slice(0,1);
            }else{
                inputField.value = value.slice(1);
            }
        }
    }


        if(lastActionArray1.length!=0){
            lastActionArray1.push(inputField);
            lastActionArrayIndices.push(microCanvaArray.indexOf(inputField));
            localStorage.setItem("lastActionArrayLocal", JSON.stringify(lastActionArrayIndices));
            
        }else if(lastActionArray2.length != 0){
            lastActionArray2.push(inputField);
            lastActionArrayIndices.push(microCanvaArray.indexOf(inputField));
            localStorage.setItem("lastActionArrayLocal", JSON.stringify(lastActionArrayIndices));
            
        }else{
            lastActionArray1.push(inputField);
            lastActionArrayIndices.push(microCanvaArray.indexOf(inputField));
            localStorage.setItem("lastActionArrayLocal", JSON.stringify(lastActionArrayIndices));
            
        }

        
        for(let i=0; i<81; i++){
            microCanva[i].classList.remove("micro-canvas__input-red-bg");
        }
        let matchingCount = 0;
        let j=0;
        for(let i=0; i<9; i++){
            for(let k=0; k<9; k++){
                if(!(microCanva[j].value==sudokuFinalValuesArray[sudokuFinalIndex][i][k])){
                    matchingCount++;
                    if(microCanva[j].value>0){
                        microCanva[j].classList.add("micro-canvas__input-red-bg");
                        
                    }
                }
                j++;
            }
        }


        let index = microCanvaArray.indexOf(inputField);
        let indexI =0;
        let indexJ =0;
        let indexK =0;
        if(index%9==0){
            indexJ = index/9;
            indexK = 0;
        }else{
            indexI = index%10 + Math.floor(index/10);
            indexJ = Math.floor(index/10) + Math.floor(indexI/10);
            indexK = indexI%10 + Math.floor(indexI/10);
        }
        if(inputField.value != sudokuFinalValuesArray[sudokuFinalIndex][indexJ][indexK]){
            mistakesMade.innerText = Number(mistakesMade.innerText) + 1 ;
            localStorage.setItem("mistakesCountLocal", mistakesMade.innerText);
            if(mistakesMade.textContent>=maxMistakes.textContent){
                let message = "Mistake Limit Reached("+mistakesMade.textContent+")";
                gameFinish(mistakeText, "Failed", message);
            }
        }

    

        if(matchingCount==0){
            gameFinish(0, "Completed", 0);
        }

        if(sudokuUserInputIndexArray.length<1){
            sudokuUserInputIndexArray.push(microCanvaArray.indexOf(inputField));
            sudokuUserInputValueArray.push(Number(inputField.value));
            
        }else{
            for(let i=0; i<sudokuUserInputIndexArray.length; i++){
                if(sudokuUserInputIndexArray[i] == microCanvaArray.indexOf(inputField)){
                    sudokuUserInputIndexArray.splice(i, 1)
                    sudokuUserInputValueArray.splice(i, 1)
                    
                }

            }
            sudokuUserInputIndexArray.push(microCanvaArray.indexOf(inputField));
            sudokuUserInputValueArray.push(Number(inputField.value));
    
        }
        

        localStorage.setItem("sudokuUserInputIndexLocal", JSON.stringify(sudokuUserInputIndexArray));
        localStorage.setItem("sudokuUserInputValueLocal", JSON.stringify(sudokuUserInputValueArray));
}


function gameFinish(errorReason, stat, msg) {
    localStorage.setItem("gameWonLossToggleLocal", 1)
    
    for(let i=0; i<81; i++){
        microCanva[i].disabled = true;
    }
    clearInterval(timeStart);

    let historyChildObj = {};

    if(stat == "Failed"){
        gameLostToggle = 1;
        if(errorReason == timerValues){
            for(let i=0; i<6; i++){
                if(i%2!=0){
                    errorReason.childNodes[i].style.color = "red";
                }
            }
        }else{
            mistakeText.style.color = "red";
        }
        errorReason.classList.add("mistake-text-class");

        historyChildObj = {
            status : stat,
            lostMsg : msg
        }

    }else{
        gameWonToggle = 1;
        scoreCalc();
        let timeTakenToFinish = `${timerMinute.textContent}:${timerSecond.textContent}`;
    
        historyChildObj = {
            status : stat,
            hintsUsed : hintBtnCount,
            mistakesMade : mistakesMade.textContent,
            timeTaken : timeTakenToFinish,
            score : score
        }

        if(score > Number(highscoreDisplay.innerText)){
            highscoreDisplay.classList.add("highscore-animation");
            setTimeout(() => {
                highscoreDisplay.classList.remove("highscore-animation");
            }, 1000);
            highscoreTune.play();
            localStorage.setItem("highscoreLocal", score);
            setTimeout(() => {
                highscoreDisplay.innerText = score;
            }, 500);
        }
        root.style.setProperty('--MICRO-CANVAS-BORDER-COLOR', '#006847');
        document.getElementById("canva").classList.add("victory-grid-color", "victory-grid-popUp");
        
    }
    undoBtn.disabled = true;
    hintBtn.disabled = true;
    eraseBtn.disabled = true;
    numPadBtn.forEach(element => {
        element.disabled = true;
    });

    historyParentObj.unshift(historyChildObj);
    if(historyParentObj.length>5){
        historyParentObj.pop();
    }
    localStorage.setItem("historyLocal", JSON.stringify(historyParentObj));
    removeLocalStorage();
}


function scoreCalc(){
    let h = 0;
    hintBtnCount > 49? h = 0 : h = (50-hintBtnCount)*2;
    let m = (10 - Number(mistakesMade.textContent))*10;
    let t = (60 - Number(timerMinute.textContent))*6;

    score = h + m + t;
}

function timerStart ()  {
    timeStart = setInterval(function () {
        if(Number(timerMinute.innerText)>=59 && Number(localStorage.getItem("timeSecondLocal"))>=59){
            
            gameFinish(timerValues, "Failed", "Time Up")
            
        }
        if(Number(timerSecond.innerText)>=59){
            timerSecond.innerText = (0).toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
              });
            timerMinute.innerText = (Number(timerMinute.innerText)+1).toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
        }
        else{
            timerSecond.innerText = (Number(timerSecond.innerText)+1).toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
              });
        }
        localStorage.setItem("timeSecondLocal", Number(localStorage.getItem("timeSecondLocal"))+1);
        if(Number(localStorage.getItem("timeSecondLocal") > 59)){
            localStorage.setItem("timeMinuteLocal", Number(localStorage.getItem("timeMinuteLocal"))+1)
            localStorage.setItem("timeSecondLocal", 0)
        }
    }, 1000)
}

//////////////////////////////////////////////      FUNCTIONS END       ///////////////////////////////////////////////////////////////////////



for(let element of microCanva){
    element.addEventListener("input" , function() {
        inputAction(1, element);
        
    })
} 


for(let element of numPadBtn){
    element.onclick = function(){
        if(lastClickedBox != 0){
            inputAction(0, element)
        }
    }
}


hintBtn.addEventListener("click", () => {
    if(hintBtn.getAttribute("limitOfHints")>0){
        ++hintBtnCount;

        let microCanvaEmptyArray = microCanvaArray.filter((element) => {
            return element.value<1
        });
        let randomHint = microCanvaEmptyArray[Math.floor(Math.random()*microCanvaEmptyArray.length)];
        randomHintIndex = microCanvaArray.indexOf(randomHint);
        hintBtn.setAttribute("limitOfHints", hintBtn.getAttribute("limitOfHints")-1);
        let i =0;
        let j =0;
        let k =0;
        if(randomHintIndex%9==0){
            j = randomHintIndex/9;
            k = 0;
        }else{
            i = randomHintIndex%10 + Math.floor(randomHintIndex/10);
            j = Math.floor(randomHintIndex/10) + Math.floor(i/10);
            k = i%10 + Math.floor(i/10);
        }
        microCanva[randomHintIndex].value = sudokuFinalValuesArray[sudokuFinalIndex][j][k];

        localStorage.setItem("hintBtnCountLocal", hintBtnCount);
        localStorage.setItem("randomHintIndexLocal", randomHintIndex)
        localStorage.setItem("limitOfHintslocal", hintBtn.getAttribute("limitOfHints"))

        if(lastActionArray1.length!=0){
            lastActionArray1.push(microCanva[randomHintIndex]);
            lastActionArrayIndices.push(randomHintIndex);
            localStorage.setItem("lastActionArrayLocal", JSON.stringify(lastActionArrayIndices));
            
        }else if(lastActionArray2.length != 0){
            lastActionArray2.push(microCanva[randomHintIndex]);
            lastActionArrayIndices.push(randomHintIndex);
            localStorage.setItem("lastActionArrayLocal", JSON.stringify(lastActionArrayIndices));
            
        }else{
            lastActionArray1.push(microCanva[randomHintIndex]);
            lastActionArrayIndices.push(randomHintIndex);
            localStorage.setItem("lastActionArrayLocal", JSON.stringify(lastActionArrayIndices));
            
        }

        sudokuUserInputIndexArray.push(randomHintIndex);
        sudokuUserInputValueArray.push(sudokuFinalValuesArray[sudokuFinalIndex][j][k]);
        
        localStorage.setItem("sudokuUserInputIndexLocal", JSON.stringify(sudokuUserInputIndexArray));
        localStorage.setItem("sudokuUserInputValueLocal", JSON.stringify(sudokuUserInputValueArray));

        let l=0;
        let matchingCount = 0;
        for(let i=0; i<9; i++){
            for(let k=0; k<9; k++){
                if(!(microCanva[l].value==sudokuFinalValuesArray[sudokuFinalIndex][i][k])){
                    matchingCount++;
                    if(microCanva[l].value>0){
                        microCanva[l].classList.add("micro-canvas__input-red-bg");
                    }
                }
                l++;
            }
        }

        if(matchingCount==0){
            gameFinish(0, "Completed", 0);
        }
    }
})


undoBtn.addEventListener("click", function() {
    let lastAction = null;
    if(lastActionArray1.length!=0){
        lastAction = lastActionArray1.pop();
        lastActionArray2 = lastActionArray1.filter((val) => {
            return val != lastAction;
        })
        lastActionArray1 = [];
        lastAction.value = null;
        lastAction.classList.remove("micro-canvas__input-red-bg");
        let i = microCanvaArray.indexOf(lastAction);
        let j = lastActionArrayIndices.filter((val) => {
            return val != i;
        })
        lastActionArrayIndices = j;
        localStorage.setItem("lastActionArrayLocal", JSON.stringify(j));

        let k = sudokuUserInputIndexArray.indexOf(i);
        sudokuUserInputIndexArray.splice(k, 1);
        sudokuUserInputValueArray.splice(k, 1);
        localStorage.setItem("sudokuUserInputIndexLocal", JSON.stringify(sudokuUserInputIndexArray));
        localStorage.setItem("sudokuUserInputValueLocal", JSON.stringify(sudokuUserInputValueArray));

    }
    else if(lastActionArray2.length!=0){
        lastAction = lastActionArray2.pop();
        lastActionArray1 = lastActionArray2.filter((val) => {
            return val != lastAction;
        })
        lastActionArray2 = [];
        lastAction.value = null;
        lastAction.classList.remove("micro-canvas__input-red-bg");
        let i = microCanvaArray.indexOf(lastAction);
        let j = lastActionArrayIndices.filter((val) => {
            return val != i;
        })
        lastActionArrayIndices = j;
        localStorage.setItem("lastActionArrayLocal", JSON.stringify(j));

        let k = sudokuUserInputIndexArray.indexOf(i);
        sudokuUserInputIndexArray.splice(k, 1);
        sudokuUserInputValueArray.splice(k, 1);
        localStorage.setItem("sudokuUserInputIndexLocal", JSON.stringify(sudokuUserInputIndexArray));
        localStorage.setItem("sudokuUserInputValueLocal", JSON.stringify(sudokuUserInputValueArray));

    }
})


for(let el of microCanva){
    el.addEventListener("click", function(){
        lastClickedBox = this;
        eraseBtn.disabled = false;
    })
}


eraseBtn.addEventListener("click", function() {
    if(sudokuUserInputIndexArray.length>0){
        let i = microCanvaArray.indexOf(lastClickedBox);
        let j = sudokuUserInputIndexArray.indexOf(i);
        sudokuUserInputIndexArray.splice(j, 1);
        sudokuUserInputValueArray.splice(j, 1);

        localStorage.setItem("sudokuUserInputIndexLocal", JSON.stringify(sudokuUserInputIndexArray));
        localStorage.setItem("sudokuUserInputValueLocal", JSON.stringify(sudokuUserInputValueArray));
    }
    lastClickedBox.value = null;
    lastClickedBox.classList.remove("micro-canvas__input-red-bg");
})



settingsBtn.onclick = function() {
    SettingModal.style.display = "block";
}

window.onclick = function(event) {
    if(event.target.getAttribute("class") === "modal"){
        if(event.target.getAttribute("id") === "history-modal"){
            
            setTimeout(() => {
                event.target.style.display = "none";
                
            }, 1000);
            historyModalContent.style.display = "none";
            historyModalContent.classList.remove("hist-modal-content__appear");
            historyModalContent.classList.add("hist-modal-content__vanish");
        }else if(event.target.getAttribute("id") === "settings-modal"){
            event.target.style.display = "none";
        }
        
    }
   
}

hintUpBtn.onclick = function() {
    hintInp.stepUp(1);
    if(hintInp.value>8){
        this.disabled = true;
    }
    if(hintInp.value>0){
        hintDownBtn.disabled = false;
    }
}
hintDownBtn.onclick = function() {
    hintInp.stepDown(1);
    if(hintInp.value<1){
        this.disabled = true;
    }
    if(hintInp.value<9){
        hintUpBtn.disabled = false;
    }
}
mistakeUpBtn.onclick = function() {
    mistakeInp.stepUp(1);
    if(mistakeInp.value>8){
        this.disabled = true;
    }
    if(mistakeInp.value>1){
        mistakeDownBtn.disabled = false;
    }
}
mistakeDownBtn.onclick = function() {
    mistakeInp.stepDown(1);
    if(mistakeInp.value<2){
        this.disabled = true;
    }
    if(mistakeInp.value<9){
        mistakeUpBtn.disabled = false;
    }
}

settingsSubmitBtn.onclick = function() {
    SettingModal.style.display = "none";
    if(mistakeInp.value>0){
        maxMistakes.innerText = mistakeInp.value;
        localStorage.setItem("maxMistakesLocal", mistakeInp.value);
    }
    hintBtn.setAttribute("limitOfHints", hintInp.value)
    localStorage.setItem("limitOfHintslocal", hintInp.value)
}


historyBtn.onclick = function() {
    if(localStorage.getItem("historyLocal")){
        document.getElementById("game-results-empty").style.display = "none";
    }else{
        document.getElementById("game-results-empty").style.display = "flex";
    }
    historyModal.style.display = "block";
    historyModalContent.style.display = "block";
    historyModalContent.classList.add("hist-modal-content__appear")
    historyModalContent.classList.remove("hist-modal-content__vanish");
    let historyDisplay = JSON.parse(localStorage.getItem("historyLocal"))
    for(let i=0; i<historyDisplay.length; i++){
        historySummaryList[i].style.display = "list-item";
        historySummaryList[i].innerText = `${historyDisplay[i].status}`;
        if(historyDisplay[i].status=="Completed"){
            historySummaryList[i].style.color = "limegreen";
            historyDetailsList[i].innerText = ` Number of Hints Used : ${historyDisplay[i].hintsUsed}\nMistakes Made : ${historyDisplay[i].mistakesMade}\nTime Taken : ${historyDisplay[i].timeTaken}\nscore : ${historyDisplay[i].score}`;
        }else{
            historySummaryList[i].style.color = "red";
            historyDetailsList[i].innerText = ` ${historyDisplay[i].lostMsg}`;
        }
        
    }
}


newGame.onclick = function () {
    clearInterval(timeStart);
    lastClickedBox = 0;
    timerMinute.innerText = "00";
    timerSecond.innerText = "00";
    if(darkModeToggle.checked){
        mistakeText.style.color = "rgba(255,255,255,0.6)";
    }else{
        mistakeText.style.color = "#465865";
    }
    for(let i=0; i<6; i++){
        if(i%2!=0){
            if(darkModeToggle.checked){
                timerValues.childNodes[i].style.color = "white";
            }
            else{
                timerValues.childNodes[i].style.color = "#465865";
            }
        }
    }
    mistakeText.classList.remove("mistake-text-class");
    timerValues.classList.remove("mistake-text-class");
    maxMistakes.innerText = Number(localStorage.getItem("maxMistakesLocal"));
    mistakesMade.innerText = 0;
    microCanvaArray.forEach((element) => {
        element.style.opacity = "1";
    })
    if(gameWonToggle==1 || gameLostToggle ==1){
        root.style.setProperty('--MICRO-CANVAS-BORDER-COLOR', '#838383');
        document.getElementById("canva").classList.remove("victory-grid-color", "victory-grid-popUp");
        startGame();
        hintBtn.disabled = false;
        undoBtn.disabled =false;
        eraseBtn.disabled = false;
        numPadBtn.forEach(element => {
            element.disabled = false;
        });
        gameWonToggle=0;
        gameLostToggle=0;
        localStorage.setItem("gameWonLossToggleLocal", 0)
    }else{
        removeLocalStorage();
        startGame();
        localStorage.setItem("gameWonLossToggleLocal", 0)
    }
}