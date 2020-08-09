import styled from "styled-components";
import { HtmlHTMLAttributes } from 'react';

export const StyledVideo = styled.div<HtmlHTMLAttributes<HTMLDivElement>>`
  position: relative;
  -webkit-box-flex: 2;
  -ms-flex: 2 0 900px;
  flex: 2 0 900px;

  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`;