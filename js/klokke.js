let klokke = new Date();
let timer = klokke.getHours();
let minutter = klokke.getMinutes();
let melding = "";

if (timer >= 5 && timer <= 10) {
    melding = "God morgon!";
} else if (timer >= 11 && timer <= 17) {
    melding = "God dag!";
} else if (timer >= 18 && timer <= 23) {    
    melding = "God kveld!";
} else {
    melding = "God natt!";
}

if (minutter < 10) {
    minutter = "0" + minutter;
}

alert(melding + " Klokka er no " + timer + ":" + minutter);