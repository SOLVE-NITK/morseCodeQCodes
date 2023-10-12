let simsubscreennum = 0;
let temp = 0;

const questionOptions = [
    { id: 1, text: "QRA?", code: "--.- .-. .- ..--..", question: "What is the name of your station?"},
    { id: 2, text: "QRG?", code: "--.- .-. --. ..--..", question: "What is the exact frequency?"},
    { id: 3, text: "QRH?", code: "--.- .-. .... ..--..", question: "Does my frequency vary?"},
    { id: 4, text: "QRI?", code: "--.- .-. .. ..--..", question: "How is the tone of my transmission?"},
    { id: 5, text: "QRK?", code: "--.- .-. -.- ..--..", question: "What is the readability of my signals?"},
    { id: 6, text: "QRL?", code: "--.- .-. .-.. ..--..", question: "Are you busy?    Is the frequency in use?"},
    { id: 7, text: "QRM?", code: "--.- .-. -- ..--..", question: "Are you being interested with?"},
    { id: 8, text: "QRN?", code: "--.- .-. -. ..--..", question: "Are you bothered by atmosphere?"},
    { id: 9, text: "QRO?", code: "--.- .-. --- ..--..", question: "Shall I increase my power of my transmitter?"},
    { id: 10, text: "QRS?", code: "--.- .-. ... ..--..", question: "Should I decrease my sending speed?"},
    { id: 11, text: "QRT?", code: "--.- .-. - ..--..", question: "Should I stop my transmission?"},
    { id: 12, text: "QRU?", code: "--.- .-. ..- ..--..", question: "Do you have you anything for me?"},
    { id: 13, text: "QRV?", code: "--.- .-. ...- ..--..", question: "Are you ready?"},
    { id: 14, text: "QRW?", code: "--.- .-. .-- ..--..", question: "Shall I advise...that you are calling him on...kHz?"},
    { id: 15, text: "QRX?", code: "--.- .-. -..- ..--..", question: "When will you call me back?"},
    { id: 16, text: "QRZ?", code: "--.- .-. --.. ..--..", question: "Who was calling me?"},
    { id: 17, text: "QSA?", code: "--.- ... .- ..--..", question: "What is the strength of my signals?"},
    { id: 18, text: "QSB?", code: "--.- ... -... ..--..", question: "Is my signal fading?"},
    { id: 19, text: "QSL?", code: "--.- ... .-.. ..--..", question: "Can you confirm reception?"},
    { id: 20, text: "QSO?", code: "--.- ... --- ..--..", question: "Can you make contact with...(me)?"},
    { id: 21, text: "QSU?", code: "--.- ... ..- ..--..", question: "Shall I send or reply on this frequency or on.....kHz with ...emission of class?"},
    { id: 22, text: "QSV?", code: "--.- ... ...- ..--..", question: "Shall I send a series of VVV....?"},
    { id: 23, text: "QSW?", code: "--.- ... .-- ..--..", question: "Will you send on this frequency or on ...khz with...emission of class?"},
    { id: 24, text: "QSX?", code: "--.- ... -..- ..--..", question: "Can you listen on...?"},
    { id: 25, text: "QSY?", code: "--.- ... -.-- ..--..", question: "Shall I start transmitting on another frequency?"},
    { id: 26, text: "QSZ?", code: "--.- ... --.. ..--..", question: "Shall I send each word or group twice?"},
    { id: 27, text: "QTC?", code: "--.- - -.-. ..--..", question: "Do you have a message for me?"},
    { id: 28, text: "QTH?", code: "--.- - .... ..--..", question: "What is your location (latitude and longitude or by name of the location)?"},
    { id: 29, text: "QTR?", code: "--.- - .-. ..--..", question: "What is the exact time?"},
    { id: 30, text: "QUM?", code: "--.- ..- -- ..--..", question: "Is the Distress traffic over?"}
];


