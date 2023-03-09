import usePlanets from '../hooks/planets';
import { useNavigate } from 'react-router-dom';


const PlanetsPage = () => {
    const {planets, loading} = usePlanets()

    const navigate = useNavigate()

    const view = (url:string) => {
        const id = url.split('https://swapi.dev/api/planets/')[1].split('/')[0]
        navigate(`/planets/${id}`)
    }

    return (
        <div>
            {loading && <p>Loading...</p>}
            <ul>
            {
                planets.map((planet) => {
                    return (
                        <li key={planet.url} onClick={() => view(planet.url)}>{planet.name}</li>
                    )
                })
            }
        </ul>
        </div>
    )
}

export default PlanetsPage