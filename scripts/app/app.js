var app = angular.module("App", [
    "LocalStorageModule"
]);

app.run(function (localStorageService) {
    var students = [
        {
            name: "Toma Puljak",
            gender: "M",
            dateOfAddition: new Date(Math.random() * new Date())
        }
    ];
    localStorageService.set("students", angular.toJson(students));
});

app.controller("FirstController", function ($scope, localStorageService) {
    $scope.addingStudent = false;
    $scope.addNewStudent = function () {
        $scope.addingStudent = !$scope.addingStudent;
    };

    $scope.confirm = function () {
        /*var student = {
            name: $scope.name,
            gender: $scope.gender,
            dateofAddition: new Date(Math.random() * new Date())
        }
        localStorageService.set("students", angular.toJson(student));*/
        var radioValue = {};
        console.log($scope.radioValue);
        $scope.addingStudent = false;
    };
});