import React, { FC } from 'react';
import { PlaylistItem } from '../playlistItem/PlaylistItem';
import { StyledPlaylistItems } from './StyledPlaylistItems';
import { Active, Video } from '../types';

interface Props {

}

export const PlaylistItems: FC<Props> = () => {
    return (
        <StyledPlaylistItems>
            <PlaylistItem active={{} as Active} video={{} as Video} played={false}/>
        </StyledPlaylistItems>
    )
}