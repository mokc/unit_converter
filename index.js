/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById('convert-btn')
const inputEl = document.getElementById('input-el')

const lenCalc = document.getElementById('len-calculation')
const volCalc = document.getElementById('vol-calculation')
const massCalc = document.getElementById('mass-calculation')

convertBtn.addEventListener('click', function() {
    val = inputEl.value
    
    const mToFt = convertMetersToFeet(val)
    const ftToM = convertFeetToMeters(val)
    const lenStr = `${val} meters = ${mToFt} feet | ${val} feet = ${ftToM} meters`
    render(lenCalc, lenStr)

    const lToG = convertLitersToGallons(val)
    const gToL = convertGallonsToLiters(val)
    const volStr = `${val} liters = ${lToG} gallons | ${val} gallons = ${gToL} liters`
    render(volCalc, volStr)

    const kgToLb = convertKilogramsToPounds(val)
    const lbToKg = convertPoundsToKilograms(val)
    const massStr = `${val} kilos = ${kgToLb} pounds | ${val} pounds = ${lbToKg} kilos`
    render(massCalc, massStr)
})

function convertMetersToFeet(meters) {
    return (meters * 3.28084).toFixed(3)
}

function convertFeetToMeters(feet) {
    return (feet / 3.28084).toFixed(3)
}

function convertLitersToGallons(liters) {
    return (liters * 0.264172).toFixed(3)
}

function convertGallonsToLiters(gallons) {
    return (gallons / 0.264172).toFixed(3)
}

function convertKilogramsToPounds(kgs) {
    return (kgs * 2.20462).toFixed(3)
}

function convertPoundsToKilograms(lbs) {
    return (lbs / 2.20462).toFixed(3)
}

function render(el, str) {
    el.innerText = str
}