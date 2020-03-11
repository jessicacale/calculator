/* Button.js */

export default class Button {
    _type;
    _value;

    constructor(button) {
        //get the data-type value from the dom node reference
        this._type = button.dataset.type;

        this._value = button.textContent;

       // console.log(this._type);
        //console.log(this._value);
       // console.log("===========");

       button.addEventListener("click", this.clickEventHandler);

        }

        clickEventHandler = event => {
        
            console.log(this._type);
            console.log(this._value);
            console.log("================");
           }

    }
