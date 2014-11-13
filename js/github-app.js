/*
    github-app.js
    very quick and dirty github API demo

    To get all your repos on GitHub, GET this URL:
        https://api.github.com/users/your-github-username/repos
 */

"use strict";

angular.module('GitHubApp', [])
    .controller('GitHubController', function($scope, $http) {
        $scope.userName = 'tim-lau';
        $scope.getRepos = function() {

            $http.get('https://api.github.com/users/'+ $scope.userName + '/repos')
                .success(function(data) {
                    console.log(angular.toJson(data, true));
                    $scope.repos = data;
                })
                .error(function(err) {
                    console.log(err);
                    // err will contain error information
                });

        };
    });