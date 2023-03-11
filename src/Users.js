import axios from 'axios'
import { useEffect, useState } from 'react'

const fetchRandomData = async (page) => {
    const { data } = await axios.get(`https://randomuser.me/api?page=${page}`)
    return data
}



const Users = () => {
    const [counter, setCounter] = useState(1)
    const [userInfos, setUserInfos] = useState([])

    useEffect(() => {
        (async () => {
            const randomData = await fetchRandomData(counter)
            setUserInfos([...userInfos,...randomData.results])
            

        })()

    }, [counter])
    return (
        <div>
            <h1>FETCH</h1>

            <button onClick={() => setCounter(prev => prev + 1)} >FETCH USER </button>
            <p>UserCount: {userInfos.length}</p>

            {userInfos.length > 0 ? userInfos.map(el => {
                return (
                <div key={el.name.first}>{el.name.first}
                    <img alt='userimg' src={el.picture.large} />
                </div>)
            }) : "no users"}
        </div>
    )
}

export default Users