import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

var app = angular.module('calculator',[]);

app.controller('CalculatorCtrl', [function () {

    var numbers = this;
    numbers.original = '';
    numbers.array = [];
    numbers.model = '0';
    numbers.anterior = '0';
    numbers.siguiente = '0';
    numbers.punto = true;
    numbers.sigActivo = false;

    var memory = this ;
    memory.lastOperation = '';
    memory.storage = '0';
    memory.update = false;

    this.memoryReload = function () {
        console.log('STORAGE',memory.storage);
        console.log("MODEL",numbers.model);
        numbers.model = memory.storage;
        numbers.original = memory.storage;
        numbers.anterior = memory.storage;
        numbers.siguiente = '0';
        operations.action = '';
        memory.lastOperation = '';
    };

    this.cleanMemory = function () {
        memory.storage = '0';
    };

    this.clearCache = function () {
        numbers.model = '0';
        numbers.original = '';
        numbers.anterior = '0';
        numbers.siguiente = '0';
        operations.action = '';
        memory.lastOperation = '';
    };


    var operations = this;
    operations.action = '';
    operations.active = false;

    operations.toIntOrFloat = function (number) {

        var reg = /[.]/g;

        if(reg.test(number)){
            return parseFloat(number);
        } else {
            return parseInt(number);
        }
    };

    operations.toFloat = function (number) {
        return parseFloat(number);
    };

    operations.funciones = function (action) {

        numbers.siguiente = numbers.model;

        switch (action){
            case 'sum':
                numbers.model = operations.toIntOrFloat(numbers.siguiente) + operations.toIntOrFloat(numbers.anterior);
                break;
            case 'res':
                numbers.model =  operations.toIntOrFloat(numbers.anterior) - operations.toIntOrFloat(numbers.siguiente);
                break;
            case 'div':
                numbers.model =  operations.toIntOrFloat(numbers.anterior) / operations.toIntOrFloat(numbers.siguiente);
                break;
            case 'mul':
                numbers.model =  operations.toIntOrFloat(numbers.anterior) * operations.toIntOrFloat(numbers.siguiente);
                break;
        }

            memory.storage = numbers.model;
            numbers.anterior = numbers.model;
    };

    this.actions = function (action) {

        operations.active = true;
        if(operations.action === action){

            operations.funciones(action);

        } else {
            operations.action = action;
            memory.lastOperation = action;
        }

    };

    operations.validacion = function (val) {
        if (numbers.original.length < 18 ){
            numbers.original = numbers.original + val;
            console.log(numbers.original);
            numbers.model = numbers.original;
            if (numbers.sigActivo){
                numbers.siguiente = numbers.model;
            } else {
                numbers.anterior = numbers.model;
            }

        }
    };


    this.p = function () {
        if(numbers.punto){
            numbers.original = numbers.original + '.';
            console.log(numbers.original);
            numbers.model = numbers.original;
            numbers.punto = false;
        }
    };
    this.n = function (val) {

        if (operations.active){
            numbers.model = '0';
            numbers.original = '';
            operations.active = false;
            numbers.punto = true;
            numbers.sigActivo = true;
        }

        if(val === '.'){
            operations.validacion(val);
        }
        if(numbers.model.substring(0,1) == '0'){
            if (val !== 0){
                operations.validacion(val);
            }
        }else {
            operations.validacion(val);
        }

    };

    this.resultado = function(){
        operations.funciones(memory.lastOperation);
        operations.action = '';
    };

    this.deleteLast = function () {
        memory.lastOperation = '';
        var original = (numbers.original).toString();
        var modelo = (numbers.model).toString();
        console.log("length",original.length - 1);
        console.log("leg",modelo.length - 1);
        if (original.length - 1 === 0){
            numbers.original = '0';
        } else {
            numbers.original = original.substring(0,original.length - 1);
            console.log("1",original.substring(0,original.length - 1));
        }

        if (modelo.length - 1 === 0) {
            numbers.model = '0';
        } else {
            numbers.model = modelo.substring(0,modelo.length - 1);
            console.log("2",modelo.substring(0,modelo.length - 1));
        }


    };
}]);
