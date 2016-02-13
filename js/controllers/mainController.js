(function () {
    'use strict';


    angular.module('feelTheBurn').controller('MainController', ['$scope', 
        function ($scope) {
            
function workOuts(name, amount, mets) {
    this.name = name;
    this.amount = amount;
    this.mets = mets;

}

var exerciseArray = [];

exerciseArray["A"] = { name: "jumping jacks", amount: 50, mets: 8 };
exerciseArray["B"] = { name: "crunches", amount: 20, mets: 4 };
exerciseArray["C"] = { name: "squats", amount: 30, mets: 6 };
exerciseArray["D"] = { name: "push ups", amount: 15, mets: 4 };
exerciseArray["E"] = { name: "wall sit", amount: 10, mets: 2 };
exerciseArray["F"] = { name: "burpees", amount: 20, mets: 8 };
exerciseArray["G"] = { name: "arm circles", amount: 30, mets: 3 };
exerciseArray["H"] = { name: "squats", amount: 20, mets: 6 };
exerciseArray["I"] = { name: "jumping jacks", amount: 30, mets: 8 };
exerciseArray["J"] = { name: "crunches", amount: 15, mets: 4 };
exerciseArray["K"] = { name: "push ups", amount: 10, mets: 4 };
exerciseArray["L"] = { name: "wall sit", amount: 120, mets: 2 };
exerciseArray["M"] = { name: "burpees", amount: 20, mets: 8 };
exerciseArray["N"] = { name: "burpees", amount: 25, mets: 8 };
exerciseArray["O"] = { name: "jumping jacks", amount: 40, mets: 8 };
exerciseArray["P"] = { name: "arm circles", amount: 15, mets: 3 };
exerciseArray["Q"] = { name: "crunches", amount: 30, mets: 4 };
exerciseArray["R"] = { name: "push ups", amount: 15, mets: 4 };
exerciseArray["S"] = { name: "burpees", amount: 30, mets: 8 };
exerciseArray["T"] = { name: "squats", amount: 15, mets: 6 };
exerciseArray["U"] = { name: "arm circles", amount: 30, mets: 3 };
exerciseArray["V"] = { name: "wall sit", amount: 180, mets: 120 };
exerciseArray["W"] = { name: "burpees", amount: 20, mets: 8 };
exerciseArray["X"] = { name: "jumping jacks", amount: 60, mets: 8 };
exerciseArray["Y"] = { name: "crunches", amount: 10, mets: 4 };
exerciseArray["Z"] = { name: "push ups", amount: 20, mets: 4 };


$scope.calculateWorkout = function () {
    var name = $scope.user.name;
    var weight = $scope.user.weight;
    var letter = $scope.user.name.toUpperCase().split("");
    var totalCaloriesBurned = 0;
    
    
    
    var table = document.getElementById("myTableData");


    for (var i = 0; i < name.length; i++) {
        
        var card = document.createElement('md-card');
        var tr = document.createElement('tr');
        var lettersColumn = document.createElement('td');
        var exerciseColumn = document.createElement('td');
        var repsColumn = document.createElement('td');
        var caloriesColumn = document.createElement('td');
        var spacer = document.createElement('td');
        
        var letters = document.createTextNode(letter[i]);
        var exercise = document.createTextNode(exerciseArray[letter[i]].name);
        var reps = document.createTextNode(exerciseArray[letter[i]].amount);
        var calories = document.createTextNode(Math.round(10 * (((exerciseArray[letter[i]].mets) * (weight * .453592) / 200) / ((exerciseArray[letter[i]].amount) / 60)) / 10));
        var calorieCount = Math.round(10 * (((exerciseArray[letter[i]].mets) * (weight * .453592) / 200) / ((exerciseArray[letter[i]].amount) / 60)) / 10);
        totalCaloriesBurned += calorieCount;
        $scope.user.totalCal = totalCaloriesBurned;
        
        card.appendChild(lettersColumn);
        card.appendChild(exerciseColumn);
        card.appendChild(repsColumn);
        card.appendChild(caloriesColumn);
        
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
    
    document.body.appendChild(card);
    $scope.user.name = "";
    $scope.user.weight = "";
}

$scope.clearTable = function () {
    
    var table = document.getElementById("myTableData");
    $scope.user.name = "";
    $scope.user.weight = "";
    $scope.user.totalCal = "0";
    var rows = table.rows;
    var i = rows.length;
    
    while (--i) {
    rows[i].parentNode.removeChild(rows[i]);
    }
} 

}]);

angular.module('feelTheBurn').run();
})();