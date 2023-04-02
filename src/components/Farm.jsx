import { useState, useEffect } from 'react'
import Trees from './Trees'

export default function Farm() {

    let [apples, setApples] = useState(0)
    let [oranges, setOranges] = useState(0)
    let [cost, setCost] = useState(0)


    useEffect(() => {
        const APPLES_PRICE = 2
        const ORANGES_PRICE = 3
        let applesSubtotal = apples * APPLES_PRICE
        let orangeSubtotal = oranges * ORANGES_PRICE
        let total = applesSubtotal + orangeSubtotal
        setCost(total)
    

        
      }, [apples, oranges]);


  return (

    
    <div> 
         <div>Cost: {cost}</div>
        <Trees fruit = {apples} setFruit = {setApples}/>
        <Trees fruit = {oranges} setFruit = {setOranges}/>
        
    </div>
  )
}
