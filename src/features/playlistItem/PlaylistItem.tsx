import React, { FC } from 'react';
import { StyledPlaylistItem } from './StyledPlaylistItem';
import { Video } from '../types';

interface Props {
    video: Video,
    active: boolean,
    played: boolean
}

export const PlaylistItem: FC<Props> = ( { active, played, video }: Props ) => {
    return (
        <StyledPlaylistItem active={active} played={played}>
            <div className='wbn-player__video-nr'>{video.num}</div>
            <div className='wbn-player__video-name'>{video.title}</div>
            <div className='wbn-player__video-download'>{video.duration}</div>
        </StyledPlaylistItem>
    )
}