import { createContext } from 'react'
import { Countries, Country } from '../interfaces/country'

interface Context {
  filteredCountries: Country[]
  error: string
  currentCountry: Country[]
  getCountriesByRegion: (region: keyof Countries) => void
  searchCountries: (term: string) => void
  getCountriesByCapital: (term: string) => void
  getCountryByCode: (code: string) => void
}
export const countriesContext = createContext<Context>({
  filteredCountries: [],
  error: '',
  currentCountry: [],
  getCountriesByRegion: () => [],
  searchCountries: () => [],
  getCountriesByCapital: () => [],
  getCountryByCode: () => []
})
