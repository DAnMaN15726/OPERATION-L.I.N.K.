console.log(`FRONT END JAVASCRIPT LOADED`);
$(".container").append(`<p>FRONT END LOADED</p>`);



$.getJSON(`/articles`, function(package){
    console.log(package);
    for( i = 0; i < package.length; i++){
        $(`#card`).append(`<div class="card" style="width: 18rem;">
                                    <img class="card-img-top" src="..." alt="Card image cap">
                                    <div class="card-body">
                                    
                                    <p class="card-text">${package[i].title}</p>
                                    <a href="${package[i].link}" class="btn btn-primary">Visit</a>
                                    </div>
                                </div>`);


    }
   
});


