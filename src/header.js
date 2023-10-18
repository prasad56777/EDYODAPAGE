const Header=()=>{
    return (
        <div id= "header">
        <div id="left-side-header">
        <ul style={{listStyleType:"none"}}>
          <li id="logo-e">
            Edyoda
          </li>
          <li id="story-text">
            Stories
          </li>
          </ul>
          <span id="explore">Explore Categories <i className="fa-solid fa-angle-down down-arrow"></i> </span>
          </div>
        <div id="right-side-header">
          <p id="edyoda-decription"> Edyoda is a learing and knowledge <br></br>sharing platform for techies</p>
          <button id="button-main"> Go to main Website</button>
        </div>

      </div>
    )
}
export default Header