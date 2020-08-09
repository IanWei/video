import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { NightMode } from 'components/NightMode';
import { PlaylistHeader } from 'components/PlaylistHeader';
import { Playlist } from '../playlist/Playlist';
import { StyledWbnPlayer } from './StyledWbnPlayer';
import { light, dark } from 'theme';
import { Video as VideoType, Videos } from '../types';
import { Video } from '../video/Video';

interface Props extends RouteComponentProps<Params, {}, AutoPlay> {}

interface Params {
    activeVideo: string
}

type AutoPlay = boolean;

interface State {
    activeVideo: VideoType
    autoplay: boolean
    nightMode: boolean
    videos: VideoType[]
    playlistId: string
}

export const WbnPlayer: FC<Props> = ({ match, location, history }: Props) => {

    const videoSource: Videos = JSON.parse(document.querySelector<HTMLInputElement>('[name="videos"]')!.value);

    const initialState: State = {
        activeVideo: videoSource.playlist[0],
        videos: videoSource.playlist,
        playlistId: videoSource.playlistId,
        autoplay: false,
        nightMode: false,
    }

    const [state, setState] = useState(initialState);
    const { nightMode, autoplay, activeVideo, videos } = state;

    useEffect(() => {
        const videoId = match.params.activeVideo;
        if (!!videoId) {
            const newActiveVideo = videos.findIndex( (video: VideoType) => video.id === videoId );
            setState(prev => ({
                ...prev,
                activeVideo: prev.videos[newActiveVideo],
                autoplay: location.state
            }));
        } else {
            history.push({
                pathname: `/${activeVideo.id}`,
                state: false
            })
        }
    }, [activeVideo.id, history, location.state, match.params.activeVideo, videos])


    const nightModeCallback = () => {

    }

    const endCallback = () => {

    }

    const progressCallback = () => {

    }

    return (
        <ThemeProvider theme={dark}>
            <StyledWbnPlayer>
                <Video
                    active={activeVideo}
                    autoplay={autoplay}
                    progressCallback={progressCallback}
                    endCallback={endCallback}
                />
                <Playlist
                    active={activeVideo}
                    nightMode={nightMode}
                    videos={videos}
                    nightModeCallBack={nightModeCallback}
                />
            </StyledWbnPlayer>
        </ThemeProvider>
    )
}