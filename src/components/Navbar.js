// import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";


function Navbar(props) {
// const handleBackgroundColorPicker =(event)=>{
//   props.hanndleBgColor(event.target.value);
//   console.log(event.target.value);

 
// }


    
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`} style={{backgroundColor:props.bgColor}}>
  <a className="navbar-brand" href="#">{props.titleText}</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/* <Link className="nav-link" to="/">{props.homeText}</Link> */}
        <a className="nav-link" href="#">{props.homeText}</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="/about">About Us</a>
      </li> */}
      
    </ul>


{/* style={{position:'absolute',right:'20px'}} */}
      {/* <div className="d-flex justify-content-end" > */}
        <div className={` form-check form-switch text-${props.mode==='light'? 'dark':'light' } `} style={{position:'absolute',right:'20px'}}>
             <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
             <label className="form-check-label mx-2  " htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
         </div>
         {/* <label htmlFor="exampleColorInput" className="form-label">Background Color</label>
        <input type="color" onChange={handleBackgroundColorPicker} className="form-control form-control-color" id="colorPicker" value="#563d7c" title="Choose your color"></input> */}
    
      </div>
     
</nav>
    </>
  )
}
// Navbar.propTypes = {
//   titleText :PropTypes.string,
// };
  // Navbar.defaultProps = {
  //   titleText: "Name ",
  // };
export default Navbar;
