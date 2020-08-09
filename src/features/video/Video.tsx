import React, { FC } from 'react';
import ReactPlayer from 'react-player';
import { StyledVideoWrapper } from './StyledVideoWrapper';
import { StyledVideo } from './StyledVideo';
import { ProgressState, Video as VideoType } from '../types';

interface Props {
    active: VideoType,
    autoplay: boolean,
    endCallback(): void,
    progressCallback(state: ProgressState): void
}

export const Video: FC<Props> = ( { active, autoplay, endCallback, progressCallback }: Props ) => {
    return (
        <StyledVideo>
            <StyledVideoWrapper>
                <ReactPlayer
                    width='100%'
                    height='100%'
                    style={ { position: 'absolute', top: '0' } }
                    playing={autoplay}
                    controls={true}
                    url={active.video}
                    onEnded={endCallback}
                    onProgress={progressCallback}
                />
            </StyledVideoWrapper>
        </StyledVideo>
    )
}