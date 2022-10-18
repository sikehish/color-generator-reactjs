import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({color, index}) => {
  // console.log(index)
  const {rgb,type,weight} = color
  const [alert, setAlert] = useState(false);

  const bg=rgb.join(",")
  const styles={
    backgroundColor: `rgb(${bg})`
  }

  const copyToClipboard=(rgb)=>{
   navigator.clipboard.writeText(rgbToHex(...rgb));
   setAlert(true)
   setTimeout(()=>{
      setAlert(false)
   },3000)
  }
  
  return (
     <article className={`color ${index>10 &&"color-light"}`} style={styles} onClick={()=>copyToClipboard(rgb)}>
        <p className='color-value'>{rgbToHex(...rgb)}</p>
        <p className='percent-value'>{weight}%</p>
        {alert && <p className='alert'>Copied to Clipboard</p>}
     </article>
  )
}

export default SingleColor
