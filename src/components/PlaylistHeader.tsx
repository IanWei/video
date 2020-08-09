import React, { FC } from 'react';
import { StyledJourney } from './StyledJourney';
import { StyledPlaylistHeader } from './StyledPlaylistHeader';
import { Video } from '../features/types';

interface Props {
    active: Video,
    total: number
}

export const PlaylistHeader: FC<Props> = ( { active, total }: Props ) => {
    return (
        <StyledPlaylistHeader>
            <p>{active.title}</p>
            <StyledJourney>
                {active.num} / {total}
            </StyledJourney>
        </StyledPlaylistHeader>
    )
}