let boxes=document.querySelectorAll(".box");
let res=document.querySelector("#reset");
let msgg=document.querySelector(".msgc");
let turn0=true;
let count = 0; //To Track Draw




const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  

  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };


  const resetGame = () => {
    turn0= !turn0;
    count = 0;
    enableBoxes();
    msg.innerText = " ";

    msgg.classList.add("hide");
  };
  
    
boxes.forEach((box) =>{

   box.addEventListener("click",() =>{
           console.log("box was clicked");



           if(turn0){

            box.innerText="O";
            turn0=false;
           }

           else{

            box.innerText="X";
            turn0=true;


           }


           box.disabled=true;
           count++;

          let a= check();


          if (count === 9 && !a) {
            gameDraw();
          }





   });

});


const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };


const show=(winner)=>{

    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgg.classList.remove("hide");
  disableBoxes();



}

const check=() =>{

    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
          if (pos1Val === pos2Val && pos2Val === pos3Val) {
            show(pos1Val);
            return true;
          }
        }
      }
};


const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgg.classList.remove("hide");
    disableBoxes();
  };


  res.addEventListener("click", resetGame);
