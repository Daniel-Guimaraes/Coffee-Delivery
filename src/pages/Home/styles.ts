import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
    margin-bottom: 3.375rem;
  }

  .cartButtonScroll {
    border: 1px solid ${(props) => props.theme['yellow-200']};
    padding: 0.8rem;
    border-radius: 50%;
    cursor: pointer;

    background-color: ${(props) => props.theme['yellow-100']};

    display: flex;
    align-items: center;

    position: fixed;
    z-index: 999;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;

    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;

    svg {
      color: ${(props) => props.theme['yellow-300']};
    }

    .buttonContainer {
      position: absolute;
      top: -5px;
      right: -3px;
    }

    .amountProducts {
      width: 20px;
      height: 20px;
      top: -10px;
      right: -10px;
      background-color: ${(props) => props.theme['yellow-300']};
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1.3;
      color: ${(props) => props.theme.white};

      font-size: 10px;
      font-weight: 700;
    }
  }

  .cartButtonScroll.active {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    h2 {
      text-align: center;
      margin-bottom: 6rem;
      font-size: 2.5rem;
    }
  }
`

export const BrandContainer = styled.section`
  padding: 5.75rem 0;

  display: flex;
  justify-content: center;
  gap: 3.5rem;

  @media (max-width: 767px) {
    flex-direction: column;

    img {
      margin-top: 2rem;
    }
  }
`

export const BrandContent = styled.div`
  max-width: 36.75rem;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;

    line-height: 1.3;
    color: ${(props) => props.theme['brown-300']};
  }

  > p {
    margin: 1rem 0 4.125rem;

    color: ${(props) => props.theme['brown-200']};
    line-height: 1.3;

    font-size: 1.25rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;

    &:nth-child(1) {
      margin-right: 2.3rem;
    }

    &:nth-child(3) {
      margin: 1.25rem 2rem 0 0;
    }

    &:nth-child(4) {
      margin-top: 1.25rem;
    }

    @media (max-width: 768px) {
      gap: 1.5rem;

      &:nth-child(1) {
        margin-right: 0;
      }

      &:nth-child(3) {
        margin: 0;
      }

      &:nth-child(4) {
        margin-top: 0;
      }
    }
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  &:nth-child(1) span {
    background-color: ${(props) => props.theme['yellow-300']};
  }

  &:nth-child(2) span {
    background-color: ${(props) => props.theme['brown-100']};
  }

  &:nth-child(3) span {
    background-color: ${(props) => props.theme['yellow-200']};
  }

  &:nth-child(4) span {
    background-color: ${(props) => props.theme['purple-200']};
  }
`

export const CoffeeList = styled.section`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
