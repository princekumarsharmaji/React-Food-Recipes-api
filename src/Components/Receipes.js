

function Receipes(props){
    return (
<div className="container">
 <div className="row">
    {
        props.receipe.map(receipe =>(
            <div className="col-md-3">
                <div className="card py-2 text-center">
                <img src={receipe.recipe.image} className="img-fluid w-50 mx-auto rounded-circle"/>
                    <div className="card-body">
                      <h5>{receipe.recipe.label}</h5>
                      <ul>
                          {receipe.recipe.ingredientLines.map(ingredient =>(
                              <li>{ingredient}</li>
                          ))}
                      </ul>
                    </div>
                </div>
            </div>
        ))
    }
 </div>
            
</div>
    )
}

export default Receipes;