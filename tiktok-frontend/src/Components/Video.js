import React, { useRef, useState } from "react"
import "./Video.scss"
import VideoFooter from "./VideoFooter"

function Video() {
  const c = "video"
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handleVideoPress = () => {
    // if video is playing
    // stop it...
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    }
    // else if its not playinh
    // play it...
    else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className={c}>
      <video
        onClick={handleVideoPress}
        className={`${c}__player`}
        loop
        ref={videoRef}
        src="https://instagram.fbom32-1.fna.fbcdn.net/v/t50.2886-16/122123678_841715466637282_4978082746803776628_n.mp4?_nc_ht=instagram.fbom32-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=djZGBWRj5y4AX8SLQiM&oe=5FC75400&oh=0c0511e8f104650214c4626db2bbc228"
      />

      <VideoFooter />
    </div>
  )
}

export default Video
