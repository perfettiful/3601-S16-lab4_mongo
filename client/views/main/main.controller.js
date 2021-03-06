'use strict';

angular.module("appModule")
    .controller('mainCtrl', function($http){
        console.log("main controller loaded!");

        var self = this;

        self.textField = "";
        self.weightField = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        self.data = [];
        self.heavy = [];

        self.getHeavyPet = function() {
            $http.get('api/pets/getHeavyPet').success(function(pets) {
                self.heavy = pets[0];
            });

        }
        self.getPets = function(){
            $http.get('api/pets').success(function(pets) {
                self.data = pets;
            });
        };

        self.getHeavyPet();
        self.getPets();

        self.addData = function(){
            if(self.textField.length >= 1 && self.weightField.length >= 1) {

                $http.post('api/pets', {text: self.textField, weight: parseInt(self.weightField)}).success(function(){
                    self.getHeavyPet();
                    self.getPets();
                });
                self.textField = "";
                self.weightField = "";
            }
        };

        self.removeData = function(index){
            $http.delete('/api/pets/' + self.data[index]._id).success(function(){
                self.getHeavyPet();
                self.getPets();
            });
        };

        self.cat = function(str1, str2){
            return str1 + str2;
        };

        self.itemsInList = function(){
            return self.data.length;
        };

    });