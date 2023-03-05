import Keyboard from '@/components/Keyboard';
import Link from 'next/link';
import styles from './piano.module.scss';

export default function Piano() {

    return (
        <div className={styles["piano"]}>
            <strong>Hello!!</strong>
            <br />
            <>Welcome to my simple funny piano simulation</>
            <br />
            <br />
            <Keyboard />
            <br />
            <br />
            <div className={styles["description"]}>
                Source code here: <Link href="https://github.com/trandinhlam/MyPianoApp">https://github.com/trandinhlam/MyPianoApp</Link>.
                <br />
                {/* Since the first time I have coded this app by Angular on July 2017, now I'm rewriting it by using NextJS - a modern React framework. */}
                {/* <br /> */}
                The idea is inspired while I'm playing some interesting simple music games of <Link href="https://www.amanotes.com/products"><strong>Amannotes</strong></Link> such as Magic Tiles 3, Tiles Hop, Dancing Road,...
                <br />
                In the future I will develop some cool features in order to learn new powerful technologies and satisfy my passion for music.
                <br />
                Let feel free to contribute with me or send me your feedbacks, your awesome ideas or just give it a star :).
                <br />
                <br />
            </div>
            <strong>Thank you and enjoy playing music on web browser!</strong>
        </div>
    )
}
