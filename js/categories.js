import {read_json, read_file} from "./lib/file.js"

function create_category(content, category_html) {

    let categories_list_html = ""

    content.forEach(category => {

        categories_list_html = categories_list_html + `
                    <div class="col">
                        <a href="${category.url}" class="categories">
                            <div class="img">
                                <img style="text-align: center" alt="" src="${category.img_url}">
                            </div>
                            <div style="text-align: center">${category.title}</div>
                        </a>
                    </div>
                    `
    })

    category_html = category_html.replace("{list_data}", categories_list_html)

    return category_html

}

$(() => {

    read_json("js/categories_structure.json").then((elements) => {

        let body_html = "";

        read_file("templates/category.html").then((buffer_category_html) => {

            elements.forEach(element => {


                let category_html = buffer_category_html;

                category_html = category_html
                    .replace("{url}", element.url)
                    .replace("{title}", element.title)
                    .replace("{url_text}", element.url_text)
                    .replace("{description}", element.description)



                let elements_html = "";


                element.data.forEach(category => {

                    let req_html;

                    if (category.heading === '') {
                        req_html = `<div class='row'> \
                            {list_data} \
                        </div>`
                    }
                    else{
                        req_html = `<div class='row'> \
                                            <h2>${category.heading}</h2> \
                                            {list_data} \
                                        </div>`
                    }

                    req_html = create_category(category.content, req_html)

                    elements_html = elements_html + req_html

                })

                category_html = category_html.replace("{data}", elements_html)

                body_html = body_html + category_html;

            })

        }).then(() => {
            $(".categories").html(body_html)
        })
    })

})