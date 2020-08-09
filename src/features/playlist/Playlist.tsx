import React, { FC } from 'react';
import { NightMode } from 'components/NightMode';
import { PlaylistHeader } from 'components/PlaylistHeader';
import { PlaylistItems } from '../playlistItems/PlaylistItems';
import { StyledPlaylist } from 'features/playlist/StyledPlaylist';
import { Active } from '../types';



export const Playlist: FC = () => {
    return (
        <StyledPlaylist>
            <NightMode nightMode={true} nightModeCallback={() => {}}/>
            <PlaylistHeader active={{} as Active} total={0}/>
            <PlaylistItems/>
        </StyledPlaylist>
    )
}