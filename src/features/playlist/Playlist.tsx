import React, { FC } from 'react';
import { NightMode } from 'components/NightMode';
import { PlaylistHeader } from 'components/PlaylistHeader';
import { PlaylistItems } from '../playlistItems/PlaylistItems';
import { StyledPlaylist } from 'features/playlist/StyledPlaylist';
import {  Video } from '../types';

interface Props {
    videos: Video[],
    active: Video
    nightModeCallBack(): void
    nightMode: boolean
}

export const Playlist: FC<Props> = ( { active, nightMode, nightModeCallBack, videos }: Props ) => {
    return (
        <StyledPlaylist>
            <NightMode nightMode={nightMode} nightModeCallback={nightModeCallBack}/>
            <PlaylistHeader active={active} total={0}/>
            <PlaylistItems active={active} videos={videos}/>
        </StyledPlaylist>
    )
}