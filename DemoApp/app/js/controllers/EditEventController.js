'use strict';

eventsApp.controller('EditEventCtrl', function EditEventsController( $scope ){
    $scope.saveEvent = function ( event, newEventForm ){
        console.log(newEventForm);
        if ( newEventForm.$valid ){
            window.alert('event ' + event.name + ' saved!');
        } else {
            window.alert("The date format is incorrect.")
        }
    };

    $scope.cancelEdit = function (){
        window.location = '/EventDetails.html';

    };
});
