
    var num = 0;
    var button = document.getElementById("demo").addEventListener("click", showImages);
    var gallery = document.getElementById("cont");

    function showImages(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
           return response.json();
        })
        .then((photos) =>{
           for(let i = 0; i < 10; i++){
               gallery.innerHTML += `
               <div class="card col-3 m-2 mx-auto">
               <br><br>
               

                <a target="_self" href="${photos[num].thumbnailUrl}">
                <img src="${photos[num].thumbnailUrl}" alt="photo" width="300">
                </a>

                <div class="card-body">
                <p class="card-title">${photos[num].id}</p>            
                <h3 class="card-text">${photos[num].title}</h3>
                
                </div>
                </div>
               ` 
               num = num + 1;
           } 
        }).catch((err) => {
        console.log(err);
    });
    }
