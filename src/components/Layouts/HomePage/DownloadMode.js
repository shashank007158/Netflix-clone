const DownloadMode = () => {
  return (
    <section className="download">
      <div className="download--container">
        <div className="download--container--image">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="download"
          />
        </div>
        <div className="download--container--downloader">
          <div className="download--container--downloader__image">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="stranger things"
            />
          </div>
          <div className="download--container--downloader__content">
            <div className="download--container--downloader__content--name">
              <h5>Stranger Things</h5>
            </div>
            <div className="download--container--downloader__content--downloading">
              <h5>Downloading...</h5>
            </div>
          </div>
          <div className="download--container--downloader__video"></div>
        </div>
      </div>
      <div className="download--content">
        <div className="download--content--heading">
          <h1>Download your shows to watch offline.</h1>
        </div>
        <div className="download--content--sub__heading">
          <h3>
            Save your favourites easily and always have something to watch.
          </h3>
        </div>
      </div>
    </section>
  );
};
export default DownloadMode;
