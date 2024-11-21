import { useEffect, useState } from 'react'
import { Country } from '../interfaces/country'
const API_URL = 'https://restcountries.com/v3.1'
export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const [error, setError] = useState('')
  const getCountries = async () => {
    try {
      const res = await fetch(`${API_URL}/all`)
      if (res.status == 200) {
        const data = await res.json()
        setFilteredCountries(data)
        setCountries(data)
        setError('')
      } else {
        setError('Error al obtener países')
      }
    } catch (error) {
      console.log(error)
      setError('Error al obtener países')
    }
  }

  const searchCountries = async (term: string) => {
    if (term == '') {
      setFilteredCountries(countries)
      return
    }
    try {
      const res = await fetch(`${API_URL}/name/${term}`)
      if (res.status == 200) {
        const data = await res.json()
        setFilteredCountries(data)
        setError('')
      } else {
        setError('No hay países que mostrar')
      }
    } catch (error) {
      console.log(error)
      setError('Error al obtener países')
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return {
    filteredCountries,
    searchCountries,
    error
  }
}
