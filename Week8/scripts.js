function formSubmit() {
    event.preventDefault()
    
    const choice1 = document.getElementById("choice1").value;
    const choice2 = document.getElementById("choice2").value;

    console.log(choice1);
    console.log(choice2);

    document.getElementById("mainForm").style.display="none";

    if (choice1=="Rock")
    {
        if (choice2=="Rock")
        {
            alert("Its a draw!");
        }
        else if(choice2=="Paper") 
        {
            alert(choice2 + " beats " + choice1 + ". Player 2 wins!");           
        }
        else if(choice2=="Scissors")
        {
            alert(choice1 + " beats " + choice2 + ". Player 1 wins!");
        }
    }  
    else if (choice1 == "Paper") 
    {
        if (choice2=="Rock")
        {
            alert(choice1 + " beats " + choice2 + ". Player 1 wins!");            
        }
        else if(choice2=="Paper") 
        {
            alert("Its a draw!");        
        }
        else if(choice2=="Scissors")
        {
            alert(choice2 + " beats " + choice1 + ". Player 2 wins!");
        }
    }
    else if (choice1 == "Scissors") 
    {
        if (choice2=="Rock")
        {
            alert(choice2 + " beats " + choice1 + ". Player 2 wins!");            
        }
        else if(choice2=="Paper") 
        {
            alert(choice1 + " beats " + choice2 + ". Player 1 wins!");            
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
