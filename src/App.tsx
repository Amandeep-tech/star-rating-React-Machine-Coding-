import { useState } from 'react'

import './App.css'
import StarRating from './components/StartRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <StarRating 
        noOfStars={7}
        />
      </div>
    </>
  )
}

export default App
