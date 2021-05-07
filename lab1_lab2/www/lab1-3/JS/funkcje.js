function obliczRate() {
    var kwota = document.getElementById('kwota').value;
    var roczne = document.getElementById('oprRoczne').value;
    var liczbaRat = document.getElementById('liczbaRat').value;

    var miesiac = document.getElementById('oprMies');
    miesiac.value = roczne / 12;

    var rata = document.getElementById('rata');
    rata.value = (kwota * miesiac.value) / (1 - (1 / 1 + miesiac.value) ** liczbaRat);
    if (miesiac.value == NaN || miesiac.value == Infinity ||
        rata.value == NaN || rata.value == Infinity) {
        alert("Błędne dane");
        miesiac.value = "";
        rata.value = "";
    }
}

function calculator() {
    var XNumber, YNumber, result, operation;
    var tab = document.getElementsByName("operator");
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].checked) operation = tab[i].value;
    }
    XNumber = document.getElementById("valueX").value;
    YNumber = document.getElementById("valueY").value;
    switch (operation) {
        case "plus": {
            result = document.getElementById("result");
            result.value = parseInt(XNumber) + parseInt(YNumber);
            break;
        }
        case "minus": {
            result = document.getElementById("result");
            result.value = parseInt(XNumber) - parseInt(YNumber);
            break;
        }
        case "divide": {
            result = document.getElementById("result");
            result.value = parseInt(XNumber) / parseInt(YNumber);
            if (isNaN(result) || isFinite(result)) {
                alert("Can't count");
                result.value = "";
            }
            break;
        }
        case "mult": {
            result = document.getElementById("result");
            result.value = parseInt(XNumber) * parseInt(YNumber);
            break;
        }
    }
}