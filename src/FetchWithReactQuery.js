import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const FetchWithReactQuery = () => {
    const {data } = useQuery(['cats'], async() => { 
        const { data } = await axios.get('https://catfact.ninja/fact') 
        return data
    })


    return (
        <div>
            <h1>Cat Facts</h1>
            <p>{data?.fact}</p>
        </div>
    )
}

export default FetchWithReactQuery