const answerOptions = [
    { id: 1, text: "QRA", code: "--.- .-. .-", question: "The name of my station is....."},
    { id: 2, text: "QRG", code: "--.- .-. --.", question: "The exact frequency is......"},
    { id: 3, text: "QRH", code: "--.- .-. ....", question: "Your frequency varies."},
    { id: 4, text: "QRI", code: "--.- .-. ..", question: "The tone of your transmission is....  1.Good 2.Variable 3.Bad"},
    { id: 5, text: "QRK", code: "--.- .-. -.-", question: "The readability of your signals is: 1:Bad 2:Fairly bad 3:Reasonably good 4:Good 5:Excellent"},
    { id: 6, text: "QRL", code: "--.- .-. .-..", question: "I am busy.    The frequency  is in use."},
    { id: 7, text: "QRM", code: "--.- .-. --", question: "i am interfered with. 1:I am not all interfered with 2:Slightly 3:Moderately 4:Strongly 5:very strongly"},
    { id: 8, text: "QRN", code: "--.- .-. -.", question: "I am bothered by atmospherics 1:Not at all 2:Slightly 3:Moderately 4:Strongly 5:Very Strongly"},
    { id: 9, text: "QRO", code: "--.- .-. ---", question: "Increase power."},
    { id: 10, text: "QRS", code: "--.- .-. ...", question: "Decrease your sending speed."},
    { id: 11, text: "QRT", code: "--.- .-. -", question: "Stop your transmission."},
    { id: 12, text: "QRU", code: "--.- .-. ..-", question: "I have nothing for you."},
    { id: 13, text: "QRV", code: "--.- .-. ...-", question: "I am ready."},
    { id: 14, text: "QRW", code: "--.- .-. .--", question: "Please advise...that I am calling him on kHz."},
    { id: 15, text: "QRX", code: "--.- .-. -..-", question: "I will call you back at... Also:wait,standby."},
    { id: 16, text: "QRZ", code: "--.- .-. --..", question: "You are called by..."},
    { id: 17, text: "QSA", code: "--.- ... .-", question: "The strength of your signals is: 1:Bad 2:Fairly bad 3:Reasonable good 4:Good 5:Excellent"},
    { id: 18, text: "QSB", code: "--.- ... -...", question: "Your signal is fading."},
    { id: 19, text: "QSL", code: "--.- ... .-..", question: "I confirm reception."},
    { id: 20, text: "QSO", code: "--.- ... ---", question: "I can make contact with...(you)."},
    { id: 21, text: "QSU", code: "--.- ... ..-", question: "Send or reply on this frequency or on...kHz with...emission of class."},
    { id: 22, text: "QSV", code: "--.- ... ...-", question: "Send a series of VVV."},
    { id: 23, text: "QSW", code: "--.- ... .--", question: "I am going to send on this frequency or on...kHz with...emission of class."},
    { id: 24, text: "QSX", code: "--.- ... -..-", question: "Listen on..."},
    { id: 25, text: "QSY", code: "--.- ... -.--", question: "Start transmitting on...  Also:change frequency(to...)."},
    { id: 26, text: "QSZ", code: "--.- ... --..", question: "Send each word or group twice."},
    { id: 27, text: "QTC", code: "--.- - -.-.", question: "I have a message for you."},
    { id: 28, text: "QTH", code: "--.- - ....", question: "My location is...latitude and longitude or:my location is..."},
    { id: 29, text: "QTR", code: "--.- - .-.", question: "The exact time is..."},
    { id: 30, text: "QUM", code: "--.- ..- --", question: "The Distress traffic is over"},
];



//for nav next
function navNext() {
    const inputElement = document.getElementById('dropdown');
    const selectedOptionId = inputElement.value;
    const mandatoryMessage = document.getElementById('mandatoryMessage');

    if (selectedOptionId === "") {
        mandatoryMessage.style.display = 'block';
        setTimeout(function () {
            mandatoryMessage.style.display = 'none';
        }, 2000);
    } else {
        mandatoryMessage.style.display = 'none';
        for (let temp = 0; temp < 2; temp++) {
            document.getElementById('canvas' + temp).style.visibility = 'hidden';
        }
        simsubscreennum += 1;
        document.getElementById('canvas' + simsubscreennum).style.visibility = 'visible';
        document.getElementById('nextButton').style.visibility = 'hidden';
    }
}




//for result box
function select() {
    const inputElement = document.getElementById('dropdown');
    const selectedOptionId = inputElement.value;
    const resultbox = document.getElementById('resultbox');

    const selectedOption = toggle.checked
        ? answerOptions.find(option => option.id === parseInt(selectedOptionId))
        : questionOptions.find(option => option.id === parseInt(selectedOptionId));

    if (selectedOption) {
        resultbox.textContent = selectedOption.text;
    } else {
        resultbox.textContent = "";
    }
}
document.getElementById('dropdown').onchange = select;




