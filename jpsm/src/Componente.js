import React from 'react'

class Componente extends React.Component {

    render(props){
        return(
            <div>
                <h1>{this.props.VetorPlayers.nome}</h1>
                <h2>{this.props.VetorPlayers.pais}</h2>
                <h3>{this.props.VetorPlayers.time}</h3>
            </div>
        )
    }
}

export default Componente