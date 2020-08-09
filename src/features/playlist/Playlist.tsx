import React, { FC } from 'react';
import { NightMode } from 'components/NightMode';
import { PlaylistHeader } from 'components/PlaylistHeader';
import { PlaylistItems } from '../playlistItems/PlaylistItems';
import { StyledPlaylist } from 'features/playlist/StyledPlaylist';
import {  Video } from '../types';

interface Props {
    videos: Video[]
    active: Video
    nightMode: boolean
    nightModeCallBack(): void
}

export const Playlist: FC<Props> = ( { active, nightMode, nightModeCallBack, videos }: Props ) => {
    return (
        <StyledPlaylist>
            <NightMode nightMode={nightMode} nightModeCallback={nightModeCallBack}/>
            <PlaylistHeader active={active} total={videos.length}/>
            <PlaylistItems active={active} videos={videos}/>
        </StyledPlaylist>
    )
}