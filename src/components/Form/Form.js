import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from '../ComponentsStyle/CompStyles.module.css';

import {carValidator} from "../../validators/carValidator";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices/carSlice";
import {useEffect} from "react";

export const Form = () => {

    const {register, handleSubmit,reset, setValue,formState:{errors, isValid} } = useForm({mode:'all', resolver:joiResolver(carValidator)});
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year,{shouldValidate:true})
        }
    }, [carForUpdate]);

    const create = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    };

    const update = async (car) => {
        await dispatch(carActions.updateById({id:carForUpdate.id, car}))
        reset()
    };

    return (
            <form onSubmit={handleSubmit(carForUpdate?update:create)}>
                <div className={css.content}>
                    <div className={css.input_box_car}>
                        <input type="text" placeholder={'brand'} {...register('brand')}/>
                    </div>
                    <div className={css.input_box_car}>
                        <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
                    </div>
                    <div className={css.input_box_car}>
                        <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
                    </div>
                        <button className={css.create_btn} disabled={!isValid}>{carForUpdate?'Update':'Create'}</button>
                </div>
            </form>
    );
};