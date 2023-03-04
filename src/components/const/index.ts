export enum PianoMode {
	Play,
	Quiz
}

export interface IPianoKey {
	whiteKeyId: number;
	blackKeyId?: number;
};
export const KeyPadPool = [
	//TYPE 1
	// // Tone 2
	{ KeyId: 28, KeyPad: '`' },
	{ KeyId: 30, KeyPad: 'q' }, { KeyId: 29, KeyPad: '1' },
	{ KeyId: 32, KeyPad: 'w' }, { KeyId: 31, KeyPad: '2' },
	{ KeyId: 33, KeyPad: 'e' },
	{ KeyId: 35, KeyPad: 'r' }, { KeyId: 34, KeyPad: '4' },
	{ KeyId: 37, KeyPad: 't' }, { KeyId: 36, KeyPad: '5' },
	{ KeyId: 39, KeyPad: 'y' }, { KeyId: 38, KeyPad: '6' },
	//Tone 3
	{ KeyId: 40, KeyPad: 'u' },
	{ KeyId: 42, KeyPad: 'i' }, { KeyId: 41, KeyPad: '8' },
	{ KeyId: 44, KeyPad: 'o' }, { KeyId: 43, KeyPad: '9' },
	{ KeyId: 45, KeyPad: 'p' },
	{ KeyId: 47, KeyPad: '[' }, { KeyId: 46, KeyPad: '-' },
	{ KeyId: 49, KeyPad: ']' }, { KeyId: 48, KeyPad: '=' },
	{ KeyId: 51, KeyPad: '\\' }, { KeyId: 50, KeyPad: '' },
	// tone 4
	{ KeyId: 52, KeyPad: 'z' },
	{ KeyId: 54, KeyPad: 'x' }, { KeyId: 53, KeyPad: 's' },
	{ KeyId: 56, KeyPad: 'c' }, { KeyId: 55, KeyPad: 'd' },
	{ KeyId: 57, KeyPad: 'v' },
	{ KeyId: 59, KeyPad: 'b' }, { KeyId: 58, KeyPad: 'g' },
	{ KeyId: 61, KeyPad: 'n' }, { KeyId: 60, KeyPad: 'h' },
	{ KeyId: 63, KeyPad: 'm' }, { KeyId: 62, KeyPad: 'j' },
	{ KeyId: 64, KeyPad: ',' }

];
export const KeyPadPool2 = [
	//Tone 3
	{ KeyId: 40, KeyPad: '`' },
	{ KeyId: 42, KeyPad: 'q' }, { KeyId: 41, KeyPad: '1' },
	{ KeyId: 44, KeyPad: 'w' }, { KeyId: 43, KeyPad: '2' },
	{ KeyId: 45, KeyPad: 'e' },
	{ KeyId: 47, KeyPad: 'r' }, { KeyId: 46, KeyPad: '4' },
	{ KeyId: 49, KeyPad: 't' }, { KeyId: 48, KeyPad: '5' },
	{ KeyId: 51, KeyPad: 'y' }, { KeyId: 50, KeyPad: '6' },
	// tone 4
	{ KeyId: 52, KeyPad: 'u' },
	{ KeyId: 54, KeyPad: 'i' }, { KeyId: 53, KeyPad: '8' },
	{ KeyId: 56, KeyPad: 'o' }, { KeyId: 55, KeyPad: '9' },
	{ KeyId: 57, KeyPad: 'p' },
	{ KeyId: 59, KeyPad: '[' }, { KeyId: 58, KeyPad: '-' },
	{ KeyId: 61, KeyPad: ']' }, { KeyId: 60, KeyPad: '=' },
	{ KeyId: 63, KeyPad: '\\' }, { KeyId: 62, KeyPad: '' },
	{ KeyId: 64, KeyPad: '\'' }

];

export const KeyPadPool3 = [
	// Tone 1
	{ KeyId: 16, KeyPad: '`' },
	{ KeyId: 18, KeyPad: 'q' }, { KeyId: 17, KeyPad: '1' },
	{ KeyId: 20, KeyPad: 'w' }, { KeyId: 19, KeyPad: '2' },
	{ KeyId: 21, KeyPad: 'e' },
	{ KeyId: 23, KeyPad: 'r' }, { KeyId: 22, KeyPad: '4' },
	{ KeyId: 25, KeyPad: 't' }, { KeyId: 24, KeyPad: '5' },
	{ KeyId: 27, KeyPad: 'y' }, { KeyId: 26, KeyPad: '6' },
	// Tone 2
	{ KeyId: 28, KeyPad: 'u' },
	{ KeyId: 30, KeyPad: 'i' }, { KeyId: 29, KeyPad: '8' },
	{ KeyId: 32, KeyPad: 'o' }, { KeyId: 31, KeyPad: '9' },
	{ KeyId: 33, KeyPad: 'p' },
	{ KeyId: 35, KeyPad: '[' }, { KeyId: 34, KeyPad: '-' },
	{ KeyId: 37, KeyPad: ']' }, { KeyId: 36, KeyPad: '=' },
	{ KeyId: 39, KeyPad: '\\' }, { KeyId: 38, KeyPad: '' },
	//Tone 3
	{ KeyId: 40, KeyPad: 'z' },
	{ KeyId: 42, KeyPad: 'x' }, { KeyId: 41, KeyPad: 's' },
	{ KeyId: 44, KeyPad: 'c' }, { KeyId: 43, KeyPad: 'd' },
	{ KeyId: 45, KeyPad: 'v' },
	{ KeyId: 47, KeyPad: 'b' }, { KeyId: 46, KeyPad: 'g' },
	{ KeyId: 49, KeyPad: 'n' }, { KeyId: 48, KeyPad: 'h' },
	{ KeyId: 51, KeyPad: 'm' }, { KeyId: 50, KeyPad: 'j' },
	// tone 4
	{ KeyId: 52, KeyPad: 'Z' },
	{ KeyId: 54, KeyPad: 'X' }, { KeyId: 53, KeyPad: 'S' },
	{ KeyId: 56, KeyPad: 'C' }, { KeyId: 55, KeyPad: 'D' },
	{ KeyId: 57, KeyPad: 'V' },
	{ KeyId: 59, KeyPad: 'B' }, { KeyId: 58, KeyPad: 'G' },
	{ KeyId: 61, KeyPad: 'N' }, { KeyId: 60, KeyPad: 'H' },
	{ KeyId: 63, KeyPad: 'M' }, { KeyId: 62, KeyPad: 'J' },
	{ KeyId: 64, KeyPad: ',' }
];