let firstArray = [];


document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("changeWords").style.visibility = "hidden";
    document.getElementById("ChangedWords").style.display = "none";
    document.getElementById("start").addEventListener("click", StartProgram, false);
    document.getElementById("changeWords").addEventListener("click", ChangeWords, false); 
});

function StartProgram(){
    for (let i = 0; i < 3; i++) {
        firstArray[i]=(prompt("Please eneter a fruit"));
        let anotherLi = document.createElement("li");
        anotherLi.appendChild(document.createTextNode(firstArray[i]));
        document.getElementById("firstUl").appendChild(anotherLi);
    }
    document.getElementById("changeWords").style.visibility = "visible";
    document.getElementById("start").style.visibility = "hidden";
}

function ChangeWords(){
    document.getElementById("ChangedWords").style.display = "block";
    document.getElementById("GetWords").style.display = "none";

    
   let secondArray = firstArray.map(function(oneWord) {
            return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); })


    for (let i = 0; i < 3; i++){
        let anotherLi = document.createElement("li");
        anotherLi.appendChild(document.createTextNode(secondArray[i]));
        document.getElementById("secondUl").appendChild(anotherLi);
    
        
    }
}
