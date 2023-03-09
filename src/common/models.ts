export interface IPeople {
    birth_year: string,
    eye_color: string,
    gender: string,
    hair_color: string,
    height: number,
    mass: number,
    name: string,
    skin_color: string,
    films: string[],
    homeworld: string,
    created: string,
    edited: string,
    species: string[],
    starships: string[],
    url: string,
    vehicles: string[]
}

export interface IFilms {
    title: string,
	episode_id: 4,
	opening_crawl: string,
	director: string,
	producer: string,
	release_date: string,
	characters: string[],
	planets: string[],
	starships: string[],
	vehicles: string[],
	species: string[],
	created: string,
	edited: string,
	url: string
}

export interface IPlanet {
    climate: string,
    created: string,
    diameter: string,
    edited: string,
    films: string[],
    gravity: string,
    name: string,
    orbital_period: string,
    population:string[],
    rotation_period: string,
    surface_water: string,
    terrain: string,
    url: string
}

export interface IStarship {
    MGLT: string,
    cargo_capacity: string,
    consumables: string,
    cost_in_credits: string,
    created: string,
    crew: string,
    edited: string,
    hyperdrive_rating: string,
    length: string,
    manufacturer: string,
    max_atmosphering_speed: string,
    model: string,
    name: string,
    passengers: string,
    films: string[],
    pilots: [],
    starship_class: string[],
    url: string
}