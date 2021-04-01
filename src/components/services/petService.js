const url = 'http://localhost:5000/pets';


export const getAll = (category = '') => {
    let petsUrl = url + ((category && category != 'all') ? `?category=${category}` : '');

    return fetch(petsUrl)
        .then(res => res.json())

        .catch(err => console.error(err))
}

export const getOne = (petId) => {
    return fetch(`${url}/${petId}`)
        .then(res => res.json())
        .catch(err => console.error(err))
}

export const create = (petName, description, imageURL, category) => {

    let pet = {
        name: petName,
        description,
        imageURL,
        category,
        likes: 0,
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(pet)
    })

}

export const update = (petId, pet) => {

    return fetch(`${url}/${petId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(pet)
    })

}
export const pet = (petId, likes) => {

    return fetch(`${url}/${petId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({likes})
    })

}