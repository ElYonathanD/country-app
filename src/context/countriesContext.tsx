import { createContext } from 'react'
import { Countries, Country, Region } from '../interfaces/country'

interface Context {
  countries: Countries
  currentCountry: Country[]
  error: string
  loading: boolean
  getCountriesByCapital: (term: string) => void
  getCountriesByRegion: (region: Region) => void
  getCountryByCode: (code: string) => void
  region: Region
  searchCountries: (term: string) => void
}
export const countriesContext = createContext<Context>({
  countries: {
    all: [],
    byName: [],
    byCapital: [],
    Africa: [],
    Americas: [],
    Antarctic: [],
    Asia: [],
    Europe: [],
    Oceania: []
  },
  error: '',
  loading: false,
  currentCountry: [],
  region: Region.Americas,
  getCountriesByRegion: () => [],
  searchCountries: () => [],
  getCountriesByCapital: () => [],
  getCountryByCode: () => []
})
