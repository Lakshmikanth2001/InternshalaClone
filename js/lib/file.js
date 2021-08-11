async function read_file(file_path){

    const responce = await fetch(file_path)

    return responce.text()
}

async function read_json(file_path) {

    const responce = await fetch(file_path)

    return responce.json()
}

export {read_file, read_json};
