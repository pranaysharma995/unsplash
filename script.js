$(document).ready(function()
{
    var search_result=null;
    
    $.getJSON("https://api.unsplash.com/search/photos/?page=5&query=mountain;client_id=346ebd740d035784008cd8290cbd2433b44e73157fd824cc3c8fd17d4f6aea50",function(data){
        
        search_result=data.results;
        console.log(search_result);
        search_result.forEach(function(image,index)
                             {
            $(".image-container").append(`<div class="image"><img src="${image.urls.small}" alt="Image" /><span class="likes">&hearts; ${image.likes}</span></div>`);
        })
        
              })
        
    
                  
    });