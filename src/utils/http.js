export const get = async (url) => {
    try {
        const respuesta = await fetch(url)
        console.log(respuesta)
        if (!respuesta.ok) {
            throw new Error(`Algo paso: ${respuesta.status} ${respuesta.statusText}`)
        }
        const data = await respuesta.json()
        return data

    } catch (error) {
        console.log(`ERROR GET -> `, error)
    }
}

export const post = async (url, data) => {

    const fechConfig = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    try {
        const respuesta = await fetch(url, fechConfig)
        console.log(respuesta)
        if (!respuesta.ok) {
            throw new Error(`Algo paso: ${respuesta.status} ${respuesta.statusText}`)
        }
        const datos = await respuesta.json()

        return datos

    } catch (error) {
        console.log(`ERROR POST -> `, error)
    }
}
