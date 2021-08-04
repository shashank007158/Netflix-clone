const TVmode = () => {
  return (
    <section className="tv">
      <div className="tv--content">
        <div className="tv--content--heading">
          <h1>Enjoy on your TV.</h1>
        </div>
        <div className="tv--content--sub__heading">
          <h3>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h3>
        </div>
      </div>
      <div className="tv--container">
        <div className="tv--container--image">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="tv"
          />
        </div>
        <div className="tv--container--video">
          <video
            className="our-story-card-video"
            autoPlay="true"
            playsInline=""
            muted
            loop="true"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};
export default TVmode;
