import useStarship from '../hooks/starship'

const StarshipPage = () => {
    const { loading, starship, starshipId, isImg } = useStarship()

    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading &&
                <div className='flex'>
                    <div>
                        {isImg && <img src={`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`} alt="" />}
                        {!isImg && <img src={`https://starwars-visualguide.com/assets/img/big-placeholder.jpg`} alt="" />}
                    </div>
                    <div>
                        <p>{starship.name}</p>
                        <p>model: {starship.model}</p>
                        <p>starship_class: {starship.starship_class} </p>
                        <p>pilots: {starship.pilots}</p>
                        <p>max_atmosphering_speed: {starship.max_atmosphering_speed}</p>
                    </div>
                </div>}
        </div>
    )
}

export default StarshipPage