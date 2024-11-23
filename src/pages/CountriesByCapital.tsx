import CountriesList from '../components/CountriesList'
import Search from '../components/Search'

const CountriesByCapital = () => {
  return (
    <>
      <Search capital={true} />
      <CountriesList />
    </>
  )
}

export default CountriesByCapital
