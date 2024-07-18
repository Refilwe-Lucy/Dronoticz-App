function Subscribe() {
  return (
    <div className="subs">
      <div>
        <h1 className="subHeading">SUBSCRIBE</h1>
         <p className="subtext">Sign-up to our newsletter </p> 
      </div>
      <div>
        <input className="input-text" type="text" placeholder="Your email" readOnly />
      </div>
      <div>
        <button className="sub-button">SUBMIT</button>
      </div>
    </div>
  );
}

export default Subscribe;
