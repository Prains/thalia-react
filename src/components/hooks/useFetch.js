import { useEffect, useState } from "react"

const useFetch = (url) => {
    let [data, setData] = useState(null)

    useEffect(() => {
        fetch(`${url}`, {
        })
            .then((res) => { return res.json() })
            .then((data) => { setData(data) })
    }, [url])
    return { data }
}
export default useFetch