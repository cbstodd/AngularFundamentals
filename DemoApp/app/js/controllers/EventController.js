'use strict';
var today = new Date();

eventsApp.controller('EventCtrl', function EventsController( $scope ){
      $scope.sortorder = 'name';
      $scope.event = {
          name:     'Learning Angular on Pluaralsight',
          date:     today,
          time:     '3:00 pm',
          location: {
              address: 'Aldon Apartments',
              city:    'Chevy Chase',
              state:   'Maryland'
          },
          imageUrl: '/img/angularjs-logo.png',
          sessions: [
              {
                  name:        'AngularJS',
                  creatorName: 'Colin Stodd',
                  duration:    'Advanced',
                  abstract:    'In this session you will learn about Angular JS',
                  cost:        10,
                  upVoteCount: 0
              }, {
                  name:        'Ruby on Rails',
                  creatorName: 'Michael Hartl',
                  duration:    'Intermediate',
                  abstract:    'In this session you will learn about Ruby on Rails programming',
                  cost:        10,
                  upVoteCount: 0
              }, {
                  name:        'HTML5 & CSS3',
                  creatorName: 'Colin Stodd',
                  duration:    'Beginnere',
                  abstract:    'In this session you will learn how to create a web page from scratch. No prior expreience is nessassary.',
                  cost:        20,
                  upVoteCount: 0
              }, {
                  name:        'jQuery & jQueryUI',
                  creatorName: 'Tuts+',
                  duration:    'Intermidiate',
                  abstract:    'In this session you will how to use jQuery in your front end applications',
                  cost:        23,
                  upVoteCount: 0
              }
          ]
      };
      $scope.upVoteSession = function ( session ){
          session.upVoteCount++;
      };
      $scope.downVoteSession = function ( session ){
          session.upVoteCount--;
      }
  }
);