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
        $scope.gender = "M";
    };
	$scope.students = angular.fromJson(localStorageService.get("students"));
    $scope.confirm = function () {
        if (!$scope.name) {
            alert("Name is required!");
            return;
        }
            
        var student = {
            name: $scope.name,
            gender: $scope.gender,
            dateOfAddition: new Date(Math.random() * new Date())
        }

		$scope.students.push(student);
        localStorageService.set("students", angular.toJson($scope.students));
        $scope.name = "";
        $scope.addingStudent = false;
    };
});