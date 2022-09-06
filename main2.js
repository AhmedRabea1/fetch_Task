let myPosts = JSON.parse(localStorage.getItem('posts'))
let var_id = 0;
for(post of myPosts){
    createPost(post)
}

function createPost(post){
    let myDiv = document.createElement('div')
    let myHeader = document.createElement('h2')
    let myBody = document.createElement('p')
    let myBtn = document.createElement('button')
    myHeader.textContent = post.title
    myBody.textContent = post.body
    myBtn.textContent = 'Remove'
    myDiv.append(myHeader)
    myDiv.append(myBody)
    myDiv.append(myBtn)
    myBtn.setAttribute('id',post.id)
    myDiv.style.border="1px solid black"
    myDiv.style.padding = "5px"
    myDiv.style.marginBottom = '3px'
    document.body.append(myDiv)
    myBtn.addEventListener('click',()=>{
        if(localStorage.getItem('posts') != null){
            const posts_filter1 = JSON.parse(localStorage.getItem('posts'));
            console.log(posts_filter1);
            const filtered = posts_filter1.filter(posts_filter1 => posts_filter1.id !== post.id);
            localStorage.setItem('posts', JSON.stringify(filtered));
            var_id = post.id;
        }
    let remove_Button = document.getElementById(var_id);
    let parentDiv = remove_Button.parentElement;
    parentDiv.remove();
    })
}
