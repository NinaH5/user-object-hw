const answersform=document.getElementById("answering");
answersform.addEventListener("submit",e=>{
    e.preventDefault();
    const answers={
        username: e.target.elements.name.value,
        userage: e.target.elements.age.value, 
    };
    document.getElementById("results").innerHTML="Name: "+ answers.username +" Age: "+answers.userage;
});
