import styles from './UsersList.module.css'
import Card from "../UI/Card";

const UsersList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(
                    u => {
                        return (<li key={u.id}>{u.username} ({u.age} years old)</li>)
                    }
                )}
            </ul>
        </Card>
    );
}

export default UsersList;