import {
  cepMask,
  cepUnmask
} from './masks';

describe('masks', () => {
  describe('cepMask', () => {
    it('("93") to equal "93"', () => expect(cepMask('93')).toEqual('93'));
    it('("937") to equal "93.7"', () => expect(cepMask('937')).toEqual('93.7'));
    it('("93700") to equal "93.700"', () => expect(cepMask('93700')).toEqual('93.700'));
    it('("937000") to equal "93.700-0"', () => expect(cepMask('937000')).toEqual('93.700-0'));
    it('("93700000") to equal "93.700-000"', () => expect(cepMask('93700000')).toEqual('93.700-000'));
    it('("a") to equal ""', () => expect(cepMask('a')).toEqual(''));
    it('("93a") to equal "93"', () => expect(cepMask('93a')).toEqual('93'));
    it('("a93") to equal "93"', () => expect(cepMask('a93')).toEqual('93'));
    it('("93700a") to equal "93.700"', () => expect(cepMask('93700a')).toEqual('93.700'));
    it('(93) to equal "93"', () => expect(cepMask(93)).toEqual('93'));
    it('(100000000) to equal "10.000-000"', () => expect(cepMask(10000000)).toEqual('10.000-000'));
    it('("000000000") to equal "00.000-000"', () => expect(cepMask('00000000')).toEqual('00.000-000'));
  });

  describe('cepUnmask', () => {
    it('("93") to equal "93"', () => expect(cepUnmask('93')).toEqual('93'));
    it('("93.7") to equal "937"', () => expect(cepUnmask('93.7')).toEqual('937'));
    it('("93.700") to equal "93700"', () => expect(cepUnmask('93.700')).toEqual('93700'));
    it('("93.700-0") to equal "937000"', () => expect(cepUnmask('93.700-0')).toEqual('937000'));
    it('("93.700-000") to equal "93700000"', () => expect(cepUnmask('93.700-000')).toEqual('93700000'));
    it('("a") to equal ""', () => expect(cepUnmask('a')).toEqual(''));
    it('("93a") to equal "93"', () => expect(cepUnmask('93a')).toEqual('93'));
    it('("a93") to equal "93"', () => expect(cepUnmask('a93')).toEqual('93'));
    it('("93.700a") to equal "93700"', () => expect(cepUnmask('93.700a')).toEqual('93700'));
    it('(93) to equal "93"', () => expect(cepUnmask(93)).toEqual('93'));
    it('(100000000) to equal "10000000"', () => expect(cepUnmask(10000000)).toEqual('10000000'));
    it('("000000000") to equal "00000000"', () => expect(cepUnmask('00000000')).toEqual('00000000'));
  });
});
