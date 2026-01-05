import { Button } from "../../ReusableComponents/Button";
import styles from "./userButtons.module.scss";

export default function UserButtons() {
  return (
    <div className={styles.userButtonsContainer}>
      <Button variant="primary" size="sm" className={styles.loginButton}>
        Login
      </Button>
      <Button variant="primary" size="sm" className={styles.signUpButton}>
        Sign Up
      </Button>
    </div>
  );
}
