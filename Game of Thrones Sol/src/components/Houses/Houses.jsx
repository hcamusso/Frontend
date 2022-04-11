import React, { Component } from 'react';
import { connect } from 'react-redux';
import imagen from '../../img-cp2/main-image-cp2.jpg'
import { getAllHouses } from '../../redux/actions';
// import { bindActionCreators } from 'redux';
import HouseCard from '../HouseCard/HouseCard';
// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX, JUNTO A MAP_STATE_TO_PROPS 
// Y MAP_DISPATCH_TO_PROPS!! <3

export class Houses extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.getAllHouses()
    }
    render() {
        return (
            <div>
                <h1>Game of Thrones</h1>
                <img src={imagen} alt="main-img"></img>
                <h3>Houses</h3>
                {this.props.houses.length > 0 && this.props.houses.map((e, i) => {
                    return (
                        <HouseCard name={e.name} region={e.region} words={e.words} id={e.id} key={i} />
                    )
                })}
            </div>
        );
    };
};



export const mapStateToProps = (state) => {
    return {
        houses: state.houses,
        house: state.house
    }
};
export const mapDispatchToProps =  {
    getAllHouses:getAllHouses
};
export default connect(mapStateToProps, mapDispatchToProps)(Houses);



