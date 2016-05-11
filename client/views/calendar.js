angular.module('myApp.calendar',['ngRoute'])

.config(function($routeProvider) {
  $routeProvider.when('/calendar', {
    templateUrl: '/views/calendar.html',
    controller: 'calendarCtrl'
  });
})

.controller('calendarCtrl', function($scope, calendarFactory) {

  var currentEditIndex;

  $scope.initEvents = function() {
    $scope.eventData = calendarFactory.getEventData();
  }

  $scope.saveNewEvent = function() {
    var newEvent = {
      title: $scope.newTitle,
      date: $scope.newDate,
      description: $scope.newDescription,
      completed: 0
    }
    $scope.eventData.push(newEvent);
    $scope.clearEventValues();
  }

  //sets Task to completed or Uncompleted
  $scope.taskStatus = function(index) {
    $scope.eventData[index].completed = 1 - $scope.eventData[index].completed;
  }

  //Edit Button Modal
  $scope.loadEditModels = function(index) {
    $scope.editTitle = $scope.eventData[index].title;
    $scope.editDate = new Date($scope.eventData[index].date);
    $scope.editDescription = $scope.eventData[index].description;
    $scope.editCompleted = $scope.eventData[index].completed;
    currentEditIndex = index;
  }

  $scope.saveEdit = function() {
    var editEvent = {
      title: $scope.editTitle,
      date: $scope.editDate,
      description: $scope.editDescription,
      completed: $scope.editCompleted
    };
    $scope.eventData[currentEditIndex] = editEvent;
  }

  //Delete Button
  $scope.deleteEvent = function(index) {
    $scope.eventData.splice(index, 1);
  }

  $scope.clearEventValues = function() {
    $scope.newTitle = '';
    $scope.newDate = '';
    $scope.newDescription = '';
  }

});