import { useState } from 'react'

export default function useCounter() {

    const [count, setcount] = useState(0);
    
    const handleClickPlus = () => {
        setcount(currentValue => currentValue + 1)
    }

    const handleClickLess = () => {
        setcount(currentValue => currentValue - 1)
    }

  return {count, handleClickPlus, handleClickLess}
}
