angular.module("app").controller("mainCtrl", function($scope) {
    const s = $scope;
    s.enemies = [
        { name: "Jordan", gender: "male" },
        { name: "Jin", gender: "male" },
        { name: "Thuan", gender: "male" },
        { name: "Anyen", gender: "female" },
        { name: "Kara", gender: "female" }
    ];
    s.killEnemy = index => {
        s.enemies.splice(index, 1);
    };
    s.addEnemy = str => {
        s.enemies.push(str);
        s.newEnemy = "";
    };
});
