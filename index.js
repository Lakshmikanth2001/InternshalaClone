import {read_json, read_file} from "./js/lib/file.js"

$(()=>{

    read_file("./templates/navbar.html").then((text_data)=>{
        $(".navbar").html(text_data)
    })

    read_file("./templates/carousel.html").then((text_data)=>{
        $(".carousel").html(text_data)
    })

   
})



