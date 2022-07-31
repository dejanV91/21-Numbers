const setNumber = ((element)=>{
    const maxValue = parseInt(element.dataset.value);
    const current = Math.ceil(maxValue/1000);
    let counter = 0;
    const setting = setInterval(()=>{
        counter += current;
        if (counter >= maxValue) {
            element.textContent = maxValue;
            clearInterval(setting);
            return
        }
        element.textContent = counter;
    },1);
});

const list = [...document.querySelectorAll(".no")];

list.forEach((item)=>{
    setNumber(item);
});