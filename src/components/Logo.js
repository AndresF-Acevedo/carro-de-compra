import { Component } from "react"

const styles={
    logo:{
        fontWeight:"700",
        fontsize:"2rem",
    }
}
class Logo extends Component {
    render(){
        return(
            <div style={styles.logo}>
             SHOP
            </div>
        )
    }
}

export default Logo