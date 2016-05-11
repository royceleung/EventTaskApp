angular.module('myApp.services', [])

.factory('calendarFactory', function($http) {
  var eventData = [{
    title: 'Movie Night',
    date: Date.now(),
    description: 'Watching Zootopia with the family',
    completed: 0
  }];

  var getEventData = function() {
    return eventData;
  }

  //Unnecessary for now
  var saveEventData = function() {

  }

  return {
    getEventData: getEventData
  }
});