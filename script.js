
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
               <div class="card col-3 m-2 mx-auto" 
               style="background-color: #181818; 
               color: #fff;
               text-align: center;
               border: 4px solid #fff;
               padding: 15px 10px;">
               <br><br>
               

                <a target="_self" href="${photos[num].thumbnailUrl}">
                <img src="${photos[num].thumbnailUrl}" alt="photo" style="width="300px"/>
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
