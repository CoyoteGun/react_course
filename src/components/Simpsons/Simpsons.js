import {SimpsonComponent} from "../SimpsonComponent/SimpsonComponent";

const Simpsons = () => {
    const simpsons = [
        {
            id:1,
            name:'Homer',
            image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
            info: 'aeiof  anmf  asgdrh sjgb aggba ujb aibg'
        },
        {
            id:2,
            name:'Marge',
            image: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png',
            info: 'aeiof  anmf  asgdrh sjgb aggba ujb aibg'
        },
        {
            id:3,
            name:'Bart',
            image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
            info: 'aeiof  anmf  asgdrh sjgb aggba ujb aibg'
        },
        {
            id:4,
            name:'Lisa',
            image: 'https://static.wikia.nocookie.net/simpsons/images/5/57/Lisa_Simpson2.png',
            info: 'aeiof  anmf  asgdrh sjgb aggba ujb aibg'
        },
        {
            id:5,
            name:'Maggie',
            image: 'https://static.simpsonswiki.com/images/thumb/9/9d/Maggie_Simpson.png/250px-Maggie_Simpson.png',
            info: 'aeiof  anmf  asgdrh sjgb aggba ujb aibg'
        }
    ]
    return (
        <div>
            {
                simpsons.map(simpson => <SimpsonComponent key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export {
    Simpsons
};