import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

const create = async newObject => {
  const request = axios.post(baseUrl, newObject)
  const response = await request
  return response.data
}

const updatePerson = async (id,newObj) => {
  const request = axios.put(`${baseUrl}/${id}`,newObj)
  const response = await request
  return response.data
}

const deletePerson = async(id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  const response = await request
  return response.data
}

const personService = {
    getAll: getAll,
    create: create,
    updatePerson: updatePerson,
    deletePerson: deletePerson
  }
  
  export default personService