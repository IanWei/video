import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { NightMode } from '../../components/NightMode';
import { PlaylistHeader } from '../../components/PlaylistHeader';
import { Playlist } from '../playlist/Playlist';
import { StyledWbnPlayer } from './StyledWbnPlayer';
import { light, dark } from 'theme';
import { Active } from '../types';

interface Props {

}

export const WbnPlayer: FC<Props> = () => {
    const [theme, setTheme] = useState(light)
    return (
        <ThemeProvider theme={light}>
            <StyledWbnPlayer>
                <PlaylistHeader active={{} as Active} total={0}/>
                <Playlist/>
            </StyledWbnPlayer>
        </ThemeProvider>
    )
}