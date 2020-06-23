function Init() 
{   // Diese Fuktion wird immer ausgeführt wenn die Webseite fertig geladen hat
    LetterSelect();  // Hier wird anhand der Nutzerparameter, ein Array mit allen ausgewählten Zeichen erstellt
}

var code;
var passwordLength = 8;

function GeneratePassword() 
{   // Die Hauptfunktion des Pw Generators, hier wird aus einem Array an zeichen und der Länge ein passwort erstellt.
    LetterSelect();     // Hier wird anhand der Nutzerparameter, ein Array mit allen ausgewählten Zeichen erstellt


    code = "";
    
    if (hodgepodge.length < 1) 
    {    // Wenn die Länge des Zeichenarrays 0 ist (keine checkboxen sind ausgewählt) wird ein error angezeigt
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        alert("Haha very funny, now get Rickrolled");
        return;
    }

    
    for (i=0; i<passwordLength; i++) 
    {      // Funktion wird so oft wie die Länge des Passwortes ausgeführt
        random = Math.floor(Math.random() * hodgepodge.length);     // Hier wird eine zufällige zahl von 0 bis x ausgewählt (x ist die Länge des zeichenarrays)
        code += hodgepodge[random];     // Nun wird das Zeichen mit dem Index random, dem endgültigen ergebniss hinzugefügt
    }
    
    
    document.getElementById("passwordOutput").innerHTML = code;     // Hier wird das Passwort in die Ausgabe geschrieben
}



var hodgepodge = new Array();

function LetterSelect()
{
    // Hier ist eine Liste an Zeichen die je nach einstellungen aus oder eingeschalten werden kann

    var numbers = GenerateLetterArray(48, 57);      // numbers ["1","2","3","4","5","6","7","8","9"]
    var lettersS = GenerateLetterArray(97, 122);    // small letters ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var lettersL = GenerateLetterArray(65, 90);    // large letters ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var special = ["!","$","%","&","#","?","§"];
    var words = ["Apfel","Mango","Banane","Kiwi","Birne","Erdbeere"];

    hodgepodge = [];

    // Wenn die jeweiligen Checkboxen ausgeschalten sind, werden die arrays gecleared ("ausgeschalten")

    if (!document.getElementById("numbersCheck").checked) 
    {
        numbers = [];
    }

    if (!document.getElementById("lettersSCheck").checked) 
    {
        lettersS = [];
    }

    if (!document.getElementById("lettersLCheck").checked) 
    {
        lettersL = [];
    }

    if (!document.getElementById("specialCheck").checked) 
    {
        special = [];
    }

    if (!document.getElementById("wordsCheck").checked) 
    {
        words = [];
    }

    
    // Alle übrigen Zeichen werden zu einem Array kombiniert
    hodgepodge = hodgepodge.concat(numbers).concat(lettersS).concat(lettersL).concat(special).concat(words);

    CheckPassword();    // Als letztes wird die Stärke des Passwortes geprüft
}



var score;

function CheckPassword() 
{  // In dieser Funktion wird die geschätzte Stärke des Passwortes berechnet
    score = 0;

    score += passwordLength * hodgepodge.length;    // Die Stärke des Passwortes wird berechnet, indem die Stärke des Passwortes mit der Anzahl ausgewählter Zeichen multipliziert wird

    PasswordStrengthAnimate();  // Als Letztes wird die Passwort Stärke Leiste animiert
}

function GenerateLetterArray(asciiMin, asciiMax) {      // Diese Funktion Generiert einen Array mit Zeichen anhand eines Ascii Code Anfangs Wert und eines Ascii Code End Wert
    if (asciiMin>asciiMax) 
    {        // Wenn das minimum größer als das maximum ist, wird ein error in die konsole geschrieben
        console.log("Error: ascii minimum is larger than ascii maximum in function GenerateLetterArray()");
        return;
    }

    var letterArray = new Array();

    for (i=asciiMin; i<=asciiMax; i++)
    {
        letterArray.push(String.fromCharCode(i));
    }

    return (letterArray);
}