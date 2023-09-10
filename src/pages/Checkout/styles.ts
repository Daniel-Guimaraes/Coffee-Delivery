import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  form {
    display: grid;
    gap: 2rem;
    grid-template-columns: 40rem 28rem;
    grid-template-areas:
      'form cart'
      'payment cart';
  }

  @media (max-width: 768px) {
    form {
      display: flex;
      flex-direction: column;
    }
  }
`

export const FormData = styled.div`
  grid-area: form;

  > h3 {
    margin-bottom: 0.93rem;

    color: ${(props) => props.theme['brown-200']};

    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
  }
`

export const FormDataContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-300']};
  border-radius: 6px;

  .errorsMessage {
    font-size: 0.75rem;
    color: red;
  }

  .inputsContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    width: 100%;
    border: 1px solid ${(props) => props.theme['gray-500']};
    padding: 0.75rem;
    background-color: ${(props) => props.theme['gray-400']};
    border-radius: 6px;

    font-size: 0.875;
    color: ${(props) => props.theme['brown-100']};
  }

  .inputCEP {
    max-width: 12.5rem;
  }

  .numberAndComplementInput {
    display: flex;
    align-items: flex-start;
    position: relative;

    > div {
      display: grid;
      gap: 12px;
      margin-right: 12px;
    }

    label {
      position: absolute;
      right: 0.75rem;
      top: 15px;

      font-size: 0.875rem;
      font-style: italic;
    }

    .complementInput:focus ~ label {
      display: none;
    }
  }

  .localizationInputs {
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    > div {
      display: grid;
      gap: 12px;
    }

    > div:last-child input {
      text-transform: uppercase;
    }
  }

  @media (max-width: 768px) {
    padding-inline: 1.5rem;

    .inputsContainer {
      flex-wrap: wrap;
    }

    .numberAndComplementInput {
      > div:first-child {
        width: 40%;
      }

      > label {
        top: 13px;
        font-size: 0.8rem;
      }
    }

    .localizationInputs {
      flex-wrap: wrap;

      > div:first-child {
        width: 100%;
      }

      > div:nth-child(3) {
        width: 29%;
      }
    }
  }
`

export const InformationContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  p:nth-child(1) {
    color: ${(props) => props.theme['brown-200']};
    line-height: 1.3;
  }

  p:nth-child(2) {
    color: ${(props) => props.theme['brown-100']};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const PaymentDataContainer = styled.div`
  grid-area: payment;

  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-300']};
  border-radius: 6px;

  .paymentMethods {
    display: flex;
    gap: 0.75rem;

    > button {
      width: 100%;
      background-color: ${(props) => props.theme['gray-500']};
      border: 0;
      border-radius: 6px;
      padding: 1rem;

      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: ${(props) => props.theme['brown-100']};
      cursor: pointer;

      font-size: 0.75rem;

      svg {
        color: ${(props) => props.theme['purple-200']};
      }
    }

    .active {
      background-color: ${(props) => props.theme['purple-100']};
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    .paymentMethods {
      flex-wrap: wrap;

      > button {
        justify-content: center;
      }
    }
  }
`

export const SelectedCoffees = styled.div`
  grid-area: cart;

  h2 {
    margin-bottom: 0.93rem;

    color: ${(props) => props.theme['brown-200']};

    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
  }

  .containerOfSelectedCoffees {
    padding: 2.5rem;
    border-radius: 6px 44px;
    background-color: ${(props) => props.theme['gray-300']};

    .emptyListMessage {
      color: ${(props) => props.theme['brown-100']};
      text-align: center;
      border-bottom: 1px solid ${(props) => props.theme['gray-600']};
      margin-bottom: 2rem;

      h3 {
        font-size: 1.5rem;
      }

      svg {
        margin: 1rem 0 3rem;
      }
    }

    .priceInformationContainer {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1.5rem;

      > div {
        display: flex;
        justify-content: space-between;

        font-size: 0.875rem;

        strong {
          font-size: 1.25rem;
        }
      }
    }

    > button {
      width: 100%;
      padding: 0.75rem;
      border: 0;
      border-radius: 6px;
      background-color: ${(props) => props.theme['yellow-200']};

      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: ${(props) => props.theme.white};

      font-size: 0.875rem;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    @media (max-width: 768px) {
      .emptyListMessage {
        h3 {
          font-size: 1.2rem;
        }

        svg {
          width: 2.5rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 5rem;
  }
`
