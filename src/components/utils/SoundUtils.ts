//This utils I use AudioContext to preload all .wav sound file before using, which is helpful for smooth first user experience.
//I have used closure technique concept aim to encapsulate the 'private' things that is only visible access in this module.
//The only thing public for outside utils is `playNode` function.
const AWS_S3_BUCKET = 'https://trandinhlamworldaudio.s3.ap-southeast-1.amazonaws.com';
export const SoundUtils = () => {
    
    let buffers: any[] = []
    let context: AudioContext;
    if (typeof AudioContext !== 'undefined') {
        context = new AudioContext();
    } else if (typeof (window as any).webkitAudioContext !== 'undefined') {
        context = new (window as any).webkitAudioContext();
    }

    for (let i = 16; i < 65; i++) {
        var soundPath = `${AWS_S3_BUCKET}/sounds/${i}.wav`;
        loadBuffer(i, soundPath);
    }

    function loadBuffer(name: number, path: string) {
        var request = new XMLHttpRequest();
        request.open("GET", path, true);
        request.responseType = "arraybuffer";
        request.onload = function () {
            context.decodeAudioData(
                request.response,
                function (buffer) {
                    console.log(buffer)
                    if (!buffer) {
                        alert('error decoding file data: ' + path);
                        return;
                    }
                    buffers[name] = buffer;
                },
                function (error) {
                    console.error('decodeAudioData error', error);
                }
            );
        }
        request.onerror = function () {
            console.log('BufferLoader: XHR error');
        }
        request.send();
    }

    function playNode(keyId: number) {
        console.log(buffers[keyId]);
        if (keyId < 16 || keyId > 64) {
            new RangeError("invalid keyId 16 - 64");
        }
        if (buffers.hasOwnProperty(keyId)) {
            let source = context.createBufferSource();
            source.buffer = buffers[keyId];
            source.connect(context.destination);
            source.start(0);
        }
        else {
            console.log("Audio not loaded for key=" + keyId);
        }
    }

    return { playNode }

}