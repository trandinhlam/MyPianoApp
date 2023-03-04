import Keyboard from '@/components/Keyboard';
import styles from './piano.module.scss';

export default function Piano() {

    return (
        <div className={styles["piano"]}>
            {/* <PlayControl /> */}
            <strong>Hello!!</strong>
            <br />
            <>Welcome to my simple funny piano simulation</>
            <br />
            <br />
            <strong>Let's enjoy playing music on web browser!</strong>
            <br />
            <br />
            <Keyboard />
        </div>
    )
}
