import { HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';

export const StyledPlaylistHeader = styled.div<HtmlHTMLAttributes<HTMLDivElement>>`
    background: #696969;
    font-family: "Hind", sans-serif;
    font-weight: 800;
    font-size: 1.6em;
    color: #fff;
    padding: 0 20px;
    margin: 0 0 20px 0;
    min-height: 80px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`