//for dropdown and toggle 
const dropdown = document.getElementById("dropdown");
const toggle = document.getElementById("toggle");

let selectedOptionId = null;

function updateDropdownOptions() {
    dropdown.innerHTML = "";
    const allOptions = toggle.checked ? answerOptions : questionOptions;

    allOptions.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option.id;
        optionElement.textContent = option.text;
        dropdown.appendChild(optionElement);

        if (option.id === selectedOptionId) {
            dropdown.value = option.id;
        }
    });
}

toggle.addEventListener("change", function () {
    updateDropdownOptions();
});

updateDropdownOptions();

dropdown.addEventListener("change", function () {
    selectedOptionId = parseInt(dropdown.value);
});

selectedOptionId = parseInt(dropdown.value);

updateDropdownOptions();





//for question answer selection
function select1() {
    const inputElement = document.getElementById('dropdown');
    const selectedOptionId = inputElement.value;
    const resultbox = document.getElementById('qbox');
    const toggle = document.getElementById('toggle');

    const selectedQuestion = questionOptions.find(option => option.id === parseInt(selectedOptionId));
    const selectedAnswer = answerOptions.find(option => option.id === parseInt(selectedOptionId));

    if (selectedQuestion && !toggle.checked) {
        resultbox.textContent = "Question: " + selectedQuestion.question;
    } else if (selectedAnswer && toggle.checked) {
        resultbox.textContent = "Answer: " + selectedAnswer.question;
    } else {
        resultbox.textContent = "";
    }
}

document.getElementById('dropdown').onchange = select;





//for audio and morse code
let codeIndex = 0;
let codeInterval;
let dotAudioElement;
let dashAudioElement;
let playMorseCode = false;
let paused = false; // Set paused to true initially

function initializeAudio() {
    dotAudioElement = new Audio('dot.wav');
    dashAudioElement = new Audio('dash.wav');
}

function select2() {
    const inputElement = document.getElementById('dropdown');
    const selectedOptionId = inputElement.value;
    const resultbox = document.getElementById('codebox');

    const selectedOption = toggle.checked
        ? answerOptions.find(option => option.id === parseInt(selectedOptionId))
        : questionOptions.find(option => option.id === parseInt(selectedOptionId));

    if (selectedOption && playMorseCode) {
        const code = selectedOption.code;
        codeIndex = 0;
        clearInterval(codeInterval);

        codeInterval = setInterval(function () {
            if (codeIndex < code.length) {
                const currentChar = code[codeIndex];
                resultbox.textContent = code.substring(0, codeIndex + 1);

                if (currentChar === '.') {
                    dotAudioElement.play();
                } else if (currentChar === '-') {
                    dashAudioElement.play();
                }

                codeIndex++;
            } else {
                clearInterval(codeInterval);
            }
        }, 1000);
    } else {
        resultbox.textContent = "";
    }
}

document.getElementById('dropdown').onchange = select2;

function play() {
    initializeAudio();
    playMorseCode = !playMorseCode;
    if (playMorseCode) {
        select2();
    }
}

function pause() {
    paused = !paused;
    if (paused) {
        clearInterval(codeInterval);
    } else {
        select2();
    }
}

const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");

playButton.addEventListener("click", play);
stopButton.addEventListener("click", stop);

const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", pause);





//for nav previous and reset
function resetCurrentPage() {
    if (simsubscreennum === 1) {
    } 
    else if (simsubscreennum === 2) {
    }

    clearInterval(codeInterval);
    if (dotAudioElement) {
        dotAudioElement.pause();
        dotAudioElement.currentTime = 0;
    }
    if (dashAudioElement) {
        dashAudioElement.pause();
        dashAudioElement.currentTime = 0;
    }
}

function clearSelectionsOnCurrentPage() {
    const inputElement = document.getElementById("dropdown");
    inputElement.value = "";
    const codebox = document.getElementById("codebox");
    codebox.innerText = "";
}

function navPrev() {
    clearSelectionsOnCurrentPage();
    resetCurrentPage();
    document.getElementById("canvas" + simsubscreennum).style.visibility = "hidden";
    simsubscreennum -= 1;
    document.getElementById("canvas" + simsubscreennum).style.visibility = "visible";
    if (simsubscreennum === 0) {
        document.getElementById("nextButton").style.visibility = "hidden";
    }
}
const prevButton = document.getElementById("prevButton");
prevButton.addEventListener("click", navPrev);