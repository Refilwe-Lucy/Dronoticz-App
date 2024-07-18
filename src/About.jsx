import drone from "/src/pictures/drone8.jpg";

function About() {
  return (
    <section id="about" className="section">
    <div className="About">
      <div>
        <img className="about-img" src={drone} alt="" />
      </div>
      <div>
        <h1 className="Abt-heading">ABOUT US</h1>
        <hr />
        <p className="abt-paragraph">
          Welcome to our dronoticz, where innovation and technology converge to
          shape the future. We revolutionize industries and improve lives
          worldwide through our passion for pushing the boundaries of what
          robots can do. With expertise in AI, computer vision, mechanical
          engineering, and automation, we lead the way in the robotics
          revolution. Our brilliant team creates intelligent machines that
          seamlessly integrate into daily life, enhancing productivity, safety,
          and efficiency.Join us on this exciting journey as we unlock new
          frontiers, solve complex challenges, and shape a future where
          intelligent machines work hand-in-hand with humans. Discover the power
          of robotics and be part of the revolution.
        </p>
      </div>
    </div>
    </section>
  );
}

export default About;
