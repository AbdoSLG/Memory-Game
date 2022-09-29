


// in start game 
document.querySelector(".control-buttons span").addEventListener("click" , ()=>{
    document.getElementById("elz3ama").play();
    let yourName=prompt("what is ypur name?");
        if(yourName==null||yourName==""){
            document.querySelector(".info span").innerHTML="UnKnown";
        }else{
            document.querySelector(".info span").innerHTML=yourName;
        }
    document.querySelector(".control-buttons").remove();
})


let duration=1000;

let box=document.querySelector(".container .box");

let blocks=Array.from(box.children);

let orderRange=[...Array(blocks.length).keys()]



shafile(orderRange)



blocks.forEach((block , index)=>{

    block.style.order=orderRange[index];

})





//   random element 
function shafile(array){

    let current=array.length , temp ;

    while(current >0){

        let random=Math.floor(Math.random() *current);

        current--;

        temp=array[current];

        array[current]=array[random];

        array[random]=temp;

    }

    return array;

}

// click function
document.addEventListener("click", (el)=>{
    if(el.target.classList.contains("face")){
        flip(el.target.parentElement)
    }
})

//   rotate 

function flip(e){
    e.classList.add("is-flipped")
    let allFlipped=blocks.filter(block=>block.classList.contains("is-flipped"));
    if(allFlipped.length==2){

        // stop function
        stopClicking()
        // check function
        check(allFlipped[0],allFlipped[1])

    }    
}    



// stop clicking function
function stopClicking(){
    box.classList.add("no-clicking")
    setTimeout(()=>{
        box.classList.remove("no-clicking")
        
    } , duration)

}


function  check(blockOne , blockTwo){

    let tries=document.querySelector(".tries span")

    if(blockOne.dataset.name===blockTwo.dataset.name){
        
        blockOne.classList.remove("is-flipped")
        blockTwo.classList.remove("is-flipped")
        
        blockOne.classList.add("has-match")
        blockTwo.classList.add("has-match")



        if(blockOne.dataset.name=="alahly"){
            document.getElementById("elkadia").play();
        }else{
            document.getElementById("success").play();
        }
        
    }else{
        document.getElementById("wrong").play();
        tries.innerHTML=parseInt(tries.innerHTML) + 1;
        
        setTimeout(()=>{
            blockOne.classList.remove("is-flipped")
            blockTwo.classList.remove("is-flipped")
        } , duration)
    }
}

