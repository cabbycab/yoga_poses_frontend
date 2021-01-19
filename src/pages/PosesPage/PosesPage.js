import ReactPlayer from "react-player";
import "./PosesPage.css";

const PosesPage = (props) => {
  return (
    <main className="page">
      <div className="display">
        {props.yogaPoses.results?.map((yogaPoses, idx) => (
          <div key={idx} className="container">
            <h3>
              {yogaPoses.sanskrit_name} ({yogaPoses.english_name})
            </h3>{" "}
            <br />
            <div className="view">
              <img src={yogaPoses.img_url} alt="pose" />
              <ReactPlayer
                url={yogaPoses.youtube}
                playsInline
                fluid={false}
                width={420}
                height={222}
                className="youtube"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PosesPage;
