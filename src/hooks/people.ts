import React, { useState } from "react"
import apiClient from "../common/api"
import { useEffect } from "react"
import { IPeople } from "../common/models"

const usePeople = () => {
    const [people, setPeople] = useState<IPeople[]>([])
    const [loading, setLoading] = useState(false)
    const getPeople = async () => {
        try {
            setLoading(true)
            const res = await apiClient.get("/people")
            setPeople(res.data.results)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log({ e });
        }
    }

    useEffect(() => {
        getPeople()
    }, [])

    return {people, loading}
}

export default usePeople