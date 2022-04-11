import React from 'react';
import { useEffect, useState } from 'react';
import store from '../../redux/store';
import { getHouse } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCard from '../CharacterCard/CharacterCard';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    React.useEffect(() => {
        console.log(props)
        dispatch(getHouse(props.match.params.houseId))

        // store.dispatch(getHouse(match.params.houseId))
        // console.log(store.getState().house.name)
    }, [])

    return (
        <div>
            {/* {console.log(match.params)} */}
            {state.house.characters &&
                state.house.characters.map((e) => {
                    return (
                        <CharacterCard key={e.id} imageUrl={e.imageUrl} id={e.id} fullName={e.fullName} title={e.title} family={e.family} />
                    )
                })}


        </div>
    );
};

export default HouseDetail;
