app.controller('mainCtrl', function ($scope, userMovies, allMovies) {
    //userMovies variables
    $scope.budget = userMovies.budget;
    $scope.userMoviesArray = userMovies.userMoviesArray;
    $scope.addToCollection = userMovies.addToCollection
    $scope.removeFromCollection = userMovies.removeFromCollection;
    $scope.addToBudget = userMovies.addToBudget;

    //allMovies variables
    $scope.movies = allMovies.movies;

    //strictly view variables
    $scope.trashState = true;
    $scope.changeTrashState = function () {
        $scope.trashState = !$scope.trashState;
    }
    $scope.years = [1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];
    $scope.openAddAmount = function(){
        $scope.amount = !$scope.amount;
    }

});


