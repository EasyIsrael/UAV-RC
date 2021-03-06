﻿'use strict';

angular.module('uavRcApp')
  .controller('PlaygroundCtrl', function ($scope, socket) {

      socket.forward('CAMERA_PITCH_ANGLE', $scope);
      $scope.pitchangle = 0;
      $scope.set_pitchangle = function () {
          socket.emit('CAMERA_PITCH_ANGLE_SET', { pitchangle: $scope.pitchangle });
          console.time("CAMERA_PITCH_ANGLE")
      }

      $scope.get_pitchangle = function () {
          socket.emit('CAMERA_PITCH_ANGLE_GET');
      }

      $scope.$on('socket:connect', function (data) {
          console.log("test");
          //console.log(data);
      })

      $scope.$on('socket:CAMERA_PITCH_ANGLE', function (ev, data) {
          console.timeEnd("CAMERA_PITCH_ANGLE");
          $scope.pitchangle = data.pitchangle;
      });


  });
