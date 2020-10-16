import React, {useState} from 'react'

export default function Increment() {
    const styles = {
        container : {
            width : '5rem',
            borderWidth : '0.1rem',
            borderStyle : 'solid',
            padding : '1rem 0',   
            display :'flex',
            alignItems : 'center',
            justifyContent : 'space-evenly',
            borderRadius : '0.3rem',
        },

        forall : {
                width : '1rem',
                backgroundColor : 'transparent',
                border :'none',
                outline : 'none',
                color : '#000000',
                textAlign : 'center',
                fontWeight : '700'
        }
    }
    const [click, setClick] = useState(1);
    const handleincrement = ()=>{
        if(click>=1){
        setClick(click+1);
        }
    }
    const handledecrement = ()=>{
        if(click>1){
        setClick(click-1);
        }
    }


    return (
        <div style={styles.container}>
            <button style={styles.forall} onClick={handleincrement}>+</button>
            <input
            value={click}
            style={styles.forall}
            onChange={e => setClick(e.target.value)}/>
            <button style={styles.forall} onClick={handledecrement}>-</button>
        </div>
    )
}
