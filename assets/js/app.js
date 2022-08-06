let cl=console.log;

let data = [
    {
        "albumId": 1,
        "id": 1,
        "title": "Indian flag",
        "url": "https://images.unsplash.com/photo-1600093112291-7b553e3fcb82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
	{
        "albumId": 1,
        "id": 2,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://images.unsplash.com/photo-1659221483861-2957e5e5726a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://images.unsplash.com/photo-1659212268745-2e574734c961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1133&q=80",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://images.unsplash.com/photo-1659204785513-f78c166fbbf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 7,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://images.unsplash.com/photo-1659515357675-b35e26415c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    }]
	
	let postInfo=document.getElementById("postInfo");
	
	
	let result="";
	
	data.forEach((post) => {
		result+= `<div class="col-md-4">
			      <div class="card">
				     <div class="card-body">
					     <figure class="post">
						     <img src="${post.url}" class="img-fluid" alt="pic" title="pic">
							 <figcaption>
							     <p> ${post.title} </p>
							 </figcaption>
							 <span class="id">Id:${post.id}</span>
							 <span class="albumid">AlbumId:${post.albumId}</span>
						 </figure>
					 </div>
				  </div>
			 </div> `
	})
	
	postInfo.innerHTML = result;