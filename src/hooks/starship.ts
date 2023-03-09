import React, { useState, useEffect } from "react"
import { IStarship } from '../common/models'
import apiClient from "../common/api"
import { useParams } from 'react-router-dom'

const useStarship = () => {
    const { starshipId } = useParams()
    const [starship, setStarship] = useState<IStarship>(Object)
    const [loading, setLoading] = useState(false)
    const [isImg, setIsImg] = useState(false)

    const getStarship = async () => {
        try {
            setLoading(true)
            const res = await apiClient.get<IStarship>(`/starships/${starshipId}/`)
            setStarship(res.data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log({ e })
        }
    }

    const isImgFn = async () => {
        try {
            const res = await apiClient.get(`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`)
            setIsImg(true)
        } catch (e) {
            setIsImg(false)
        }
    }

    useEffect(() => {
        getStarship()
        isImgFn()
    }, [])

    return { loading, starship, starshipId, isImg }
}

export default useStarship