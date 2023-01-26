import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

function App () {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    async function getRandomFact () {
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const json = await res.json()
      const currectFact = json.fact
      setFact(currectFact)
      const firstWord = currectFact.split(' ')[0]
      const res2 = await fetch(`https://cataas.com/cat/says/${firstWord}`)
      console.log(res2)
      setImgUrl(await res2.url)
    }

    getRandomFact()
  }, [])

  return (
    <div className='App'>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
      <img src={imgUrl} alt='cat' />
    </div>
  )
}

export default App
