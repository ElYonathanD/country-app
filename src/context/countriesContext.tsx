import { createContext } from 'react'
import { Countries, Country } from '../interfaces/country'

interface Context {
  filteredCountries: Country[]
  error: string
  getCountriesByRegion: (region: keyof Countries) => void
  searchCountries: (term: string) => void
  getCountriesByCapital: (term: string) => void
}
export const countriesContext = createContext<Context>({
  filteredCountries: [],
  error: '',
  getCountriesByRegion: () => [],
  searchCountries: () => [],
  getCountriesByCapital: () => []
})
