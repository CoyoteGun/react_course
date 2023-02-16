import {useSelector} from "react-redux";

import {Form} from "../../components/Form/Form";
import {Cars} from "../../components/Cars/Cars";

export const CarsPage = () => {
    const {loading} = useSelector(state => state.cars);

    return (
        <div className="App">
            <Form/>
            <hr/>
            {loading&&<h1>Loading...................</h1>}
            <Cars/>
        </div>
    );
};