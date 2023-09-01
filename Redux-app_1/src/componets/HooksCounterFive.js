import React, {useState, useEffect} from 'react'

function HooksCounterFive() {

    const [count, setCount] = useState(0) // default value
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - udating document title')
        document.title = `you Clicked ${count} times`
    },[count])

  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value )}/>
        <button onClick={() => setCount(count+1)}>Count {count} times</button>
    </div>
  )
}

export default HooksCounterFive