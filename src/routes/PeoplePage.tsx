import usePeople from '../hooks/people';
import { useNavigate } from 'react-router-dom';


const PeoplePage = () => {
    const {people, loading} = usePeople()

    const navigate = useNavigate()

    const view = (url:string) => {
        const id = url.split('https://swapi.dev/api/people/')[1].split('/')[0]
        navigate(`/people/${id}`)
    }

    return (
        <div>
            {loading && <p>Loading...</p>}
            <ul>
            {
                people.map((person) => {
                    return (
                        <li key={person.url} onClick={() => view(person.url)}>{person.name}</li>
                    )
                })
            }
        </ul>
        </div>
    )
}

export default PeoplePage