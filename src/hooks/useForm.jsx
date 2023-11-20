import { useState } from "react"

export const useForm = ( estadoInicial = {} ) => {
    
    const [values, setValues] = useState(estadoInicial)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setValues({
            ...values,
            [name]: value
        })
    }

    return [ values, handleInputChange ]

}
