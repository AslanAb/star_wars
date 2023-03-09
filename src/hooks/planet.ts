import React, { useState, useEffect } from "react"
import { IPlanet } from '../common/models'
import apiClient from "../common/api"
import { useParams } from 'react-router-dom'

const usePlanet = () => {
    const { planetId } = useParams()
    const [planet, setPlanet] = useState<IPlanet>(Object)
    const [loading, setLoading] = useState(false)
    const [isImg, setIsImg] = useState(false)

    const getPlanet = async () => {
        try {
            setLoading(true)
            const res = await apiClient.get<IPlanet>(`/planets/${planetId}/`)
            setPlanet(res.data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log({ e })
        }
    }
    const isImgFn = async () => {
        try {
            const res = await apiClient.get(`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`)
            setIsImg(true)
            console.log(res)
        } catch (e) {
            setIsImg(false)
        }
    }

    useEffect(() => {
        getPlanet()
        isImgFn()
    }, [])

    return { loading, planet, planetId, isImg }
}

export default usePlanet