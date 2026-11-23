const VideoTitle = ({ title }) => {
  const { original_title, overview } = title;
  return (
    <div className="w-screen aspect-video absolute pt-[20%] mt-[10%] md:mt-0 md:px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl ml-4 md:ml-0 md:text-4xl font-bold">{original_title}</h1>
      <p className="hidden lg:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="mt-2 p-2 md:mt-0 md:p-0">
        <button type="button" className="bg-white font-bold text-black m-2 md:my-4 py-2 px-6 md:py-4 md:px-12 text-base md:text-xl  rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button type="button"
          className="bg-white font-bold text-black mx-2 py-2 px-6 md:py-4 md:px-12 text-base md:text-xl rounded-lg hover:bg-opacity-80">
          ⓘ More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle

