function subjectsAndGrades() {
     
    let numSubjects = parseInt(prompt("How many subjects do you take? (numeric answers only please e.g. 5)"));

    const subjects = [];
    const results = [];


    for (i=0; i<numSubjects; i++)
    {   

        subjects[i] = prompt("Enter subject number " + i + " (numeric values only)");
        results[i] = prompt("Enter result " + i + " (numeric values only, 0-100)");
        document.getElementById("resultsOutput").innerHTML += ("Subject: " + subjects[i] + " | Result: " + results[i] + " | Grade: " + determineGrade(results[i]) + "<br/>");
        
    }
    
    function determineGrade(result)
    {
        grade=0;
        if(result < 20)
        {
            grade="F";
        }
        else if(result >=20 && result <40)
        {
            grade="E";
        }
        else if(result >=40 && result <50)
        {
            grade="D";
        }
        else if(result >=50 && result <70)
        {
            grade="C";
        }
        else if(result >=70 && result <85)
        {
            grade="B";
        }
        else if(result >=85 && result <=100)
        {
            grade="A";
        }
        return grade;
    }

    function hideButton(){
        document.getElementById("subjectsAndGrades").style.display="none";
    }
}
