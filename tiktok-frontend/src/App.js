import React from "react"
import "./App.scss"
import Video from "./Components/Video"

function App() {
  const c = "app"

  return (
    <div className={c}>
      <section className={`${c}__videos`}>
        <Video />
        <Video />
      </section>
    </div>
  )
}

export default App
