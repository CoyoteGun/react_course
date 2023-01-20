export const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json());
}

export const getPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp => resp.json());
}