function solve() {
    let inputText = document.getElementById("searchText").value;
    let arr = document.querySelectorAll("ul li");
    arr.forEach(e=>{
       if (e.innerText.includes(inputText)  && inputText!== "") {
          e.style.fontWeight="bold";
          e.style.textDecoration = "underline";
       }
       else{
        e.style.fontWeight="normal";
        e.style.textDecoration="none";
       }
    })  
}