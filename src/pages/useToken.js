import { useEffect, useState } from "react"
import Fetcher from "./api/Fetcher"

const useToken = (user) => {
    const [token, setToken] = useState('')
    console.log(user?.email)
    useEffect(() => {
        (async () => {
            if (user?.email) {
                const { data } = await Fetcher.put('/token', {
                    email: user?.email
                })
                setToken(data.accessToken)
                console.log(data);

            }
        })()
    }, [user])
    return [token]
}
export default useToken