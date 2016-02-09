"use strict";

function workOuts(name, amount, mets) {
    this.name = name;
    this.amount = amount;
    this.mets = mets;

}

var exerciseArray = [];

exerciseArray["a"] = { name: "jumping jacks", amount: 50, mets: 8 };
exerciseArray["b"] = { name: "crunches", amount: 20, mets: 4 };
exerciseArray["c"] = { name: "squats", amount: 30, mets: 6 };
exerciseArray["d"] = { name: "push ups", amount: 15, mets: 4 };
exerciseArray["e"] = { name: "wall sit", amount: 10, mets: 2 };
exerciseArray["f"] = { name: "burpees", amount: 20, mets: 8 };
exerciseArray["g"] = { name: "arm circles", amount: 30, mets: 3 };
exerciseArray["h"] = { name: "squats", amount: 20, mets: 6 };
exerciseArray["i"] = { name: "jumping jacks", amount: 30, mets: 8 };
exerciseArray["j"] = { name: "crunches", amount: 15, mets: 4 };
exerciseArray["k"] = { name: "push ups", amount: 10, mets: 4 };
exerciseArray["l"] = { name: "wall sit", amount: 120, mets: 2 };
exerciseArray["m"] = { name: "burpees", amount: 20, mets: 8 };
exerciseArray["n"] = { name: "burpees", amount: 25, mets: 8 };
exerciseArray["o"] = { name: "jumping jacks", amount: 40, mets: 8 };
exerciseArray["p"] = { name: "arm circles", amount: 15, mets: 3 };
exerciseArray["q"] = { name: "crunches", amount: 30, mets: 4 };
exerciseArray["r"] = { name: "push ups", amount: 15, mets: 4 };
exerciseArray["s"] = { name: "burpees", amount: 30, mets: 8 };
exerciseArray["t"] = { name: "squats", amount: 15, mets: 6 };
exerciseArray["u"] = { name: "arm circles", amount: 30, mets: 3 };
exerciseArray["v"] = { name: "wall sit", amount: 180, mets: 120 };
exerciseArray["w"] = { name: "burpees", amount: 20, mets: 8 };
exerciseArray["x"] = { name: "jumping jacks", amount: 60, mets: 8 };
exerciseArray["y"] = { name: "crunches", amount: 10, mets: 4 };
exerciseArray["z"] = { name: "push ups", amount: 20, mets: 4 };


function addRow() {

    clearTable();
    
    var myName = document.getElementById("name");
    var weight = document.getElementById("weight");
    var table = document.getElementById("myTableData");
    var totalCal = 0;
    var totalCaloriesBurned = document.getElementById("totalCaloriesBurned");
    var nameLength = myName.value.length;
    var letter = myName.value.toLowerCase().split("");


    for (var i = 0; i < nameLength; i++) {
        var tr = document.createElement('tr');

        var lettersColumn = document.createElement('td');
        var exerciseColumn = document.createElement('td');
        var repsColumn = document.createElement('td');
        var caloriesColumn = document.createElement('td');
        

        var letters = document.createTextNode(letter[i]);
        var exercise = document.createTextNode(exerciseArray[letter[i]].name);
        var reps = document.createTextNode(exerciseArray[letter[i]].amount);
        var calories = document.createTextNode(((exerciseArray[letter[i]].mets) * (weight.value * .453592) / 200) / ((exerciseArray[letter[i]].amount) / 60));
        totalCal += ((exerciseArray[letter[i]].mets) * (weight.value * .453592) / 200) / ((exerciseArray[letter[i]].amount) / 60);


        lettersColumn.appendChild(letters);
        exerciseColumn.appendChild(exercise);
        repsColumn.appendChild(reps);
        caloriesColumn.appendChild(calories);

        tr.appendChild(lettersColumn);
        tr.appendChild(exerciseColumn);
        tr.appendChild(repsColumn);
        tr.appendChild(caloriesColumn);


        table.appendChild(tr);
    }
    document.body.appendChild(table);

    document.getElementById("totalCaloriesBurned").innerHTML = totalCal;
    
    
}

function clearTable() {
    var table = document.getElementById("myTableData");
    
    
    var rows = table.rows;
    var i = rows.length;
    while (--i) {
    rows[i].parentNode.removeChild(rows[i]);
  }
    document.getElementById("totalCaloriesBurned").innerHTML = "";
    
}






