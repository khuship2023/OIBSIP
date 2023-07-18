let CelciusInput = document.querySelector('#Celcius > input')
let FarhrenhitInput = document.querySelector('#Farhrenhit > input')
let kelvinInput = document.querySelector('#Kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number) {
    return Math.round(number * 100) / 100
}

CelciusInput.addEventListener('input', funtion(){
    let cTemp = parseFloat(CelciusInput.value)
    let fTemp = (cTemp * (9 / 5)) + 32
    let kTemp = cTemp + 273.15

 FarhrenhitInput.value = roundNumber(ftemp)
  kelvinInput.value = roundNumber(ktemp)
})