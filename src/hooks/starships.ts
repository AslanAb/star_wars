import React, { useState } from "react"
import apiClient from "../common/api"
import { useEffect } from "react"
import { IStarship } from "../common/models"

const useStarships = () => {
    const [starships, setStarshipse] = useState<IStarship[]>([])
    const [loading, setLoading] = useState(false)
    const getStarships = async () => {
        try {
            setLoading(true)
            const res = await apiClient.get("/starships")
            setStarshipse(res.data.results)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log({ e });
        }
    }

    useEffect(() => {
        getStarships()
    }, [])

    return {starships, loading}
}

export default useStarships