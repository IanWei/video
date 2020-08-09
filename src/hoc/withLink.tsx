import React, { ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { Video } from '../features/types';

interface Props {
    video: Video
    active: boolean
    played: boolean
}

export const withLink = (WrappedComponent: ComponentType<Props>) => (props: Props) => {
    const newProps: Props = {
        ...props,
        video: {
            ...props.video,
            title: (
                <Link to={{ pathname: `/${props.video.id}`, state: true}}>
                    {props.video.title}
                </Link>
            )
        }
    }
    return <WrappedComponent {...newProps}/>
}