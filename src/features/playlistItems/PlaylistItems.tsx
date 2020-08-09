import React, { FC } from 'react';
import { PlaylistItem } from '../playlistItem/PlaylistItem';
import { StyledPlaylistItems } from './StyledPlaylistItems';
import { Video } from '../types';

interface Props {
    active: Video
    videos: Video[]
}

export const PlaylistItems: FC<Props> = ({active, videos}: Props) => {
    return (
        <StyledPlaylistItems>
            {videos.map(video => (
                <PlaylistItem
                    key={video.id}
                    active={video.id === active.id}
                    video={video}
                    played={video.played}
                />
            ))}

        </StyledPlaylistItems>
    )
}