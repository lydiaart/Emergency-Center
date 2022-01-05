async function createComment(event){
    event.preventDefault();
    //window.alert("button tested")
    
    const comment_text = document.querySelector('#comment_text').value.trim();
    const post_id = document.querySelector('#comments').getAttribute("data-post-id")
    //const severity = document.querySelector('#severity').value
    
    //const user_id = 3;
    if (comment_text)  {
        
      const response = await fetch('/api/comments/', {
        method: 'post',
        body: JSON.stringify({
            comment_text,
            post_id
        }),
        headers: { 'Content-Type': 'application/json' }
      });

  
      // check the response status
      if (response.ok) {
        console.log('success, post submitted');
        document.location.replace('/view-posts');
      } else {
        alert(response.statusText);
      }
     // --------------
    }



}


document.querySelector('.comment-form').addEventListener('click', createComment);