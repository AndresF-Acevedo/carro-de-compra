import { Component } from "react"
import Productos from "./components/Productos"

class App extends Component{
    state = {
        productos: [
            { name: "tomate", price:1500, img: "/productos/tomate.jpg"},
            { name: "arbeja", price:2500, img: "/productos/arbejas.jpg"},
            { name: "lechuga", price:1000, img: "/productos/lechuga.jpg"},
        ]
    }
    render(){
        return(
            <div>
                <Productos
                    productos={this.state.productos}
                    agregarAlCarro={() => console.log("nada")}
                />
            </div>
        )
    }
}
export default App;
