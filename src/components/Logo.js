import { Component } from "react"

const styles={
    logo:{
        fontWeight:"900",
        fontsize:"4rem",
    }
}
class Logo extends Component {
    render(){
        return(
            <div style={styles.logo}>
             Technology Shop
            </div>
        )
    }
}

export default Logo