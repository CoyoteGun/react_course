import {useForm} from "react-hook-form";
import {userService} from "../../services";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset} = useForm({mode:'all'});

    const submit = async (data) => {
        await userService.create(data).then(({data}) => setUsers((prevState) => [...prevState, data]))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>

            <input type="text" placeholder={'name'} {...register('name')}/>

            <input type="text" placeholder={'username'} {...register('username')}/>

            <button>Create</button>

        </form>
    );
};

export {
    UserForm
};