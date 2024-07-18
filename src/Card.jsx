import card_1 from "./pictures/Drone1.jpeg"
import card_2 from "./pictures/Drone2.jpeg"
import card_3 from "./pictures/Drone4.jpeg"
import card_4 from "./pictures/Drone6.jpeg"
function Card(){

    return (
      <div>
        <div >
          <h1 className="card-heading">LATERST ARTICLES</h1>
          <hr />
        </div>
        <div className="card-img">
          <div className="card-sections">
            <img className="img" src={card_1} alt="" />
            <hr />

            <p className="disc">How to automate survillance drones</p>
          </div>

          <div className="card-sections">
            <img className="img" src={card_2} alt="" />
            <hr />
            <p className="disc">Robotics and artificial intelligence</p>
          </div>

          <div className="card-sections">
            <img className="img" src={card_3} alt="" />
            <hr />
            <p className="disc">improving lives through Robotics Prosthetics</p>
          </div>

          <div className="card-sections">
            <img className="img" src={card_4} alt="" />
            <hr />
            <p className="disc">Power of Robotics in Agriculture</p>
          </div>
        </div>
      </div>
    );
}

export default Card