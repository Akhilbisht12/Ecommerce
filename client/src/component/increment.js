import React, {useState} from 'react'

export default function increment() {
    const [click, setClick] = useState(1);
    return (
        <div>
            <button>+</button>
            <input value={click}
            onChange={setClick(value)}/>
        </div>
    )
}
