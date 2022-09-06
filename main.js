// Fetch 
// Retrun Promise



fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'GET',
    headers:{
        'Content-type':'application/json'
    }
}).then(res=>{
    return res.json()
}).then(data=>{
    data.length = 10
    for(post of data){
    // Make a function to show  the data in the web browser
    createPost(post)
    }
})

let createPost = (post)=>{
    let myDiv = document.createElement('div')
    let myHeader = document.createElement('h2')
    let myBody = document.createElement('p')
    let myBtn = document.createElement('button')
    myHeader.textContent = post.title
    myBody.textContent = post.body
    myBtn.textContent = 'Add'
    myDiv.append(myHeader)
    myDiv.append(myBody)
    myDiv.append(myBtn)
    myBtn.setAttribute('id',post.id)
    myDiv.style.border="1px solid black"
    myDiv.style.padding = "5px"
    myDiv.style.marginBottom = '3px'
    // add functionality to button 
    myBtn.addEventListener('click',()=>{
        if(localStorage.getItem('posts') != null){
            //add logic
            let data = localStorage.getItem('posts')
            let myPosts = JSON.parse(data)
            myPosts.push(post)
            localStorage.setItem('posts',JSON.stringify(myPosts))
        }else{
            myPosts=[]
            myPosts.push(post)
            localStorage.setItem('posts',JSON.stringify(myPosts))
        }
    })

    document.body.append(myDiv)
}

