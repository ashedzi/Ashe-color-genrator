const numbersAndLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,`A`,`B`,`C`,`D`,`E`,`F`]
let button = document.getElementById(`button`)
let firstColorBox = document.getElementById(`first-color-box`)
let firstHexCode = document.getElementById(`first-hex-code`)

let SecondColorBox = document.getElementById(`second-color-box`)
let SecondHexCode = document.getElementById(`second-hex-code`)

let ThirdColorBox = document.getElementById(`third-color-box`)
let ThirdHexCode = document.getElementById(`third-hex-code`)


function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 16)
    return randomNumber
}
button.addEventListener(`click`, function(){
    let hexCodeFirstBox = `#`
    for(let myFirstLoop = 0; myFirstLoop<6; myFirstLoop++){
       let randomHex = numbersAndLetters[generateRandomNumber()]
       hexCodeFirstBox += randomHex
    }

    firstColorBox.style.backgroundColor = hexCodeFirstBox
    firstHexCode.innerText = hexCodeFirstBox


    let hexCodeSecondBox = `#`
     for(let mySecondLoop = 0; mySecondLoop<6; mySecondLoop++){
       let randomHex = numbersAndLetters[generateRandomNumber()]
       hexCodeSecondBox += randomHex
    }

    SecondColorBox.style.backgroundColor = hexCodeSecondBox
    SecondHexCode.innerText = hexCodeSecondBox


    let hexCodeThirdBox = `#`
    for(let myThirdLoop = 0; myThirdLoop<6; myThirdLoop++){
        let randomHex = numbersAndLetters[generateRandomNumber()]
        hexCodeThirdBox += randomHex
     }
 
     ThirdColorBox.style.backgroundColor = hexCodeThirdBox
     ThirdHexCode.innerText = hexCodeThirdBox
 

    

})

// button.addEventListener(`click`, function(){
//     let hexCodeSecondBox = `#`
//     for(let myFirstLoop = 0; myFirstLoop<6; myFirstLoop++){
//        let randomHex = numbersAndLetters[generateRandomNumber()]
//        hexCodeSecondBox += randomHex
//     }

//     SecondColorBox.style.backgroundColor = hexCodeSecondBox
//     SecondHexCode.innerText = hexCodeSecondBox

// })

// button.addEventListener(`click`, function(){
//     let hexCodeThirdBox = `#`
//     for(let myFirstLoop = 0; myFirstLoop<6; myFirstLoop++){
//        let randomHex = numbersAndLetters[generateRandomNumber()]
//        hexCodeThirdBox += randomHex
//     }

//     ThirdColorBox.style.backgroundColor = hexCodeThirdBox
//     ThirdHexCode.innerText = hexCodeThirdBox

// })
