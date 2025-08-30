"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {

    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer= () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return(
            <div className="fixed bottom-0 right-0">
            <button
            onClick={handleVideoPlayer}
            
            className="text-color-primary float-right 
            bg-color-secondary px-3 mb-1">X</button>
            <YouTube videoId={youtubeId} 
            onReady={(event) => event.target.pauseVideo()}
            opts={option}
            onError={() => alert("Video Is Broken")}
            />
            
        </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
            <button
    onClick={handleVideoPlayer}
    className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl
    hover:bg-color-accent transition-all shadow-xl">TONTON TRAILER
    </button>
        )
    }

    return isOpen ? <Player/> : <ButtonOpenPlayer/>
    
}

export default VideoPlayer