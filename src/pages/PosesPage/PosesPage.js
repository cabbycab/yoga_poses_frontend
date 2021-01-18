import ReactPlayer from "react-player";

const PosesPage = (props) => {
  return (
    <main className="page">
      <div>
        <div>
          <h1 className="name">Poses</h1> <br />
          <div>
            {props.yogaPoses.results?.map((yogaPoses, idx) => (
              <div key={idx}>
                <h3>{yogaPoses.sanskrit_name}</h3>
                <p>({yogaPoses.english_name})</p>
                <img src={yogaPoses.img_url} alt="pose" className="card" />
                <ReactPlayer url={yogaPoses.youtube} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PosesPage;
