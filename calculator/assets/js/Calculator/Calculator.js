import Button from "./Button.js";

/* Calculator.js*/

export default class Calculator {
    
    _buttons = [];
    _display;
    _expression;

    constructor() {

        console.log ("Calculator constructed!");

        let buttonNodeList = document.querySelectorAll(".button");

        //console.log (buttonNodeList);

        //loop goes through the buttonNodeList and constructs buttons

        for (let i = 0; i < buttonNodeList.length; ++i) {
            this._buttons[i] = new Button(buttonNodeList[i]);
        }
    }

}