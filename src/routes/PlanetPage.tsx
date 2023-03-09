import usePlanet from '../hooks/planet'

const PlanetPage = () => {
    const { loading, planet, planetId, isImg } = usePlanet()

    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading &&
                <div className='flex'>
                    <div>
                        {isImg && <img src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`} alt="" />}
                        {!isImg && <img src={`https://starwars-visualguide.com/assets/img/big-placeholder.jpg`} alt="" />}
                    </div>
                    <div>
                        <p>{planet.name}</p>
                        <p>population: {planet.population}</p>
                        <p>climate: {planet.climate} </p>
                        <p>gravity: {planet.gravity}</p>
                        <p>diameter: {planet.diameter}</p>
                    </div>
                </div>}
        </div>
    )
}

export default PlanetPage