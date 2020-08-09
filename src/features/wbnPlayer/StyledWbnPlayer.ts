import styled from 'styled-components';
import { HTMLAttributes } from 'react';

export const StyledWbnPlayer = styled.div<HTMLAttributes<HTMLDivElement>>`
    background: ${({ theme }) => theme.bgColor};
    border: ${p => p.theme.border};
    max-width: 1800px;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    min-height: 863px;
    transition: all .5s ease;
    
    @media screen and (max-height: 1400px) {
        display: block;
        max-height: 10000px;
    }
`
