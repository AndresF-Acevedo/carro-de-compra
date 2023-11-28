import { Component } from "react"
import Productos from "./components/Productos"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Title from "./components/Title"

class App extends Component{
    state = {
        productos: [
            { name: "tomate", price:1500, img: "/productos/tomate.jpg"},
            { name: "arbeja", price:2500, img: "/productos/arbejas.jpg"},
            { name: "lechuga", price:1000, img: "/productos/lechuga.jpg"},
        ],
        carro: [],
    }

    agregarAlCarro = (producto) => {
        const { carro } =this.state
        if (carro.find(x => x.name === producto.name)){
            const newCarro = carro.map(x => x.name === producto.name
            ? ({
                    ...x,
                    cantidad: x.cantidad +1

                })
            :x)
            return this.setState({carro: newCarro})
        }
        return this.setState({
            carro:this.state.carro.concat({
                ...producto,
                cantidad:1,
            })
            }

        )

    }
    render() {
        return (
            <div>
                <Navbar carro={this.state.carro}> </Navbar>
                <Layout>
                    <Title  />
                    <Productos
                        productos={this.state.productos}
                        agregarAlCarro={this.agregarAlCarro}
                    />
                </Layout>
            </div>
        )
    }
}

export default App;
