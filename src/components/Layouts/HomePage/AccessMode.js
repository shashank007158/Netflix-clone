const AccessMode = () => {
  return (
    <section className="access">
      <div className="access--content">
        <div className="access--content--heading">
          <h1>Watch everywhere.</h1>
        </div>
        <div className="access--content--sub__heading">
          <h3>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h3>
        </div>
      </div>
      <div className="access--container">
        <div className="access--container--image">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt="access"
          />
        </div>
        <div className="access--container--video">
          <video
            className="our-story-card-video"
            autoPlay="true"
            playsInline=""
            muted
            loop="true"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};
export default AccessMode;
