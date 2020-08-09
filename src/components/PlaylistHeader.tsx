import React, { FC } from 'react';
import { StyledJourney } from './StyledJourney';
import { StyledPlaylistHeader } from './StyledPlaylistHeader';
import { Active } from 'features/types';

interface Props {
    active: Active,
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