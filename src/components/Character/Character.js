import './Character.css'

const Character = ({character}) => {
    const {id, name, status,species,gender,image} = character;
    return (
        <div>
            <div className={'smallBlocks'}>
                <h2 className={'header'}>{id}, {name}</h2>
                <p>Status:{status}, Species{species}, Gender{gender}</p>
                <img className={'imgRaM'} src={image} alt={name}/>
            </div>
        </div>
    );
};

export {
    Character
};