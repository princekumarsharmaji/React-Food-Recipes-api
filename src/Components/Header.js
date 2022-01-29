import "./Header.css";


function Header(props){

  
    return(
        <div className="header">
      <h1 className="display1"> <span className="material-icons">fastfood</span>
      Food Receipe<span class="material-icons">
lunch_dining
</span></h1>
     
      <div className="input-group w-50 mx-auto">
  <input type="text" class="form-control" placeholder="Search Your Receipe..." 
  value = {props.search} onChange={props.changeHandler} />
  
  <button className="btn btn-success" onClick={props.searchOnClick}>Search</button>
</div>
        </div>
    )
}

export default Header;