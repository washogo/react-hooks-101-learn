import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  const reset = () => setCount(0)
  const multiply = () => setCount(prevCount => prevCount * 2)
  // const triple = () => {
  //   if (count%3 === 0){
  //     setCount(count / 3)
  //   }
  // }
  // const triple = () => setCount(prevCount => {
  //   if(prevCount % 3 === 0){
  //     return prevCount / 3
  //   }else{
  //     return prevCount
  //   }
  // })
  const triple = () => setCount(prevCount => prevCount % 3 === 0 ? prevCount / 3 : prevCount)

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={multiply}>x2</button>
        <button onClick={triple}>３の倍数の時だけ３で割る</button>
      </div>
    </>
  )
}

export default App
