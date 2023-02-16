import {useDispatch} from "react-redux";

import css from '../ComponentsStyle/CompStyles.module.css';

import {carActions} from "../../redux/slices/carSlice";

export const Car = ({car}) => {

    const {id, brand, price,year} = car;

    const dispatch = useDispatch();

    return (
        <div className={css.car_block}>
            <h2>{id}. {brand}</h2>
            <p>Price:{price}</p>
            <p>Year:{year}</p>
            <button className={css.car_btn} onClick={() =>dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button className={css.car_btn} onClick={()=>dispatch(carActions.deleteById({id}))}>delete</button>
        </div>
    );
};