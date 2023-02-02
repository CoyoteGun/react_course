export const Cat = ({cat, dispatch}) => {
    const {id,name} = cat;
    return (
        <div>
            <div>
                {id}.{name}
                <button onClick={() => dispatch({type:'DELETE_CAT', payload:id})}>Delete</button>
            </div>
        </div>
    );
};

