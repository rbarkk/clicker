const BUTTON = {
    CLICK: document.querySelector(".clicked"),
    NUMBER: document.querySelector(".number-click"),
    NUMBER_UPGRADE: document.querySelector(".number-upgrade"),
    UPGRADE: document.querySelector(".upgrade"),
}
const BANK = {
    BANK: document.querySelector(".bank"),
    MONEY: document.querySelector(".money"),
    NUMBER: document.querySelector(".number-bank"),
}
let numberClick = Number( BUTTON.NUMBER.innerText );
let numberUpgrade = 2000;
let numberBank = Number( BANK.NUMBER.innerText );
let trillion = 1000000000000;

BANK.BANK.addEventListener("click", () => {
    let password = prompt("Хочешь хакнуть? скажи пароль", "1234");
    if (password === "1234"){
        updateMoney()
    } else {
        alert("Пароль неверный")
    }
});

BUTTON.CLICK.addEventListener("click", () => {
    BANK.NUMBER.textContent = String(numberBank + numberClick);
    numberBank = Number(BANK.NUMBER.innerText)
    viewUpgrade(numberBank,numberUpgrade)
    console.log(numberBank);
    console.log(numberUpgrade);
}, numberClick, numberBank, numberUpgrade)

BUTTON.UPGRADE.addEventListener("click", () => {
    if (numberClick === 20) {
        numberClick = 100
        numberUpgrade = 10000
        BANK.NUMBER.textContent -= String(2000)
        Upgrade(numberClick)
    } else if (numberClick === 100) {
        numberClick = 200
        numberUpgrade = 20000
        BANK.NUMBER.textContent -= String(10000)
        Upgrade(numberClick)
    } else if (numberClick === 200) {
        numberClick = 500
        numberUpgrade = 50000
        BANK.NUMBER.textContent -= String(20000)
        Upgrade(numberClick)
    } else if (numberClick === 500) {
        numberClick = 1000
        numberUpgrade = 100000
        BANK.NUMBER.textContent -= String(50000)
        Upgrade(numberClick)
    } else if (numberClick === 1000) {
        numberClick = 2000
        numberUpgrade = 200000
        BANK.NUMBER.textContent -= String(100000)
        Upgrade(numberClick)
    } else if (numberClick === 2000) {
        numberClick = 5000
        numberUpgrade = 500000
        BANK.NUMBER.textContent -= String(200000)
        Upgrade(numberClick)
    } else if (numberClick === 5000) {
        numberClick = 10000
        numberUpgrade = 1000000
        BANK.NUMBER.textContent -= String(500000)
        Upgrade(numberClick)
    } else if (numberClick === 10000) {
        numberClick = 50000
        numberUpgrade = 5000000
        BANK.NUMBER.textContent -= String(1000000)
        Upgrade(numberClick)
    } else {
        BUTTON.UPGRADE.remove()
        alert('Full upgrade')
    }
})

function viewUpgrade ( numberBank, numberUpgrade ) {
    if ( numberBank >= numberUpgrade ){
        BUTTON.UPGRADE.style.visibility = "visible";
    } else {
        BUTTON.UPGRADE.style.visibility = "hidden";
    }
    BUTTON.NUMBER_UPGRADE.textContent = String( numberUpgrade );

    if( numberBank >= trillion ) {
        let question = "Ты заработал трилион рублей. А это значит что " +
            "ты прошел игру. Хочешь ли ты начать все заново?"
        let result = confirm( question );
        if ( result ) {
            BANK.NUMBER.textContent = String(prompt("Сколько хочешь денег?"));
            numberBank = Number( BANK.NUMBER.innerText )
        } else {
            alert("Приятной игры")
        }
    }
}
function Upgrade ( numberClick ) {
    BUTTON.NUMBER.textContent = String( numberClick )
    numberBank = Number(BANK.NUMBER.innerText)
    BUTTON.UPGRADE.style.visibility = "hidden";
}
function updateMoney() {
    let number = Number(prompt("Пароль верный, выбери сумму", "1000"))
    if ( number === !NaN ) {
        BANK.NUMBER.textContent = String( number )
        numberBank = Number(BANK.NUMBER.innerText)
    } else {
        alert("Аааааа надо число вводить")
    }
}