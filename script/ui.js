function UpdateLength(elementValue) // Diese Funktion wird aufgerufen um den Slider und die Zahlenbox immer auf dem selben Stand zu halten
{
    document.getElementById("lengthInputSlider").value = elementValue;  // Beide Felder werden mit dem Eingabewert überschrieben
    document.getElementById("lengthInput").value = elementValue;
    
    passwordLength = elementValue

    CheckPassword();    // Als letztes wird die Stärke des Passwortes geprüft
}


function PasswordStrengthAnimate()  // Diese Funktion animiert die Breite der Sträke Leiste anhand einer Passwort "Score"
{
    var maxScore = 770;
    var percentage;

    percentage = Math.min(((100 / maxScore) * score), 100);     // Hier wird die Prozentanzahl des Balkens ausgerechnet und bei 100% geclamped

    

    console.log(percentage);    // Zu debugging Zwecken wird auch immer die Stärke des Passwortes (Prozentual) in die Konsole geschrieben

    document.getElementById("securityBar").style.width = percentage + "%";  // Hier wird die width (%) der Leiste gesetzt
 

    if (percentage < 50)    // Hier wird die Farbe der Leiste Geändert, warscheinlich einfacher mit HSL farbmischung
    {
        document.getElementById("securityBar").style.backgroundColor = "rgb(255," + (percentage * 2.55) + ",0)";
    }
    else
    {
        document.getElementById("securityBar").style.backgroundColor = "rgb(" + (200 - (percentage * 2)) + ",200,0)";
    }
}


function CheckboxToggle(element)    // Diese Funktion toggle Schaltet eine Checkbox (an => aus, aus => an)
{
    if (element.checked == true)
    {
        element.checked = false;
    } 
    else
    {
        element.checked = true;
    }

    LetterSelect();     // Als letztes wird die Stärke des Passwortes geprüft
}


function CopyToClipboard() {    // Diese Funktion wird verwendet um das Passwort in das Clipboard zu kopieren
    var copyText = document.getElementById("hiddenInput");


    document.getElementById("hiddenInput").value = document.getElementById("passwordOutput").innerHTML;     // Die Werte im ausgabe Feld werden auf ein verstecktes input Feld kopiert

    
    copyText.select();  // Das Feld wird ausgewählt
    copyText.setSelectionRange(0, 99999);


    document.execCommand("copy");   // Hier wird das ausgewählte Feld kopiert

    console.log(document.getElementById("hiddenInput").value);  // Das kopierte Passwort wird für debugging Zwecke in der Konsole geloggt
}