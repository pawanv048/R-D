// import React, {useState} from 'react'

// // this cause issue when increment with 5 or something else, so, we use Previous state
// function HooksCounterTwo() {
//     const initialCount = 0
//     const [count, setCount] = useState(initialCount)

//     const incrementFive = () => {
//         for(let i=0; i<5; i++){
//             setCount(count + 1) // this will on update count with only 1. 
//         }
//     }
//   return (
//     <div>
//         Count: {count}
//         <button onClick={() => setCount(initialCount)}>Reset</button>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//         <button onClick={incrementFive}>Increment 5</button>
//     </div>
//   )
// };

// export default HooksCounterTwo;





import React, {useState} from 'react'

// this cause issue when increment with 5 or something else, so, we use Previous state
function HooksCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount + 1) // this will increment by 5
        }
    }
  return (
    <div>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
};

export default HooksCounterTwo;