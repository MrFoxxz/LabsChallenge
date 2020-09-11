import React from "react"

function List ({productos}) {
    
    return(
        <div>
            <ul>
                {productos.map(p => {
                    return (
                    <div>
                        <h4>{p.title}</h4>
                        <h4> $ {p.price}</h4>
                        <h5>{p.condition}</h5>
                        <h5>sotck disponible: {p.available_quantity}</h5>
                    </div>
                    )
                })}
            </ul>
        </div>

    )}

export default List;