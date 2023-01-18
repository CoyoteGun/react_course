import './SimpsonCompnt.css';

const SimpsonComponent = ({simpson}) => {
    const {name, image, info} = simpson;
    return (
        <div className={'block'}>
        <div className={'blocks'}>
            <h2>{name}</h2>
            <img className={'img'} src={image} alt={name}/>
            <p> Info: {info} </p>
        </div>
        </div>
    );
};

export {
    SimpsonComponent
};