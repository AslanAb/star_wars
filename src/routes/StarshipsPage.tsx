import useStarships from '../hooks/starships';
import { useNavigate } from 'react-router-dom';


const StarshipsPage = () => {
    const {starships, loading} = useStarships()

    const navigate = useNavigate()

    const view = (url:string) => {
        const id = url.split('https://swapi.dev/api/starships/')[1].split('/')[0]
        navigate(`/starships/${id}`)
    }

    return (
        <div>
            {loading && <p>Loading...</p>}
            <ul>
            {
                starships.map((starship) => {
                    return (
                        <li key={starship.url} onClick={() => view(starship.url)}>{starship.name}</li>
                    )
                })
            }
        </ul>
        </div>
    )
}

export default StarshipsPage