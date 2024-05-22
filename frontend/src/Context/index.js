import { useState, createContext } from "react"
import apiLocal from "../APIs/APILocal"
import { toast } from "react-toastify"

export const AuthContext = createContext()

export default function Contexts({ children }) {

    const [token, setToken] = useState("")
    const authentication = !!token

    async function VerifyToken() {
        try {

            const lsToken = localStorage.getItem("@LoginPaiva")
            if (!lsToken) {
                setToken("")
                return
            }

            const stToken = JSON.parse(lsToken)
            const bearerToken = stToken.token
            const idToken = stToken.id

            const response = await apiLocal.get(`/listar-usuario/${idToken}`, {
                headers: {
                    Authorization: "Bearer " + `${bearerToken}`
                }
            })

            if (response.data.id) {
                setToken(response.data.id)
                return(bearerToken)
            } else {
                setToken("")
            }

        } catch (err) {
            toast.error(err.response.data.error)
            setToken("")
            return
        }
    }

    async function SighIn(email, senha) {
        try {
            const response = await apiLocal.post("/logar-usuario", {
                email, senha
            })

            localStorage.removeItem("@LoginPaiva")
            localStorage.setItem("@LoginPaiva", JSON.stringify(response.data))

            return response

        } catch (err) {
            toast.warning("Erro ao validar login!", {
                toastId: "toastId"
            })
            setToken("")
            return
        }
    }

    return (
        <AuthContext.Provider value={{ sighIn: SighIn, authentication, VerifyToken }}>
            {children}
        </AuthContext.Provider>
    )
}