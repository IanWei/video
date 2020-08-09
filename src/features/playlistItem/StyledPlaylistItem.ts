import { HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';


interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
    active: Active
    played?: boolean
}

interface Active {
    title: string,
    num: number
}

export const StyledPlaylistItem = styled.div<Props>`
    font-family: 'Hind', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: none;
    border: ${ p => p.active ? '2px dotted #696969' : 'none' };
    font-size: 1.6em;
    color: ${ p => p.theme.color };
    min-height: 50px;
    margin: 0 0 10px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${ p => p.active ? '5px' : '0' };
    cursor: pointer;
    position: relative;
    
    ::before {
        display: ${ p => p.active || !p.played ? 'none' : 'block' };
        content: '';
        width: 10px;
        min-height: 10px;
        background: #409f4e;
        position: absolute;
        left: 0;
        top: 19px;
    }
    
    .wbn-player__video-nr {
        flex-grow: 1;
        max-width: 30px;
        padding-right: 20px;
        border-right: 2px solid #565656;
    }
    
    .wbn-player__video-name,
    .wbn-player__video-name a {
        flex-grow: 10;
        padding: 0 0 0 10px;
        color: ${p => p.theme.color};
        text-align: left;
        text-decoration: none;
        display: block;
    }
    
    .wbn-player__video-download {
        flex-grow: 1;
        color: ${ p => p.played ? '#fff' : p.theme.color };
        margin: 0 0 0 20px;
        max-width: 30px;
        padding: 0 20px;
        border-left: 2px solid #565656;
        font-family: 'fontello', sans-serif;
        font-style: normal;
        font-weight: normal;
    }
`;
