import styled from 'styled-components';
import { HtmlHTMLAttributes } from 'react';

export const StyledPlaylistItems = styled.div<HtmlHTMLAttributes<HTMLDivElement>>`
    padding: 0 20px;
    overflow-y: auto;
    height: 28vw;
    max-height: 500px;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 2px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
`
