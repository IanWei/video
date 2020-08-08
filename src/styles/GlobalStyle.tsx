import { createGlobalStyle, css } from 'styled-components'

interface Props {
    isLarge?: boolean
}

const myFont = ({isLarge}: Props) => {
    return isLarge ? css`font-size: var(--font-large)` : css`font-size: var(--font-normal);`
}

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Hind', sans-serif;
        ${myFont}    
    }
`