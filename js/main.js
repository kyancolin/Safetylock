// Variabelen selecteren
var naamurl = document.getElementById("js--naamurl");
var wachtwoord = document.getElementById("js--wachtwoord");
var button = document.getElementById("js--buttonwwnaam");
var allContent = document.querySelector(".ALL-CONTENT");
var showAllButton = document.getElementById("js--showall");
var ReverseButton = document.getElementById("js--reverse-button");

// Wacht totdat er een klik op de button is 

button.addEventListener("click", function () {
    // Zodra er een klik word gedetecteerd word er gecheckt of er daadwerkelijk een input is ingevoerd 
    if (naamurl.value.trim() !== "", wachtwoord.value.trim() !== "") {
        // Als dit zo is word er een div gemaakt met en een class toegevoegd
        var newItem = document.createElement("div");
        newItem.classList.add("ALL-CONTENT");

        // Zoals je hier ziet word er vervolgens iets in de zojuist aangemaakte class toegevoegd 
        // Natuurlijk zou dit niet allemaal kunnen zonder de appendchild
        newItem.innerHTML =
            `<p class="small-title">${naamurl.value}</p>
            <input class="input" type="password" value="${wachtwoord.value}" readonly>
            <button class="button show-button show">Show</button>
            <button class="button delete-button delete">Verwijder</button>`;
        allContent.appendChild(newItem);

        naamurl.value = "";
        wachtwoord.value = "";

        // Deze spreek voor zeg voor maar zodra de muisknop geklikt wordt voert deze functie uit
        // Namelijk het veranderd de type van de input het gaat van password naar text 
        // Voor context als je de input type veranderd dan kan je het zien zonder kan je het niet zien
        newItem.querySelector(".show-button").addEventListener("mousedown", function () {
            var inputField = this.parentElement.querySelector("input");
            inputField.type = "text";
        });

        // Deze spreekt ook voor zichzelf
        // Hier wordt de input type ook weer veranderd terug naar text 
        newItem.querySelector(".show-button").addEventListener("mouseup", function () {
            var inputField = this.parentElement.querySelector("input");
            inputField.type = "password";
        });

        // Hierbij word de delete button de hetzelfde gedaan een addeventlistener waar er word gewacht op een click
        // zodra een click word gedetecteerd dan worden de items weggehaald 
        newItem.querySelector(".delete-button").addEventListener("click", function () {
            newItem.remove();
        });
    }
});

// Bij deze showallbutton word er ook gewacht op een mousedown in principe goeft mousedown niet het kan ook een click zijn
// Maar goed, wat doet het? Nou allereerst word er gewacht op een click na deze click worden alle inputs met de type password opgehaald
// Daarna worden deze allemaal veranderd naar een andere type 
showAllButton.addEventListener("mousedown", function () {
    var passwords = document.querySelectorAll(".input[type='password']");
    passwords.forEach(function (password) {
        password.type = "text";
    });
    setTimeout(function () {
        passwords.forEach(function (password) {
            password.type = "password";
        });
    }, 1500);
});

// Reverse functie eerst word de id opgehaald
// Daarna een if statement er wordt gecheckt of de flex direction in row is 
// Zo niet word het veranderd
// Zo wel wordt het alsnog veranderd zie coded
function reverse() {
    var body = document.getElementById("js--wrapper");
    if (body.style.flexDirection === "row") {
        body.style.flexDirection = "row-reverse";
    } else {
        body.style.flexDirection = "row";
    }
}

// Als allerlaatste de reverse button moet natuurlijk activeren op de variabele 
var reverseButton = document.getElementById("js--reverse-button");
reverseButton.addEventListener("click", function () {
    reverse();
});