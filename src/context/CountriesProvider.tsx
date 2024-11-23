import { ReactNode, useCallback, useEffect, useState } from 'react'
import { Countries, Country } from '../interfaces/country'
import { countriesContext } from './countriesContext'

const API_URL = 'https://restcountries.com/v3.1'

interface CountriesProviderProps {
  children: ReactNode
}

// Crear el proveedor
export const CountriesProvider = ({ children }: CountriesProviderProps) => {
  const [countries, setCountries] = useState<Countries>({
    all: [],
    Africa: [],
    Americas: [],
    Antarctic: [],
    Asia: [],
    Europe: [],
    Oceania: []
  })
  const [error, setError] = useState('')
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])

  const getCountries = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/all`)
      if (res.status == 200) {
        const data = await res.json()
        setCountries((current) => ({ ...current, all: data }))
        setFilteredCountries(data)
      } else {
        setError('Error al obtener países')
      }
    } catch (error) {
      console.log(error)
      setError('Error al obtener países')
    }
  }, [])

  const getCountriesByRegion = async (region: keyof Countries) => {
    if (countries[`${region}`].length) {
      setFilteredCountries(countries[`${region}`])
      return
    }
    try {
      const res = await fetch(`${API_URL}/region/${region}`)
      const data = await res.json()
      setCountries((current) => ({ ...current, [region]: data }))
      setFilteredCountries(data)
    } catch (error) {
      console.error(error)
    }
  }

  const searchCountries = async (term: string) => {
    if (term == '') {
      setFilteredCountries(countries.all)
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
  return (
    <countriesContext.Provider
      value={{
        filteredCountries,
        error,
        getCountriesByRegion,
        searchCountries
      }}
    >
      {children}
    </countriesContext.Provider>
  )
}
