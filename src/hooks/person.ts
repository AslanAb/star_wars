import React, { useState, useEffect } from "react"
import { IPeople, IFilms } from '../common/models'
import apiClient from "../common/api"
import { useParams } from 'react-router-dom'

const usePerson = () => {
    const { personId } = useParams()
    const [person, setPerson] = useState<IPeople>(Object)
    const [loading, setLoading] = useState(false)
    const [films, setFilms] = useState<IFilms[]>([])

    const getPerson = async () => {
        try {
            setLoading(true)
            const res = await apiClient.get<IPeople>(`/people/${personId}/`)
            setPerson(res.data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log({ e })
        }
    }

    const getFilmsofPerson = async () => {
        try {
            const res = await apiClient.get<IPeople>(`/people/${personId}/`)
            const filmsArr: IFilms[] = []
            res.data.films.forEach(async (filmUrl) => {
                try {
                    const res = await apiClient.get<IFilms>(filmUrl)
                    filmsArr.push(res.data)
                    setFilms(films => {
                        const prevFilm = [...films]
                        prevFilm.push(res.data)
                        return prevFilm
                    })
                } catch (e) {
                    console.log({ e })
                }
            })
        } catch (e) {
            console.log({ e })
        }
    }

    useEffect(() => {
        getPerson()
        getFilmsofPerson()
    }, [])
    console.log(films);

    return { personId, person, loading, films }
}

export default usePerson