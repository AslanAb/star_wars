import usePeople from '../hooks/people';
import { useNavigate, useParams } from 'react-router-dom';
import usePerson from '../hooks/person';
import GetImage from '../components/GetImage';

const PeoplePage = () => {
    const { people, loading } = usePeople()
    const navigate = useNavigate()

    const personId = (url: string) => {
        const id = url.split('https://swapi.dev/api/people/')[1].split('/')[0]
        return id
    }

    const view = (url: string) => {
        const id = url.split('https://swapi.dev/api/people/')[1].split('/')[0]
        navigate(`/people/${id}`)
    }

    return (
        <div className='bg-black pl-96 pr-96 pt-20 pb-40 h-full grid grid-rows-2 grid-flow-col gap-2'>
            {loading && <p>Loading...</p>}
            {
                people.map((person) => {
                    return (
                        <div key={person.url} onClick={() => view(person.url)} className="w-40 h-64 h-fit rounded-lg bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:brightness-150 duration-300">
                            <GetImage url={`https://starwars-visualguide.com/assets/img/characters/${personId(person.url)}.jpg`}/>
                            <p className='flex justify-center items-center h-8'>{person.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PeoplePage