export interface Videos {
    playlistId: string
    playlist: Video[]
}

export interface Video {
    id: string
    title: string | React.ReactNode
    num: number
    duration: number
    played: boolean
    video: string
}

export interface ProgressState {
    played: number
    playedSeconds: number
    loaded: number
    loadedSeconds: number
}

// { played: number, playedSeconds: number, loaded: number, loadedSeconds: number }