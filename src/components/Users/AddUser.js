import styles from './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import {useState} from "react";

const AddUser = (props) => {

    const [error, setError] = useState({'title': '', 'msg': ''})

    const submitFormHandler = (event) => {
        event.preventDefault();
        const enteredUsername = event.target['username'].value;
        const enteredAge = event.target['age'].value;
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                'title': 'Invalid input',
                'msg': 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if (+enteredAge < 0) {
            setError({'title': 'Invalid age', 'msg': 'Please enter a valid age ( > 0 )'});
            return;
        }
        const newUser = {'username': enteredUsername, 'age': enteredAge, 'id': Math.random().toString()}
        props.onAddUser(newUser);
        event.target.reset();
    }

    const closeModal = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal onClose={closeModal} title={error.title} msg={error.msg}/>}
            <Card className={styles.input}>
                <form onSubmit={submitFormHandler}>
                    <label htmlFor="username">Username</label>
                    <input id={"username"} type={"text"}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id={"age"} type="number"/>
                    <Button type={"submit"}>Add User</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;