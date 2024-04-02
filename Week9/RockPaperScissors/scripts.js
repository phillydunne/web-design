function letsPlay() {
     
    let i=0;
    let isRunning=true;

    while(isRunning && i<3)
    {   
        i++;
        let choice1 = prompt("Enter your choice Player 1: Rock, Paper or Scissors");
        let choice2 = prompt("Enter your choice Player 2: Rock, Paper or Scissors");
        
        console.log(choice1);
        console.log(choice2);

        if (choice1 == "" || choice2 == "")
        {
            alert("Please select valid options before clicking submit");
            return;
        }

        

        if (choice1=="Rock")
        {
            if (choice2=="Rock")
            {
                alert("Its a draw!");
            }
            else if(choice2=="Paper") 
            {
                alert(choice2 + " beats " + choice1 + ". Player 2 wins!");
                hideLetsPlayButton();
                isRunning=false;       
            }
            else if(choice2=="Scissors")
            {
                alert(choice1 + " beats " + choice2 + ". Player 1 wins!");
                hideLetsPlayButton();
                isRunning=false;
            }
        }  
        else if (choice1 == "Paper") 
        {
            if (choice2=="Rock")
            {
                alert(choice1 + " beats " + choice2 + ". Player 1 wins!");
                hideLetsPlayButton();
                isRunning=false;          
            }
            else if(choice2=="Paper") 
            {
                alert("Its a draw!");        
            }
            else if(choice2=="Scissors")
            {
                alert(choice2 + " beats " + choice1 + ". Player 2 wins!");
                hideLetsPlayButton();
                isRunning=false;
            }
        }
        else if (choice1 == "Scissors") 
        {
            if (choice2=="Rock")
            {
                alert(choice2 + " beats " + choice1 + ". Player 2 wins!");
                hideLetsPlayButton();
                isRunning=false;         
            }
            else if(choice2=="Paper") 
            {
                alert(choice1 + " beats " + choice2 + ". Player 1 wins!");   
                hideLetsPlayButton();
                isRunning=false;                          
            }
            else if(choice2=="Scissors")
            {
                alert("Its a draw!");   
            }
        } 
        else
        {
            alert("Invalid input");
        }
    }

    function hideLetsPlayButton(){
        document.getElementById("letsPlayButton").style.display="none";
    }
}
