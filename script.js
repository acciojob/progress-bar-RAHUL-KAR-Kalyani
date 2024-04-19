//your JS code here. If required.

const circles = document.querySelectorAll('.circle');
const lines = document.querySelectorAll('.line');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let currentActive = 1;

nextButton.addEventListener("click", ()=>{
    currentActive++
    
    if(currentActive > circles.length){
        currentActive = circles.length;
        
    }
    ui_Update();
})



prevButton.addEventListener("click", ()=>{
    currentActive--
    if(currentActive<1){
        currentActive=1;
    }
    ui_Update();
})


function ui_Update(){
   
    circles.forEach((circle, index)=>{
        
        if(index < currentActive){
            circle.classList.add("active")
        }
        else{
            circle.classList.remove("active")
        }
   })

    lines.forEach((line, index)=>{
        
        if(index < currentActive-1){
            line.classList.add("active")
        }
        else{
            line.classList.remove("active")
        }
    })

    if(currentActive === 1){
        prevButton.disabled = true;
    }

    else if(currentActive === circles.length){
        nextButton.disabled=true;
    }

    else{
        prevButton.disabled=false;
        nextButton.disabled=false;
    }

}
