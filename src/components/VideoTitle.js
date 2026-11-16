const VideoTitle = ({ title }) => {
  const { original_title, overview } = title;
  // console.log('Video title', props)
  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{original_title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button type="button" className="bg-white font-bold text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button type="button" 
        className="bg-white font-bold text-black mx-2 p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
        ⓘ More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle

