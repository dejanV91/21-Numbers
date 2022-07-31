function getElement(element) {
    const elem = document.querySelector(element)
    return elem
}

class Number{
    constructor(element, number){
        this.element = element;
        this.number = number;

        
        const numberUsers = this.element.querySelector(".no");
        this.setNumber(numberUsers);
       
    }

  
}


const item1 = new Number(getElement(".first"), 1000);
const item2 = new Number(getElement(".second"), 1000);
const item3 = new Number(getElement(".third"), 1000);