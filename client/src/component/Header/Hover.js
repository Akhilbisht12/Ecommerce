import React, {useState} from 'react'

export default function Hover({item}) {
    const [hover, setHover] =useState('none');
    const handleMouseEnter = () => {
        setHover('block')
    }
    const handleMouseLeave = () => {
        setTimeout(() => {
            setHover('none')
        }, 500);
    }
    const styles = {
        hover : {
            display : hover,
            position : 'fixed',
            background : 'white',
            width : '100%',
            top : 150,
            left : 0,
            borderTop : '1px solid lightgrey',
            padding : '2rem',
            height : '15rem'
        },
        list : {
            display : 'flex',
            flexWrap : 'wrap',
            width : '40%',
            listStyle : 'none'
        }
    }
    return (
        <div>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {item.name}
            </div>
            <div style={styles.hover} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                <ul style={styles.list}>
                    {item.subCategory.map((item)=>{
                        return(
                            <li style={{width : '12rem', margin : '1rem 2rem'}}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
