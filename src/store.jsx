/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState } from "react";




export const Color_Context = React.createContext([]);


const Store = ({ children }) => {
    const [color, setColor] = useState([]);

    return (

        <Color_Context.Provider
            value={[
                color,
                setColor,
            ]}
        >
            {
                children
            }

        </Color_Context.Provider>

    );
};

export default Store;