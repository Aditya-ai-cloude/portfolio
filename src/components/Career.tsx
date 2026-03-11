import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Video Editor</h4>
                <h5>Identity Agency</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              - Expert in creating high-performing video content tailored for Instagram.<br />
              - Successfully managed 2-3 accounts, driving brand engagement and growth.<br />
              - Produced videos with over 100k views, showcasing storytelling and strategic skills.<br />
              - Skilled in crafting visually appealing content to maximize reach and audience connection.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Freelancer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Today, I'm a part-time creative freelancer working on diverse video editing 
              projects and creating engaging digital content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
