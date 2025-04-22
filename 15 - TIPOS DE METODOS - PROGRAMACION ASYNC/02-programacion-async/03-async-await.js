import axios from 'axios'

const getData = () => {
    return new Promise((resolve, reject) => {
        const error = false
        setTimeout(() => {
            if(!error) resolve('Data');
            reject('error')
        }, 2000);
    });
}

const obtenerDatos = async () => {
    try {
        const response = await getData()
        console.log(response)
    } catch (error) {
        throw new Error(error)
    }
}

obtenerDatos()

const getApi = async()=>{
    const { data } = await axios.get('http://localhost:8080/students')
    console.log(data)
}

getApi()
