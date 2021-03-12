import { GET } from './Methods'

export const REQUESTS = {
    gets:{
        getPosts:() => GET('https://jsonplaceholder.typicode.com/posts'),
    }
}