const inputbox = document.querySelector("#add-list");
const addBtn = document.querySelector("#add-btn");
const ul = document.querySelector(".list");

function getInput(){
    let inputValue = inputbox.value;
    addList(inputValue);   
};


addBtn.addEventListener("click",getInput);

function addList(inputValue){
    const newDiv = document.createElement('div'); 
    newDiv.classList.add('list-item'); //assigned class to new div
    ul.appendChild(newDiv); // attaching div to ul

    const newLi = document.createElement('li'); 
    newDiv.appendChild(newLi); //attaching li to new div
        const spanText = document.createElement("span"); //new span element which is going to contain the text
        spanText.classList.add('text')
        spanText.textContent=inputValue; //attaching text to span element
        newLi.appendChild(spanText) //attaching span with textContent to li

    const spanButton = document.createElement('span'); //span housing buttons
    spanButton.classList.add('buttons-in-list');
    newDiv.appendChild(spanButton); //appending span button to parent div
    
    const doneBtn = document.createElement('button');
    doneBtn.textContent='Done';//button text set to 'done'
    doneBtn.classList.add('Done');
    spanButton.appendChild(doneBtn);//button attached to spanButton (parent)

    const remBtn = document.createElement('button');
    remBtn.textContent='Remove';//button text set to 'remove'
    remBtn.classList.add('Remove');
    spanButton.appendChild(remBtn);//button attached to spanButton (parent)


    remBtn.addEventListener('click',()=>{
        ul.removeChild(newDiv);//removes the to-do list
    })

    doneBtn.addEventListener('click',strikethrough)
    
    function strikethrough(){
        if(spanText.style.textDecoration==="line-through"){
            spanText.style.textDecoration='none';
            doneBtn.textContent='Done';
            //checks if decoration is strike through then change it on keypress to none
        }
        else{
            spanText.style.textDecoration='line-through';
            doneBtn.textContent='Undo';
            
        }
    }
}

