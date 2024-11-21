import './App.css'
import CountriesList from './components/CountriesList'

function App () {
  const searchCountry = (e) =>{
    console.log(e.target.value)
  }
  return (
    <>
      <input type="text" onChange={searchCountry} name="" id="" />
      <CountriesList />
    </>
  )
}

export default App
