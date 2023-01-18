export const SimpsonComponent = (props) => {
   const {itemName, pctr} = props;
    return (
        <div>
            <h2>{itemName}</h2>
            <img src={pctr} alt="Homer"/>
        </div>
    );
}

export default SimpsonComponent;