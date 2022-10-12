const kaja = {
    sajttorta: ["Sajttorta",250],
    hamburger: ["Hamburger",450],
    sushi: ["Sushi",150],
};

let ossz = 0;
document.getElementById('ossz').textContent = ossz;

document.getElementById('food1').onclick = hozzaad1;
document.getElementById('food2').onclick = hozzaad2;
document.getElementById('food3').onclick = hozzaad3;
document.getElementById('clear').onclick = clear;

function hozzaad1() {
    ossz += kaja.sajttorta[1];
    document.getElementById('output').innerHTML += "<li class='list-group-item'>"+kaja.sajttorta[0]+" ("+kaja.sajttorta[1]+") </li>";
    document.getElementById('ossz').textContent = ossz;
}

function hozzaad2() {
    ossz += kaja.hamburger[1];
    document.getElementById('output').innerHTML += "<li class='list-group-item'>"+kaja.hamburger[0]+" ("+kaja.hamburger[1]+") </li>";
    document.getElementById('ossz').textContent = ossz;
}

function hozzaad3() {
    ossz += kaja.sushi[1];
    document.getElementById('output').innerHTML += "<li class='list-group-item'>"+kaja.sushi[0]+" ("+kaja.sushi[1]+") </li>";
    document.getElementById('ossz').textContent = ossz;
}

function clear() {
    ossz = 0;
    document.getElementById('output').innerHTML = "";
    document.getElementById('ossz').textContent = ossz;
}