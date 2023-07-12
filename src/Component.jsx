/* eslint-disable react/jsx-key */
import { useContext, useState } from "react";
import { Color_Context } from "./store";


const ButtonLogic = () => {
    const [color, setColor] = useContext(
        Color_Context
    );
    const [selectedColor, setSelectedColor] = useState({
        name: 'brown',
        value: '#964B00'
    })
    const colorData = [{
        name: 'red',
        value: '#FF0000'
    },
    {
        name: 'green',
        value: '#008000'
    },
    {
        name: 'blue',
        value: '#0000FF'
    },
    {
        name: 'black',
        value: '#000000'
    }]
    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * colorData.length);
        const randomColor = colorData[randomIndex];
        console.log("This is random color", randomColor)
        setSelectedColor(randomColor)
        const data = [...color, randomColor]
        setColor(data)

    }
    console.log("This is color", color)
    console.log("This is data", selectedColor)
    return (
        <div>
            <button type='button'
                style={{ background: `${selectedColor.value}`, color: 'white' }}
                onClick={handleClick} >Change Color</button>
            <div style={{ display: 'flex', width: '400px', flexWrap: 'wrap' }}>
                {color.map((item, index) => <p>{item.name}{(color.length - 1 === index) || (color.length === 1) ? '' : ','}</p>)}
            </div>
        </div>
    )
}

export default ButtonLogic