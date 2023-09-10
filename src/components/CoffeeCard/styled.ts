import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: flex-start;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-500']};

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  .informationCoffee {
    margin-right: 3.12rem;

    display: flex;
    flex-direction: column;
    gap: 8px;

    > p {
      color: ${(props) => props.theme['brown-200']};
    }

    > div {
      display: flex;
      gap: 8px;
    }

    .amount {
      display: flex;
      align-items: center;
      gap: 4px;

      padding: 9px 8px;
      background-color: ${(props) => props.theme['gray-500']};
      border-radius: 6px;
      margin-right: 8px;

      > button {
        background: transparent;
        border: 0;

        display: flex;
        align-items: center;
        color: ${(props) => props.theme['purple-200']};
        cursor: pointer;
      }
    }

    .removeButton {
      padding: 0px 8px;
      border-radius: 6px;
      border: 0;
      background-color: ${(props) => props.theme['gray-500']};

      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;

      font-size: 0.75rem;
      font-weight: 400;

      svg {
        color: ${(props) => props.theme['purple-200']};
      }
    }
  }

  @media (max-width: 768px) {
    > p {
      font-size: 0.875rem;
    }

    .informationCoffee {
      margin-right: 0.7rem;

      > div {
        gap: 0;
      }
    }
  }
`
