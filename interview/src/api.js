
import axios from 'axios'

let Url = "https://api.github.com/users/nynishuyadav85";

export default async function fetchUserData() {
    const { data } = await axios.get(Url)

    return data
}

