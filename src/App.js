import {Component} from "react"
import Productos from "./components/Productos"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Title from "./components/Title"

class App extends Component {
    state = {
        productos: [
            {
                name: "Mouse Gamer Logitech G Series Lightsync g203 Blanco",
                price: "$149.900",
                img: "/productos/Mouse.jpg"
            },
            {
                name: "SKYLONG SK61 Teclado Mecanico 60% (RedSwitches /Blanco-Gris)",
                price: "$250.000",
                img: "/productos/Teclado.avif"
            },
            {name: "Audifonos Gamer Razer Kraken X Blancos", price: "$339.900", img: "/productos/Audifonos.jpg"},
        ],
        carro: [],
        esCarroVisible: false,
    }

    agregarAlCarro = (producto) => {
        const {carro} = this.state
        if (carro.find(x => x.name === producto.name)) {
            const newCarro = carro.map(x => x.name === producto.name
                ? ({
                    ...x,
                    cantidad: x.cantidad + 1

                })
                : x)
            return this.setState({carro: newCarro})
        }
        return this.setState({
                carro: this.state.carro.concat({
                    ...producto,
                    cantidad: 1,
                })
            }
        )

    }

    mostrarCarro = () => {
        if (!this.state.carro.length) {
            return
        }
        this.setState({esCarroVisible: !this.state.esCarroVisible})
    }

    render() {
        const {esCarroVisible} = this.state
        return (
            <div>
                <Navbar carro={this.state.carro}
                        esCarroVisible={esCarroVisible}
                        mostrarCarro={this.mostrarCarro}
                />
                <Layout>
                    <Title/>
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
