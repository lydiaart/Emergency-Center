var comment = document.querySelectorAll(".comment");

function showComments(event){
    var selector = this.getAttribute("data-id")
    var status= this.getAttribute("data-status")
    this.setAttribute("data-status","show")
    if(status==="hide"){
        document.querySelector("#" + selector ).classList.remove("hide")
        this.setAttribute("data-status","show")
    }
    else{
       
        document.querySelector("#" + selector ).classList.add("hide")
        this.setAttribute("data-status","hide")
        
    }
  
}

// when the page loads, it automatically tries to look if any comments were ever pulled from the backend
// then use logic to hide or unhide them.
for (let i = 0; i < comment.length; i++) {
    comment[i].addEventListener("mouseover", showComments); 
    
}
