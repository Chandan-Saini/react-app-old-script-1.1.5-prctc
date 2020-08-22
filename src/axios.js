import axios from 'axios';

const instance= axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization']='AUTH TOKEN FROM AXIOS.JS INSTANCE FILE'

export default instance