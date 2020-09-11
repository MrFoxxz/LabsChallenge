import React, { Component} from "react"
import axios from "axios"

//Containers (Componentes tontos)
import List from "./list.js"


class Catalog extends Component{

    state = {
        productos:[]
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/api/search?q={zapatillas}`)
            .then(res => {
                const productos = res.data.results;
                console.log(productos);

                this.setState({ productos : productos});
            })
            .catch(error => {console.log(error)})
    };

    render() {

        const {productos} = this.state

        return(
            <List productos={productos}/>
        )
    }
}
  
export default (Catalog);
  