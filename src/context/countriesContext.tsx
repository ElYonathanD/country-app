import { createContext } from 'react'
import { Countries, Country, Region } from '../interfaces/country'

interface Context {
  countries: Countries
  cleanError: () => void
  currentCountry: Country[]
  error: string
  getCountriesByCapital: (term: string) => void
  getCountriesByRegion: (region: Region) => void
  getCountryByCode: (code: string) => void
  loading: boolean
  region: Region
  searchCountries: (term: string) => void
}
export const countriesContext = createContext<Context>({
  countries: {
    all: [],
    byName: { term: '', countries: [] },
    byCapital: { term: '', countries: [] },
    Africa: [],
    Americas: [],
    Antarctic: [],
    Asia: [],
    Europe: [],
    Oceania: []
  },
  cleanError: () => [],
  currentCountry: [],
  error: '',
  getCountriesByCapital: () => [],
  getCountriesByRegion: () => [],
  getCountryByCode: () => [],
  loading: false,
  region: Region.Americas,
  searchCountries: () => []
})
