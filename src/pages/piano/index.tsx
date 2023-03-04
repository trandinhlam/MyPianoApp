import Keyboard from '@/components/Keyboard';
import styles from './piano.module.scss';

export default function Piano() {

    return (
        <div className={styles["piano"]}>
            {/* <PlayControl /> */}
            <Keyboard />
        </div>
    )

}
