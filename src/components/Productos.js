import {Component} from "react"
import Producto from "./Producto"

const styles = {
    productos: {
        display: "flex",
        FlexDirection: "row",
        justifyContent: "space-between",
    }
}

class Productos extends Component {
    render() {
        const {productos, agregarAlCarro} = this.props
        return (
            <div>
                <div style={styles.productos}>
                    {productos.map(producto =>
                        <Producto
                            agregarAlCarro={agregarAlCarro}
                            key={producto.name}
                            producto={producto}
                        />)}
                </div>
            </div>
        )
    }
}

export default Productos
