import { useEffect, useState } from 'react'
import { Country } from '../interfaces/country'
const API_URL = 'https://restcountries.com/v3.1/all'
export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const getCountries = async () => {
    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      setCountries(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return {
    countries
  }
}
