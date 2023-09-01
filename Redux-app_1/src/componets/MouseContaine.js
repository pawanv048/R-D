import React, {useState} from 'react';
import HooksMouse from './HooksMouse';

function MouseContaine() {

    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle display</button>
        {display && <HooksMouse/>}
    </div>
  )
}

export default MouseContaine