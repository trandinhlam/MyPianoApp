import { useEffect, useState } from 'react';
import { KeyPadPool3 } from '../const';
import { SoundUtils } from '../utils/SoundUtils';
import styles from './Keyboard.module.scss';

//init pianokeys
const defaultPianoKeys = [
    { whiteKeyId: 16 },
    { whiteKeyId: 18, blackKeyId: 17 },
    { whiteKeyId: 20, blackKeyId: 19 },
    { whiteKeyId: 21 },
    { whiteKeyId: 23, blackKeyId: 22 },
    { whiteKeyId: 25, blackKeyId: 24 },
    { whiteKeyId: 27, blackKeyId: 26 },
    { whiteKeyId: 28 },
    { whiteKeyId: 30, blackKeyId: 29 },
    { whiteKeyId: 32, blackKeyId: 31 },
    { whiteKeyId: 33 },
    { whiteKeyId: 35, blackKeyId: 34 },
    { whiteKeyId: 37, blackKeyId: 36 },
    { whiteKeyId: 39, blackKeyId: 38 },
    { whiteKeyId: 40 },
    { whiteKeyId: 42, blackKeyId: 41 },
    { whiteKeyId: 44, blackKeyId: 43 },
    { whiteKeyId: 45 },
    { whiteKeyId: 47, blackKeyId: 46 },
    { whiteKeyId: 49, blackKeyId: 48 },
    { whiteKeyId: 51, blackKeyId: 50 },
    { whiteKeyId: 52 },
    { whiteKeyId: 54, blackKeyId: 53 },
    { whiteKeyId: 56, blackKeyId: 55 },
    { whiteKeyId: 57 },
    { whiteKeyId: 59, blackKeyId: 58 },
    { whiteKeyId: 61, blackKeyId: 60 },
    { whiteKeyId: 63, blackKeyId: 62 },
    { whiteKeyId: 64 }
];

export default function Keyboard(props: {}) {

    const [keyId, setKeyId] = useState<number>(16);

    const [soundPlayer, setSoundPlayer] = useState<any>();

    useEffect(() => {
        setSoundPlayer(SoundUtils());//Dependency injection, can be replace easyly with other Sound player instance
    }, [])

    const keyPress = (keyId: number) => {
        setKeyId(keyId)
        soundPlayer.playNode(keyId)
    }

    const getKeyPad = (keyId: number) => KeyPadPool3.filter(k => k.KeyId == keyId).shift()?.KeyPad ?? null;
    return (
        <>
            <div className={styles["p-wrapper"]}>
                <ul className={styles["piano"]}>
                    {defaultPianoKeys.map(key =>
                        <li className={styles["key"]}>
                            <div className={styles["white-key"]}
                                onClick={() => keyPress(key.whiteKeyId)}
                            >
                                <strong>
                                    {getKeyPad(key.whiteKeyId)}
                                </strong>
                            </div>
                            {key?.blackKeyId
                                ?
                                <div className={styles["black-key"]}
                                    onClick={() => keyPress(key.blackKeyId)}
                                >
                                </div >
                                :
                                <></>
                            }
                        </li >
                    )
                    }
                </ul >
            </div >
        </>
    )
}