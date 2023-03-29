import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, reOrdered } from './cakeSlice'

export const CakeView = () => {
   const numOfCakes =  useSelector((state) => state.cake.numberOfCakes)
   const dispatch = useDispatch()
  return (
    <>
    <h2>Number of Cakes - {numOfCakes} </h2>
    <button onClick={() => dispatch(ordered())}>Order Cakes</button>
    <button onClick={() => dispatch(reOrdered(3))}>Reorder Cakes</button>
    </>
  )
}
