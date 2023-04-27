function attachEvents() {
    const BASE_URL_POSTS = 'http://localhost:3030/jsonstore/blog/posts';
    const BASE_URL_COMMENTS = 'http://localhost:3030/jsonstore/blog/comments';

    let selectedPosts = document.getElementById('posts');
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPosts = document.getElementById('btnViewPost');

    btnLoadPosts.addEventListener('click', loadPosts);
    btnViewPosts.addEventListener('click', viewPost);

    let posts = [];

    async function loadPosts() {
        let response = await fetch(BASE_URL_POSTS);
        let responseData = await response.json();
        Object.values(responseData).forEach((obj) => {
             let option = document.createElement("option");
            option.textContent = obj.title;
            option.value = obj.id;
            let selectedPosts = document.getElementById('posts');
            selectedPosts.appendChild(option);
            posts.push({ id: obj.id, title: obj.title, body: obj.body });
        });

        
    }

    async function viewPost(event) {
        let selectedOptionKey = selectedPosts.value;
        let response = await fetch(BASE_URL_COMMENTS);
        let data = await response.json();

        document.getElementById( "post-title")
                .textContent = `${selectedPosts.selectedOptions[0].textContent}`;

        let body = Object.values(posts).filter((obj) => obj.id == selectedOptionKey );

        document.getElementById("post-body").innerHTML = body[0].body;

        let selected = Object.values(data).filter((obj) => obj.postId == selectedOptionKey);

        let postComments = document.getElementById("post-comments");
        postComments.replaceChildren();

        Array.from(selected).forEach(obj=>{
            let li=document.createElement("li");
            li.id=obj.id;
            li.textContent=obj.text;
            postComments.appendChild(li);
        });


    }
}

attachEvents();