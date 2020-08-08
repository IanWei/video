import React, { FC } from 'react';
import { PlaylistItem } from '../../components/PlaylistItem';

interface Props {

}

export const PlayListItems: FC<Props> = ({}: Props) => {
    return (
        <>
            <PlaylistItem/>
        </>
    )
}