const Hero = () => {
  return (
    <div className="container hero">
      <div className="row">
        <div className="col-sm-6 col-12">
          <p>LEARN. PLAY. EXPLORE</p>
          <h2>A safe and joyful place for your lovely children</h2>
          <p className="hero-content">
            Assalamu Alaikum! Welcome to Reverie School, where academic
            excellence meets moral values. Located at Bashundhara Residential
            Area in Dhaka, our English medium institution offers a holistic
            education, nurturing students to thrive academically and
            spiritually. Join us for a journey of learning and enlightenment.
          </p>
          <div>
            <button className="btn btn-primary fw-bold p-1 p-3">
              Enroll your kid
            </button>
          </div>
        </div>
        <div className="col-sm-6 col-12 hero-gallery">
          <img
            src="https://www.reverie.school/wp-content/uploads/2024/02/Home-3.jpg"
            alt="hero-image"
            className="img-fluid rounded"
          />
          <img
            src="https://www.reverie.school/wp-content/uploads/2024/02/Home-2-1.jpg"
            alt="hero-image-2"
            className="img-fluid rounded hero-image-2"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
