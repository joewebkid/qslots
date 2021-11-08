import React from 'react'
import {
  Player,
  BigPlayButton,
  LoadingSpinner,
  ControlBar,
  ReplayControl,
  PlayToggle,
  ForwardControl
  // @ts-ignore
} from 'video-react' 
import 'video-react/dist/video-react.css'

export const QPlayer = ({ activeTheme, ...props }: {activeTheme: any}) => {
  return (
    <div style={{ width: 620 }}>
      <Player videoId='video-1' src={`https://${activeTheme.url}`}>
        <BigPlayButton position='center' />
        <ControlBar autoHide={false} >
          <PlayToggle />
          <ReplayControl seconds={10} order={2.2} />
          <ForwardControl seconds={10} order={2.3} />
        </ControlBar>
      </Player>
    </div>
  )
}
