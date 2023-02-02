import {Dog} from "./Dog";

export const Dogs = ({dogs, dispatch}) => {
    return (
        <div>
            {dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

