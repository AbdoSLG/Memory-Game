


// in start game 
document.querySelector(".control-buttons span").addEventListener("click" , ()=>{
    let yourName=prompt("what is ypur name?");
    document.getElementById("elz3ama").play();
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

    let current=array.length 
    , temp ;



    while(current >0){

        let random=Math.floor(Math.random() * current);

        current--;

        temp=array[current - 1 ];

        array[current -1 ]=array[random];

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


    // check after end this game
    let allblocks=blocks.filter(block=>block.classList.contains("has-match"));

    while(allblocks.length===blocks.length){

        let result=document.createElement("div")
        result.className="result"

        let triesText= tries.innerHTML
        let triesCount=document.createElement("h2")
        triesCount.innerHTML=`Your Tries Count Is ${triesText}`;

        let p=document.createElement("h1")
        p.className="resultP"


        if(parseInt(triesText) <= blocks.length /2 ){
            p.innerHTML=`Perfect, ${document.querySelector(".info span").innerHTML}`
        }else if(parseInt(triesText) > (blocks.length /2 )  ){
            p.innerHTML=`Good, ${document.querySelector(".info span").innerHTML}`
        }else if(parseInt(triesText) >( blocks.length /2 )+ 10 ){
            p.innerHTML=`Not Bad, ${document.querySelector(".info span").innerHTML}`
        }else if(parseInt(triesText) > (blocks.length /2 )+ 14 ){
            p.innerHTML=`Bad, ${document.querySelector(".info span").innerHTML}`
        }


        result.appendChild(p)
        result.appendChild(triesCount)

        document.body.appendChild(result)

        break;
    }

}

// remove popup result
document.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("result")){
        e.target.remove()
        location.reload()
    }
})

