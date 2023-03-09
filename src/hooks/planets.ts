import React, { useState } from "react"
import apiClient from "../common/api"
import { useEffect } from "react"
import { IPlanet } from "../common/models"

const usePlanets = () => {
    const [planets, setPlanets] = useState<IPlanet[]>([])
    const [loading, setLoading] = useState(false)
    const getPlanets = async () => {
        try {
            setLoading(true)
            const res = await apiClient.get("/planets")
            setPlanets(res.data.results)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log({ e });
        }
    }

    useEffect(() => {
        getPlanets()
    }, [])

    return {planets, loading}
}

export default usePlanets