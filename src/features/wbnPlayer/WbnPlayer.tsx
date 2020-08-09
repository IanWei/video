import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Playlist } from '../playlist/Playlist';
import { StyledWbnPlayer } from './StyledWbnPlayer';
import { dark, light } from 'theme';
import { ProgressState, Video as VideoType, Videos } from '../types';
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
    const retrievedData = window.localStorage.getItem(`${videoSource.playlistId}`);

    const initialState: State = {
        activeVideo: videoSource.playlist[0],
        videos: videoSource.playlist,
        playlistId: videoSource.playlistId,
        autoplay: false,
        nightMode: false,
    }

    const savedState = retrievedData ? JSON.parse(retrievedData) as State : initialState;

    const [state, setState] = useState(savedState);
    const { nightMode, autoplay, activeVideo, videos, playlistId } = state;

    useEffect(() => {
        window.localStorage.setItem(`${playlistId}`, JSON.stringify({...state}))
    }, [playlistId, state]);

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
        setState(prev => ({
            ...prev,
            nightMode: !prev.nightMode
        }))
    }

    const endCallback = () => {
        const videoId = match.params.activeVideo;
        const currentVideoIndex = videos.findIndex(({ id }) => id === videoId);
        const nextVideoIndex = currentVideoIndex === videos.length - 1 ? 0 : currentVideoIndex + 1;
        history.push({
            pathname: `${videos[nextVideoIndex].id}`,
            state: false
        })
    }

    const progressCallback = (e: ProgressState) => {
        if (e.playedSeconds > 10 && e.playedSeconds < 11) {
            const playedVideos = videos.find( video => video.id === activeVideo.id);
            playedVideos!.played = true;
            setState(prevState => ({
                ...prevState,
                videos
            }));
            // setState({
            //     ...state,
            //     videos: videos.map((el) => {
            //         return el.id === activeVideo.id
            //             ? { ...el, played: true }
            //             : el
            //     })
            // })
        }
    }

    return (
        <ThemeProvider theme={nightMode ? dark : light}>
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