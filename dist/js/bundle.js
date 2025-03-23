(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    // eslint-disable-next-line class-methods-use-this
    displaySkeleton() {
        const display = document.createElement('div');
        display.classList.add('display');
        return display;
    }
    // eslint-disable-next-line class-methods-use-this
    buttonsSkeleton() {
        const buttonTexts = [
            'AC',
            'DEL',
            '%',
            '/',
            '7',
            '8',
            '9',
            '*',
            '4',
            '5',
            '6',
            '-',
            '1',
            '2',
            '3',
            '+',
            '0',
            '.',
            '=',
        ];
        const buttonsSkeleton = document.createElement('div');
        buttonsSkeleton.classList.add('buttons');
        buttonTexts.forEach((text) => {
            const button = document.createElement('button');
            button.innerText = text;
            button.addEventListener('click', this.handleButtonClick.bind(this));
            buttonsSkeleton.appendChild(button);
        });
        return buttonsSkeleton;
    }
    handleButtonClick(event) {
        const button = event.target;
        switch (button.innerText) {
            case 'AC':
                this.clearDisplay();
                break;
            case 'DEL':
                this.deleteDisplay();
                break;
            case '=':
                this.calculate();
                break;
            default:
                this.updateDisplay(button.innerText);
        }
    }
    // eslint-disable-next-line class-methods-use-this
    calculate() {
        const display = document.querySelector('.display');
        const expression = display.innerText;
        // eslint-disable-next-line no-eval
        const result = eval(expression);
        display.innerText = result.toString();
    }
    // eslint-disable-next-line class-methods-use-this
    deleteDisplay() {
        const display = document.querySelector('.display');
        display.innerText = display.innerText.slice(0, -1);
    }
    // eslint-disable-next-line class-methods-use-this
    clearDisplay() {
        document.querySelector('.display').innerText = '';
    }
    // eslint-disable-next-line class-methods-use-this
    updateDisplay(value) {
        const display = document.querySelector('.display');
        display.innerText += value;
    }
    skeleton() {
        const skeleton = document.createElement('div');
        skeleton.classList.add('calculator');
        skeleton.append(this.displaySkeleton(), this.buttonsSkeleton());
        return skeleton;
    }
    run() {
        const skeleton = this.skeleton();
        document.querySelector('main').appendChild(skeleton);
    }
}
exports.default = Calculator;

},{}],2:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = __importDefault(require("./calculator"));
window.onload = () => {
    const calculator = new calculator_1.default();
    calculator.run();
};

},{"./calculator":1}]},{},[2]);
