var app = angular.module('App', [
    'LocalStorageModule'
]);

app.run(function (localStorageService, $state) {
    var students = [
        {
            name: "Toma Puljak",
            gender: "M",
            dateOfAddition: new Date(Math.random() * new Date())
        }
    ];
    localStorageService.set('students', angular.toJson(students));
});

app.controller("FirstController", function ($scope, localStorageService, $state) {
    $scope.addingStudent = false;
    $scope.addNewStudent = function () {
        $scope.addingStudent = !$scope.addingStudent;
    };

    $scope.confirm = function () {
        $state.students.Add({
            name: element(by.model('name')),
            gender: element(by.model('gender')),
            dateofAddition: new Date(Math.random() * new Date())
        });
        $scope.addingStudent = false;
    };
});