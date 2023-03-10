import axios from 'axios'
import {useState, useEffect} from 'react'
interface IImg {
    url: string
}

const GetImage = (props:IImg) => {
    const [isImg, setIsImg] = useState(false)
    const isImgFn = async () => {
        try {
            const res = await axios.get(props.url)
            setIsImg(true)
        } catch (e) {
            setIsImg(false)
        }
    }
    useEffect(() => {
        isImgFn()
    }, [])

    return (
        <div>
            {isImg && <img src={props.url} className="rounded-t-lg"/>}
            {!isImg && <img src='https://starwars-visualguide.com/assets/img/big-placeholder.jpg' className="rounded-t-lg"/>}
        </div>
    )
}

export default GetImage