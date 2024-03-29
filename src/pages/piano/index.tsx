import Keyboard from '@/components/Keyboard';
import Link from 'next/link';
import styles from './piano.module.scss';
import ReactGA4 from 'react-ga4';
import { useEffect } from 'react';

export default function Piano() {

    useEffect(() => {
        //setup GA
        ReactGA4.initialize('G-YFG8XWQD5W');
        // ReactGA4.pageview(window.location.pathname + window.location.search);
    })

    return (
        <>
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
                    Source code here: <Link href="https://github.com/trandinhlam/MyPianoApp" target={'_blank'}>https://github.com/trandinhlam/MyPianoApp</Link>.
                    <br />
                    {/* Since the first time I have coded this app by Angular on July 2017, now I'm rewriting it by using NextJS - a modern React framework. */}
                    {/* <br /> */}
                    <br />
                    In the future I will develop some cool features in order to learn new powerful technologies and satisfy my passion for music.
                    <br />
                    Let feel free to contribute with me or send me your feedbacks, your awesome ideas or just give it a star :).
                    <br />
                    <br />
                </div>
                <strong>Thank you and enjoy playing music on web browser!</strong>
            </div>
        </>
    )
}