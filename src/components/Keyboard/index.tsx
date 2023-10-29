import { useEffect, useState } from 'react';
import { KeyPadPool3,defaultPianoKeys } from '../../const';
import { SoundUtils } from '../../utils/SoundUtils';
import styles from './Keyboard.module.scss';
import classnames from 'classnames';
//init pianokeys


export default function Keyboard(props: {}) {

    const [keyId, setKeyId] = useState<number>(16);
    const [soundPlayer, setSoundPlayer] = useState<any>();

    useEffect(() => {
        setSoundPlayer(SoundUtils());//Dependency injection, can be replace easily with other sound player instance
    }, [])


    const keyPress = (keyId: number) => {
        setKeyId(keyId)
        if (soundPlayer) {
            soundPlayer?.playNode(keyId)
        }
    }

    const selectedKeyPadPool = KeyPadPool3;
    const getKeyPad = (keyId: number) => selectedKeyPadPool.filter(k => k.KeyId == keyId).shift()?.KeyPad ?? null;

    useEffect(() => {
        setTimeout(() => {
            document.addEventListener("keydown", (event) => {
                if (event.isComposing || event.keyCode === 229) {
                    return;
                }
                event.preventDefault();
                const keyId = selectedKeyPadPool.filter(k => k.KeyPad == event.key).shift()?.KeyId ?? null;
                keyId && keyPress(keyId);
            });
        }, 0);
    }, [soundPlayer])

    return (
        <>
            <div className={styles["p-wrapper"]}>
                <ul className={styles["piano"]} data-testid='keyboard'>
                    {defaultPianoKeys.map(key =>
                        <li className={
                            classnames([styles["key"],
                            keyId == key.blackKeyId || keyId == key.whiteKeyId ? styles["active"] : ''
                            ])
                        }
                            key={key?.blackKeyId ?? key.whiteKeyId}>
                            <div className={styles["white-key"]}
                                data-testid={`key-${key.whiteKeyId}`}
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
                                    data-testid={`key-${key?.blackKeyId}`}
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