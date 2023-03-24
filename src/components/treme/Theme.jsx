import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeItem from './ThemeItem'

/* --------------------------------- THEMAS --------------------------------- */
const themes = {
    default: {
        colors: {
            background: "#f1f1f1", // Color de fondo
            surface: "#FFF", // Color de fondo de tarjetas.
            text: "#989898", // Color del texto
            text2: "#000", // Color de las cantidades
        }
    },
    dark: {
        colors: {
            background: "#23292d",
            text: "#FFF",
            surface: "#32383b",
            text2: "#317e94",
        }
    }
}

/* ------------------------------- CUSTOMHOOK ------------------------------- */
// const useThemeMode = () => {
//     const [theme, setTheme] = useState('default');

//     const toggleTheme = () => {
//         if(theme === 'default'){
//             setTheme('dark')
//             return
//         }

//         setTheme('default')

//     }

//     return theme, toggleTheme
// }


const Theme = () => {
    const [theme, setTheme] = useState('default');

    const toggleTheme = () => {
        if(theme === 'default'){
            setTheme('dark')
            return
        }

        setTheme('default')

    }

    return (
        <div>
            <ThemeProvider theme={themes[theme]}>
                <ThemeItem change={toggleTheme}/>
            </ThemeProvider>
        </div>
    )
}

export default Theme
