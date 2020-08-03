import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`

`;

const Label = styled.label`

`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

function FormField({
  label, tipo, name, valor, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextarea = tipo === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';
  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        {label}
        :
        <Input
          as={tag}
          type={tipo}
          value={valor}
          name={name}
          onChange={onChange}
        />
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  tipo: 'text',
  valor: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  tipo: PropTypes.string,
  name: PropTypes.string.isRequired,
  valor: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
