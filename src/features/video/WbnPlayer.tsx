import React, { FC } from 'react';
import { NightMode } from '../../components/NightMode';
import { PlaylistHeader } from '../../components/PlaylistHeader';
import { PlaylistItem } from '../../components/PlaylistItem';

interface Props {

}

export const WbnPlayer: FC<Props> = () => {
    return (
        <>
            <NightMode/>
            <PlaylistHeader/>
            <PlaylistItem/>
        </>
    )
}