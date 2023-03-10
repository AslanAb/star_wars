import usePlanets from '../hooks/planets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GetImage from '../components/GetImage';

const PlanetsPage = () => {
    const { planets, loading } = usePlanets()
    const navigate = useNavigate()

    const planetId = (url: string) => {
        const id = url.split('https://swapi.dev/api/planets/')[1].split('/')[0]
        return id
    }

    const view = (url: string) => {
        const id = url.split('https://swapi.dev/api/planets/')[1].split('/')[0]
        navigate(`/planets/${id}`)
    }

    return (
        <div className='bg-black pl-96 pr-96 pt-20 pb-40 h-full grid grid-rows-2 grid-flow-col gap-2'>
            {loading && <p>Loading...</p>}
            {
                planets.map((planet) => {
                    return (
                        <div key={planet.url} onClick={() => view(planet.url)} className="w-40 h-64 h-fit rounded-lg bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:brightness-150 duration-300">
                            <GetImage url={`https://starwars-visualguide.com/assets/img/planets/${planetId(planet.url)}.jpg`}/>
                            <p className='flex justify-center items-center h-8'>{planet.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PlanetsPage