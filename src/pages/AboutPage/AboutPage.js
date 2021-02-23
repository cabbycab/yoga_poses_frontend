import "./AboutPage.css";
import { Link } from "react-router-dom";

const AboutPage = (props) => {
  return (
    <main className="page">
      <div>
        <div className="about">
          <h1>Welcome to Yoga Poses!</h1>
          <div className="description">
            <br /> Here you can view 48 yoga poses, learn their sanskrit name
            and view a YouTube video on how to perform each one. Enjoy!{" "}
            <br></br>
            <br></br>
            <Link to="/poses">Click here</Link> to view all poses.
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
