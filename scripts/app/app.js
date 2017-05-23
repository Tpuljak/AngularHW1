var app = angular.module("App", [
    "LocalStorageModule"
]);

app.run(function (localStorageService) {
    var students = [
        {
            name: "Toma Puljak",
            gender: "M",
            dateOfAddition: new Date(Math.random() * new Date())
        },
        {
            name: "Mario Čerpnja",
            gender: "Ž",
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
    $scope.full = false;

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
        if ($scope.students.length >= 10) {
            $scope.full = true;
        }
    };

    $scope.studentsCopy = $scope.students;
    $scope.boysChange = function () {
        if ($scope.boysCheckbox)
            $scope.students = $scope.students.filter((student) => student.gender != "M");
        else
            $scope.students = $scope.students.concat($scope.studentsCopy.filter((student) => student.gender == "M"));
    }
    $scope.girlsChange = function () {
        if ($scope.girlsCheckbox)
            $scope.students = $scope.students.filter((student) => student.gender != "Ž");
        else
            $scope.students = $scope.students.concat($scope.studentsCopy.filter((student) => student.gender == "Ž"));
    }
    $scope.searchStudents = function () {
        $scope.students = _.filter($scope.students, function(o) { return o.name.includes($scope.search) });
        if ($scope.search == "")
            $scope.students = $scope.studentsCopy;
    }
});