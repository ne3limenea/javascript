var farm_map = [2, 3, 0, 1, 1, 0, 0, 0, 0, 0];
var farm_map_initial = [2, 3, 0, 1, 1, 0, 0, 0, 0, 0];
var prices = [15, 5, 10];

var farm_div = document.getElementById('farm');
var profit = 0;

const N_PROBE = 3; // Numarul de incercari la prompt daca se introduce coordonata inafara cimpului
const VISUAL_MODE = confirm('Activate visual mode cell selector?'); // Se alege modul de selectare a celulelor
const INITIAL_MAP = false; // true - ia datele din farm_map_initial; false - face mapa curata

function plantCorn() {
    var pos = whereToPlant('corn');
    if (getPlant(pos, 'corn', 1)) {
        farm_map[pos] = 1;
        showMap();
    }
}

function plantPotato() {
    var pos = whereToPlant('potato');
    if (getPlant(pos, 'potato', 2)) {
        farm_map[pos] = 2;
        showMap();
    }
}

function plantTomato() {
    var pos = whereToPlant('tomato');
    if (getPlant(pos, 'tomato', 3)) {
        farm_map[pos] = 3;
        showMap();
    }
}

function setActive(id) {
    // https://www.w3schools.com/howto/howto_js_active_element.asp
    if (VISUAL_MODE) {
        var selected_box = document.getElementById(id);
        var active_boxes = document.getElementsByClassName('active');
        for (var i = 0; i < active_boxes.length; i++) {
            var current_active_box = document.getElementsByClassName("active");
            current_active_box[0].className = current_active_box[0].className.replace(' active', '');
        }
        selected_box.className += " active";
    }
}

function whereToPlant(culture) {
    var coordinate;
    if (VISUAL_MODE) {
        if (document.getElementsByClassName('active').length > 0) {
            coordinate = document.getElementsByClassName('active')[0].id;
        } else {
            alert('You have not selected a cell! \nFirst select a single cell and then indicate the crop to plant.');
        }
    } else {
        coordinate = +prompt(`In which cell you want to plant ${culture}?`);

        if (coordinate <= 0 || coordinate > (farm_map.length - 1)) {
            var n = 0;
            do {
                coordinate = +prompt(`The cell number is outside the field coordinates! \nChoose the cell number inside the field 1 - ${farm_map.length}?`);
                n++;
            } while (n < N_PROBE && coordinate <= 0 && coordinate > (farm_map.length - 1));

            if (coordinate <= 0 || coordinate > (farm_map.length - 1)) {
                coordinate = 0;
            }
        }
        coordinate -= 1;
    }
    return coordinate;
}

function getPlant(position, culture, id_culture) {
    var pass = false;

    if (position >= 0 && farm_map[position] == 0) {
        pass = true;
    } else if (position >= 0 && farm_map[position] != id_culture && confirm(`The cell ${+position + 1} is occupied! \nClear this cell and plant ${culture}?`)) {
        farm_map[position] = 0;
        pass = true;
    } else if (farm_map[position] == id_culture) {
        culture = sentenceCase(culture);
        alert(`${culture} is already planted in this cell.`)
    }

    return pass;
}

function showMap() {
    farm_div.innerHTML = "";
    for (var i = 0; i < farm_map.length; i++) {
        if (farm_map[i] == 1) {
            farm_div.innerHTML += `<div id="${i}" onclick="setActive(${i});" class="box corn" title="Corn - 15 coins profit"></div>`;
        } else if (farm_map[i] == 2) {
            farm_div.innerHTML += `<div id="${i}" onclick="setActive(${i});" class="box potato" title="Potato - 5 coins profit"></div>`;
        } else if (farm_map[i] == 3) {
            farm_div.innerHTML += `<div id="${i}" onclick="setActive(${i});" class="box tomato" title="Tomato - 10 coins profit"></div>`;
        } else {
            farm_div.innerHTML += `<div id="${i}" onclick="setActive(${i});" class="box" title="Empty field - 0 coins profit"></div>`;
        }
    }
}

function clearMap() {
    for (var i = 0; i < farm_map.length; i++) {
        if (INITIAL_MAP) {
            farm_map[i] = farm_map_initial[i];
        } else {
            farm_map[i] = 0;
        }
        showMap();
    }
}

function clearSelection() {
    var active_boxes = document.getElementsByClassName('active');
    for (var i = 0; i < active_boxes.length; i++) {
        var current_active_box = document.getElementsByClassName("active");
        current_active_box[0].className = current_active_box[0].className.replace(' active', '');
    }
}

function calcProfit() {
    var culture;
    profit = 0;

    for (var i = 0; i < farm_map.length; i++) {
        if (farm_map[i] != 0 && farm_map[i] != null && farm_map[i] != '') {
            culture = farm_map[i];
            profit += prices[culture - 1];
        }
    }

    alert(`${profit} coins - your current hypothetical profit.`)
}

function sentenceCase(word) {
    var word_sentence_case = word[0].toUpperCase() + word.slice(1);
    return word_sentence_case;
}

showMap();
