function subjectsAndGrades() {
     
    let numSubjects = parseInt(prompt("How many subjects do you take? (numeric answers only please e.g. 5)"));

    const subjects = [];
    const results = [];


    for (i=0; i<numSubjects; i++)
    {   

        subjects[i] = prompt("Enter subject number " + i + " (numeric values only)");
        results[i] = prompt("Enter result number " + i + " (numeric values only)");
        document.getElementById("resultsOutput").innerHTML += (subjects[i] + ": " + results[i] + "<br/>");
        
    }
        
    function hideButton(){
        document.getElementById("subjectsAndGrades").style.display="none";
    }
}
