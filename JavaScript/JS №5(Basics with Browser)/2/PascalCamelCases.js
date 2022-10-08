function solve() {
  let text = document.getElementById("text").value
  let naming = document.getElementById("naming-convention").value
  if(naming==="Camel Case"){
    text = text.split(" ");
    let result = "";
    for (let index = 0; index < text.length; index++) {
      if (index==0) {
        result += text[index].charAt(0).toLowerCase()+text[index].slice(1);
      }
      else{
        result +=text[index].charAt(0).toUpperCase()+text[index].slice(1);
      }
    }
    document.getElementById("result").innerText = result;
  }
  else if(naming == "Pascal Case"){
    text = text.split(" ");
    let result = "";
    for (let index = 0; index < text.length; index++) {
       result += text[index].charAt(0).toUpperCase()+text[index].toLowerCase().slice(1);
    }
    document.getElementById("result").innerText = result;
  }
  else{
    document.getElementById("result").innerText = "Error!";
  }
}