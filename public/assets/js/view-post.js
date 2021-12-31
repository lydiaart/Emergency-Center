var comment = document.querySelectorAll(".comment");

function showComments(event){
    var selector = this.getAttribute("data-id")
    var status= this.getAttribute("data-status")
    if(status==="hide"){
        document.querySelector("#" + selector ).classList.remove("hide")
        this.setAttribute("data-status","show")
    }
    else{
        document.querySelector("#" + selector ).classList.add("hide")
        this.setAttribute("data-status","hide")
    }
  
}

for (let i = 0; i < comment.length; i++) {
    comment[i].addEventListener("mouseover", showComments); 
    
}
