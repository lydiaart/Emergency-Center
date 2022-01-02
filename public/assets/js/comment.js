
async function openCommentPage (event){
    const post_id = this.getAttribute("data-post-id")
   
    //document.location.replace('/comments');
    //document.querySelector('.comment').setAttribute("data-post-id")
    //window.alert(post_id)

    await fetch('/comments', {
        method: 'post',
        body: JSON.stringify({
            post_id,
            
          }),
          headers: { 'Content-Type': 'application/json' }
      }).then((response)=>{
          // check the response status
          if (response.ok) {
              //console.log('success, comment.js');
              //document.location.replace("/comments")
              console.log(response)
              //document.location.replace('/comments');
              //response.render('comments',post_id)

          } else {
              alert(response.statusText);
          }
          response.json().then((data)=> {
            //console.log(data);
            document.location.replace(`/comments/${post_id}`)
            //document.location.replace('comments',{post_id :data.post_id})
          });
        

      })
      

  
     
}

  document.querySelector('.comments-dropdown').addEventListener('click', openCommentPage);

var buttons = document.querySelectorAll(".comments-dropdown");
var i = 0, length = buttons.length;
for (i; i < length; i++) {
    buttons[i].addEventListener("click", openCommentPage)
    
}