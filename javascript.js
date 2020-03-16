/* 
Steps:

Create 100 creatures and insert them into the table #table

1) Randomize creature type
2) Randomize stats (STR and Health)
3) Insert data into the table

*/

var nameList = ['Traci','Aisha','Sammie','Neta','Bronwyn','Arlinda','Retta',
    'Georgeanna','Allyn','Mavis','Annabell','Marielle','Alicia',
    'Son','Eleanor','Lolita','Kanesha','Teddy','Vivan','Tana',
    'Dwana','Avelina','Jonathan','Sang','Fanny','Felecia','Kevin',
    'Ivonne','Pandora','Louise','Talia','Valencia','Cameron','Georgina',
    'Ethel','Almeda','Vergie','Stan','Bryant','Kathrine','Beryl','Charolette',
    'Cedric','Dollie','Araceli','Markita','Cristin','Rodney','Rosetta','Elmo',
    'Merna','Berry','Jule','Robin','Manolo','Noella','Kirstin','Dacia','Allegra',
    'Wendy','Roderick','Antone','Ariel','Vernice','Tawanda','Catrina','Rudy','Gaston',
    'Stuart','Jamison','Catalina','Shannan','Janine','Latrisha','Georgiana','Guillermo',
    'Leeanna','Blanche','Marylee','Lucretia','Danika','Miquel','Clint','Gayla','Hallie',
    'Bethann','Christel','Sofia','Ka','Paco','Laverne','Janise','Janeen','Eve','Naomi',
    'Carmella','Tawna','Lorena','Carroll','Philomena','Asa','Baldwin','Berlin','Bowie','Campbell'];

function chooseName(){
    
    
    var nameIndex = (names.length) -1; //Checks for names array length

    
    var namePos = Math.floor((Math.random() * nameIndex) + 0); // Decides a random position to pick a name
    
    var namePicked =  names[namePos];// Assigns the value of that position to the variable we will return
    
    names.splice(namePos, 1); // removes that name from the list
    
    return namePicked; //returns the name
}
    


//I have decided to start everything with a function

function start(){
    
//At first, we empty the table in order for the Reset button to work
    
    document.getElementById("table").innerHTML = "";
    names = nameList.slice(0,nameList.length); //If we just assign it, it gets spliced in both for some reason

for (var i =0;i<100; i++ ){
    
    //Randomize the creature type
    
    /*
     * Type == 1 Witch
     * 
     * Type == 2 Dragon
     * 
     * Type == 3 Snake
     * 
     * Type == 4 River Troll
     * 
     */
    
    var type =  Math.floor((Math.random() * 4) + 1);
    
    //Randomize the row color
    // By changing the colorType formula and the cellColor atributes, you can 
    // Basically choose the colors you want
    colorType = i%2;
    
    if (colorType == 1){
        
        cellColor= "lightblue";
        
    }
    else{
        cellColor = "white";
    }
    
    
    switch (type){
        
        case 1:
            
            var enemyType = "Witch";
            
            var enemyName = chooseName();
            
            var str = Math.floor((Math.random() * 20) + 60);
            
            var hp = Math.floor((Math.random() * 10) + 50);
            
            document.getElementById("table").innerHTML += "<tr style='background-color:"+ cellColor +
            "'><td>" + enemyName + "</td><td>" +
            "<img src='witch.png' alt='witch'>"+
            "</td><td>" + str + "</td> <td>" + hp + "</td><td>" + "TBD" +
            "</td><td>" + "<button class='deletebutton' onclick='deleteCreature(this);'></button> <button class='increasebutton' onclick='hpIncrease(this);'></button> <button class='decreasebutton' onclick='reduceHealth(this);'></button>" + "</td></tr>";
            
            
            break;
        
        case 2:
            
            var enemyType = "Dragon";
            
            var enemyName = chooseName();
            
            var str = Math.floor((Math.random() * 10) + 80);
            
            var hp = Math.floor((Math.random() * 10) + 80);
            
            document.getElementById("table").innerHTML += "<tr style='background-color:"+ cellColor +"'><td>" + enemyName + "</td><td>" + "<img src='dragon.png' alt='dragon'>"
            + "</td><td>" + str + "</td> <td>" + hp + "</td><td>" + "TBD" +
            "</td><td>" + "<button class='deletebutton' onclick='deleteCreature(this);'></button> <button class='increasebutton' onclick='hpIncrease(this);'></button> <button class='decreasebutton' onclick='reduceHealth(this);'></button>" + "</td></tr>";
            
            
            break;
            
        case 3:
            
            var enemyType = "Snake";
            
            var enemyName = chooseName();
            
            var str = Math.floor((Math.random() * 30) + 30);
            
            var hp = Math.floor((Math.random() * 60) + 30);
            
            document.getElementById("table").innerHTML += "<tr style='background-color:"+ cellColor +"'><td>" + enemyName + "</td><td>" + "<img src='snake.png' alt='Snake'>"
            + "</td><td>" + str + "</td> <td>" + hp + "</td><td>" + "TBD" +
            "</td><td>" + "<button class='deletebutton' onclick='deleteCreature(this);'></button> <button class='increasebutton' onclick='hpIncrease(this);'></button> <button class='decreasebutton' onclick='reduceHealth(this);'></button>" + "</td></tr>";
            
            
            break;
            
        case 4:
            
            var enemyType = "River Troll";
            
            var enemyName = chooseName();
            
            var str = Math.floor((Math.random() * 43) + 22);
            
            var hp = Math.floor((Math.random() * 32) + 60);
            
            document.getElementById("table").innerHTML += "<tr style='background-color:"+ cellColor +"'><td>" + enemyName + "</td><td>" + "<img src='troll.png' alt='Troll'>"
            + "</td><td>" + str + "</td> <td>" + hp + "</td><td>" + "TBD" +
            "</td><td>" + "<button class='deletebutton' onclick='deleteCreature(this);'></button> <button class='increasebutton' onclick='hpIncrease(this);'></button> <button class='decreasebutton' onclick='reduceHealth(this);'></button>" + "</td></tr>";
            
            
            break;

            
        
    }

}
//hides the button
starter.style.display = "none";
document.getElementById("rolling").style.visibility = "visible";
document.getElementById("reset").style.visibility = "visible";

}





//boton is button in Spanish, thus Significative yet not a reserved word in Javascript

    
function deleteCreature(boton){ //I cant let this be undone, sorry
    var row = boton.parentNode.parentNode;
    
    if(confirm("Do you wish to delete this creature?")){
        
        table.removeChild(row);
    }
    
}

function hpIncrease(boton){
    var row = boton.parentNode.parentNode;
    var name = row.firstElementChild.innerHTML;
    confirm("Do you wish to increase " + name +"'s health?")
    
}

function reduceHealth(boton){
    var row = boton.parentNode.parentNode;
    var name = row.firstElementChild.innerHTML;
    confirm("Do you wish to decrease " + name +"'s health?")
}

function rolling(){
    
    confirm("X and Y are about to fight, Continue?");
    
}

function resetTable(){
    
    if (confirm("Do you wish to reset the Battlefield?")){
        
        start();
    }
    
}