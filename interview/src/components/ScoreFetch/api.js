import axios from "axios"

const options = {
    method: 'GET',
    url: 'https://cricket-api-free-data.p.rapidapi.com/cricket-teams',
    headers: {
        'x-rapidapi-key': 'aa129b9f00mshaa9fedf2b278f65p1e09a9jsn2a14c4da3b30',
        'x-rapidapi-host': 'cricket-api-free-data.p.rapidapi.com'
    }
}


export const scoreApi = async () => {
    try {
        const res = await axios.request(options)
        return res.data
    } catch (error) {
        console.log('Error', error)
        throw error

    }
}
