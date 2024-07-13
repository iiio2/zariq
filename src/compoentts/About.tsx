const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="about-us-image col-sm-6">
            <img
              src="https://www.reverie.school/wp-content/uploads/2024/02/Reverie-School-Students.jpg"
              alt="about-us"
              className="img-fluid"
            />
          </div>
          <div className="about-us-content col-sm-6 d-flex align-items-center">
            <div>
              <h3 className="title">
                Reverie School is admitting students from Playgroup to Grade 7
              </h3>
              <p className="lead">
                Reverie School follows the Pearson Edexcel curriculum and
                intends to deliver excellent educational programs in the
                following Key Learning Areas: English, Mathematics, Science,
                Technology, Global Citizenship, Creative Arts, Personal
                Development, Health and Physical Education as well as lessons in
                Quran, Islamic Studies and Arabic Language classes.
              </p>
              <br />
              <p>
                Here at Reverie School, we aim to help our precious children to
                think and act in ways that are truly inspiring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
