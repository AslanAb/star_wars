import useStarships from '../hooks/starships';
import { useNavigate } from 'react-router-dom';
import GetImage from '../components/GetImage';

const StarshipsPage = () => {
    const { starships, loading } = useStarships()
    const navigate = useNavigate()

    const starshipId = (url: string) => {
        const id = url.split('https://swapi.dev/api/starships/')[1].split('/')[0]
        return id
    }

    const view = (url: string) => {
        const id = url.split('https://swapi.dev/api/starships/')[1].split('/')[0]
        navigate(`/starships/${id}`)
    }

    return (
        <div className='bg-black pl-96 pr-96 pt-20 pb-40 h-full grid grid-rows-2 grid-flow-col gap-2'>
            {loading && <p>Loading...</p>}
            {
                starships.map((starship) => {
                    return (
                        <div key={starship.url} onClick={() => view(starship.url)} className="w-40 h-64 h-fit rounded-lg bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:brightness-150 duration-300">
                            <GetImage url={`https://starwars-visualguide.com/assets/img/starships/${starshipId(starship.url)}.jpg`}/>
                            <p className='flex justify-center items-center h-8'>{starship.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StarshipsPage