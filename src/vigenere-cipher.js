const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(msg, key) {
    return this.directMachineActive(msg, key, 1);
  }

  decrypt(msg, key) {
    return this.directMachineActive(msg, key, 0);
  }

  directMachineActive(msg, key, flag) {

    if (!msg || !key) throw new Error('Incorrect arguments!');

    msg = msg.toUpperCase();
    key = key.toUpperCase();
    let indexKey = 0;
    let res = '';

    for (let i = 0; i < msg.length; i += 1) {

      const charCode = msg.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        // c = (m + k) % 26;
        if (flag === 1) {
          res += String.fromCharCode(((charCode + key.charCodeAt(indexKey % key.length)) % 26) + 65);
        }

        if (flag === 0) {
          res += String.fromCharCode(((charCode - key.charCodeAt(indexKey % key.length) + 26) % 26) + 65);
        }

        indexKey += 1;
      } else {
        res += msg[i];
      }
    }

    return this.direct ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
