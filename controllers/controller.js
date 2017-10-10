app.controller('mainCtrl', function ($scope, userMovies, allMovies) {
    //userMovies variables
    $scope.budget = userMovies.budget;
    $scope.userMoviesArray = userMovies.userMoviesArray;
    $scope.addToCollection = userMovies.addToCollection;
    $scope.emptyCollection = userMovies.userMoviesArray.length;

    //allMovies variables
    $scope.movies = allMovies.movies;

    //strictly view variables
    $scope.trashState = true;
    $scope.changeTrashState = function(){
        $scope.trashState = !$scope.trashState;
    }
    
});


