
import "./Skill.css";


function Skill(props) {
 console.log(props.Skill);
  return (
    
      <div className="App-skill">

        <h2><i className="fa fa-suitcase" aria-hidden="true"></i> Kỹ Năng </h2>
        <p>HTML</p>
        <div className="progress">
          <div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
            70%
          </div>
        </div>
        <p>CSS</p>
        <div className="progress">
          <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
            70%
          </div>
        </div>
        <p>JAVASCRET</p>
        <div className="progress">
          <div className="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
            50%
          </div>
        </div>
        <p>REACT</p>
        <div className="progress">
          <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
            40%
          </div>
        </div>
      </div>
  );
}

export default Skill;