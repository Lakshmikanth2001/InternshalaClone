import {
    read_json
} from "./lib/file.js";


$(()=>{
    read_json("js/carousel_structure.json").then(carousel_structure => {

        carousel_structure.forEach((carousel, index) => {

            if(index === 0){
                    $(".carousel-inner").append(`
                    <div style="text-align: center; height='max-content';" class="carousel-item active">
                        <a href="${carousel.url}">
                            <img style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" class="carousel-img zoom" src="${carousel.img_src}" alt="" srcset="">
                        </a>
                    </div>
                `)
            }
            else{
                $(".carousel-inner").append(`
                    <div style="text-align: center; height='max-content';" class="carousel-item">
                        <a href="${carousel.url}">
                            <img style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" class="carousel-img zoom" src="${carousel.img_src}" alt="" srcset="">
                        </a>
                    </div>
                `)
            }
        });
    })
})

