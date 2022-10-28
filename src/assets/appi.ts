
import {Movies} from '../types'
export const fetchData = {

        fetch: async (page:number) : Promise<Movies>  => {
           const request = await fetch(
                `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&page=${page}`
                
            )

            const response = await request.json()
            
            return response


    }
}    

