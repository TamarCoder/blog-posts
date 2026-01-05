import { Button } from "../../ReusableComponents/Button";
import styles from "./userButtons.module.scss";


export default function UserButtons() {
    return (
        <div className={styles.userButtonsContainer}>
            <Button variant="primary" size="sm">Login</Button>
            <Button variant="primary" size="sm">Sign Up</Button>
        </div>
    )
}