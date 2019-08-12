import { convertDateToBrazilianDate } from '../date';

// Error messages
export const MESSAGE_EMPTY_FIELD = 'O campo está vazio';
export const MESSAGE_REQUIRED_FIELD = 'Campo obrigatório';
export const MESSAGE_INVALID_PHONE = 'Telefone inválido';
export const MESSAGE_INVALID_CEP = 'Cep inválido';
export const MESSAGE_INVALID_EMAIL = 'Email inválido';
export const MESSAGE_INVALID_CPF = 'Cpf inválido';
export const MESSAGE_INVALID_DATE = 'Data inválida';
export const MESSAGE_INVALID_DATE_ABOVE = limit => `A data deve ser igual ou abaixo de ${convertDateToBrazilianDate(limit)}`;
export const MESSAGE_INVALID_DATE_BELOW = limit => `A data deve ser igual ou acima de ${convertDateToBrazilianDate(limit)}`;
export const MESSAGE_INVALID_NUMBER = 'Número inválido';
export const MESSAGE_INVALID_NUMBER_ABOVE = limit => `O número deve ser igual ou abaixo de ${limit}`;
export const MESSAGE_INVALID_NUMBER_BELOW = limit => `O número deve ser igual ou acima de ${limit}`;
export const MESSAGE_INVALID_CREDIT_CARD = 'Este não é um cartão de crédito válido';
export const MESSAGE_INVALID_FILE = 'Arquivo inválido';
export const MESSAGE_INVALID_SIZE = 'Arquivo excede tamanho limite de 15MB';

// Credit Card fields
export const CC_CPF = 'CPF do titular';
export const CC_CSC = 'Cód. de segurança';
export const CC_EXP_MONTH = 'Validade mês';
export const CC_EXP_YEAR = 'Validade ano';
export const CC_INSTALLMENTS = 'Parcelamento';
export const CC_NAME = 'Nome da titular';
export const CC_NUMBER = 'Número do cartão';
export const CC_SAVE = 'Guardar informações para compras futuras.';