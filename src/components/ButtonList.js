import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Music"/>
      <Button name="Trailers"/>
      <Button name="Podcasts"/>
      <Button name="Tamil Music"/>
      <Button name="PoP Music"/>
      <Button name="Cooking"/>
      <Button name="Cricket"/>
      <Button name="New to You"/>
    </div>
  )
}

export default ButtonList