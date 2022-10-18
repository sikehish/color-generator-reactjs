import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [variety, setVariety] = useState(new Values('#f15025').all(10))

  const subHandler=(e)=>{
    e.preventDefault()
    try{
      const colors = new Values(color).all(10);
      setError(false)
      setVariety(colors)
      console.log(colors)
    }catch(err){
      setError(true)
      setVariety([])
      console.log(err)
    }
  }

  return(
    <>
      <section className='container'>
      <h3>Color generator</h3>
      <form action="">
        <input 
        type="text" 
        value={color} 
        onChange={(e)=>setColor(e.target.value)} 
        placeholder='#f15025'
        className={error? 'error': null}
        />
        <button type="submit" className='btn' onClick={subHandler}>submit</button>
      </form>
      </section>

      <section className='colors'>
          {variety.map((color,index)=> <SingleColor key={index} index={index} color={color} />)}
      </section>
    </>
  )

}

export default App
