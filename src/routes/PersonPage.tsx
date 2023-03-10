import usePerson from '../hooks/person'

const PersonPage = () => {
    const { personId, person, loading, films } = usePerson()
    
    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading &&
                <div className='flex'>
                    <div>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`} alt="" />
                    </div>
                    <div>
                        <p>{person.name}</p>
                        <p>gender: {person.gender}</p>
                        <p>height: {person.height} </p>
                        <p>mass: {person.mass}</p>
                        <p>birth-year: {person.birth_year}</p>
                        <div>Films:
                            {films.map((film) => {
                                return(
                                <ul key={film.url}>
                                    <li>Title: {film.title}</li>
                                    <li>Episode: {film.episode_id}</li>
                                    <li>Created: {film.created}</li>
                                    <li>Producer: {film.producer}</li>
                                </ul>
                            )})}
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default PersonPage