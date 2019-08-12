import Inputmask from 'inputmask';
import { addOneAfter } from '../array';
import { filterArabicNumerals, splitDecimal } from '../number';

export function putMask(value, mask) {
  return Inputmask({ mask, jitMasking: true }).format(value);
}

export function removeMask(value, mask) {
  return Inputmask.unmask(value, { mask });
}

export function putMoneyMask(value, prefix) {
  let stringMoney = String(value);
  if (stringMoney === '') return '';
  const [integer, decimal] = splitDecimal(stringMoney);
  stringMoney = [integer, decimal.padEnd(2, '0')].join(',');

  return Inputmask('decimal', {
    groupSeparator: '.',
    digits: 2,
    radixPoint: ',',
    rightAlign: true,
    allowMinus: false,
    prefix: String(prefix)
  }).format(stringMoney);
}

export function removeMoneyMask(value) {
  let stringMoney = String(value);
  stringMoney = stringMoney.replace(/[^0-9]/g, '');

  if (stringMoney === '00') return '';

  // TODO: replace this logic by inputmask and use prefix
  stringMoney = stringMoney.padStart(3, '0');
  let arrayMoney = stringMoney.split('');
  arrayMoney = addOneAfter('.', arrayMoney.length - 3, arrayMoney);
  stringMoney = arrayMoney.join('');

  const [integer, decimal] = splitDecimal(stringMoney);

  stringMoney = `${integer}.${decimal}`;
  return Number(stringMoney);
}

export function putPhoneMask(phone) {
  let arrayPhone = filterArabicNumerals(phone);
  const lengthArrayPhone = arrayPhone.length;

  if (lengthArrayPhone > 2) {
    arrayPhone = addOneAfter('(', -1, arrayPhone);
    arrayPhone = addOneAfter(') ', 2, arrayPhone);

    if (lengthArrayPhone > 10) {
      arrayPhone = addOneAfter(' ', 8, arrayPhone);
    } else if (lengthArrayPhone > 8) {
      arrayPhone = addOneAfter(' ', 7, arrayPhone);
    }
  }

  return arrayPhone.slice(0, 14).join('');
}

export function removePhoneMask(phone) {
  return filterArabicNumerals(phone).slice(0, 11).join('');
}

// FIXME: if filled with "e"
export function putNumberMask(number) {
  return String(number);
}

export function removeNumberMask(string) {
  const stringNumber = string.replace(/[^0-9.-]/g, '');
  return stringNumber === '' ? '' : Number(stringNumber);
}
