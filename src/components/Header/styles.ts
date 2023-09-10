import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.5rem;
  padding: 0 10rem;

  .requestAndLocalization {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .linkLogo:focus {
    border-radius: 6px;
  }

  .localization {
    padding: 0.5rem;
    background-color: ${(props) => props.theme['purple-100']};
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    color: ${(props) => props.theme['purple-300']};
    font-weight: 300;
    font-size: 0.875rem;
  }

  .cartLink {
    &:hover {
      box-shadow: 0 0 0 1px ${(props) => props.theme['purple-100']};
      border-radius: 6px;
    }
    &:active {
      box-shadow: 0 0 0 1px ${(props) => props.theme['purple-300']};
      border-radius: 6px;
    }
  }

  .buttonContainer {
    position: relative;
  }

  .amountRequest {
    width: 20px;
    height: 20px;
    top: -10px;
    right: -10px;
    background-color: ${(props) => props.theme['yellow-300']};
    border-radius: 50%;

    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.3;
    color: ${(props) => props.theme.white};

    font-size: 10px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 2rem;
  }
`
