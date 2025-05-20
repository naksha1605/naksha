import React from 'react'
import video from './3869168-hd_1920_1080_30fps.mp4'
import audio from './audiocutter-pagal-iravai-maraigirai-66436.mp3'
import image from './pexels-webbshow-2406382.jpg'

function Sri() {
  return (
    <>
      <div>sri</div>
      <video src={video} controls></video>
      <audio src={audio} controls></audio>
      <img src={image} alt="jpg"></img>
      <iframe src="https://www.instagram.com/" frameborder="5"></iframe>
      <label>name</label>
      <input
         text="text"
         name="name"
      />
    
    </>
  )
}

export default Sri