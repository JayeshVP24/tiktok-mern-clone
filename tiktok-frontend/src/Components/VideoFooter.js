import React from "react"
import "./VideoFooter.scss"
import MusicNoteIcon from "@material-ui/icons/MusicNote"

function VideoFooter() {
  const c = "videoFooter"
  return (
    <div className={c}>
      <section className={`${c}__text`}>
        <h3>@jayesh</h3>
        <p>This is some description</p>
      </section>
    </div>
  )
}

export default VideoFooter
