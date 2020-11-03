
// Global variables
// define an array (list) of strings called Names
var Names = ["Hadrien", "Alexandre", "Laura"];


// Functions
function BodyLoaded()
{

    // call ShowNames function
    ShowNames();

}


function ShowNames()
{

    // get reference to Names object from the DOM (tag with id="Names")
    var DivNames = document.getElementById("Names");
    // assign value to innerHTML property (the HTML content of the tag)
    DivNames.innerHTML = "";

    // for index = 0 to length of Names array
    for (index = 0; index < Names.length; index++)
    {
        // alert(index + " - " + Names[index])
        Prefix = ", ";
        if (index == 0)
            Prefix = ""

        // update DivNames content
        DivNames.innerHTML += Prefix + Names[index];
    }

}


function AddName()
{

    // ask user to enter a name (from a popup modal window)
    var Name = window.prompt("Quel est ton nom ? ");

    // if Name is not an empty string
    if (Name.trim() != "")
        // add Name to Names array
        Names.push(Name)

    // call ShowNames function
    ShowNames();

}


function ChangeNamesColor()
{

    // ask user to enter a color (from a popup modal window)
    var Color = window.prompt("Quelle couleur souhaites-tu ? ");

    // get reference to Names object from the DOM (tag with id="Names")
    var DivNames = document.getElementById("Names");

    // update color sub-property of style property of DivNames
    DivNames.style.color = Color;

}


function MoveNames()
{

    // get reference to Counters object from the DOM (tag with id="Counter")
    var DivCounter = document.getElementById("Counter");
    // get reference to Names object from the DOM (tag with id="Names")
    var DivNames = document.getElementById("Names");

    // update position sub-property of style property of DivNames to absolute
    // (to be able to use top and left absolute positions)
    DivNames.style.position = "absolute";

    // define default position on X axis
    x = 0;

    // create a loop called SleepTime calling the Move sub-function every 5 ms
    var SleepTime = setInterval(Move, 5);

    // sub-function Move
    function Move()
    {
        if (x == 500)
            // if x = 500, stop SleepTime loop
            clearInterval(SleepTime)
        else
        {
            // if x < 500, increment x
            x++;
            // update DivCounter content with x value
            DivCounter.innerHTML = x;
            // update left (x) sub-property of style property of DivNames with x value (in pixels)
            DivNames.style.left = x + "px";
        }
    }

}


function ShowNumbers()
{

    // get reference to Numbers object from the DOM (tag with id="Numbers")
    var DivNumbers = document.getElementById("Numbers");
    // assign value to innerHTML property (the HTML content of the tag)
    DivNumbers.innerHTML = "";

    // for index = 1 to 10
    for (index = 1; index <= 10; index++)
    {
        // add a new div tag to DivNumbers containing index value
        DivNumbers.innerHTML += "<div>" + index + "</div>";
    }

}



// var Name = "Alain";
// var Age = 53;

// var Age = window.prompt("Bonjour" + Name + ", quel âge as-tu ? ");

// var Confirm = window.confirm("Je m'appelle " + Name + " et j'ai " + Age + "ans.");
// if (Confirm)
//     window.alert("Merci d'avoir confirmé ton identité.");
// else
//     window.alert("Ton identité est erronée.");
