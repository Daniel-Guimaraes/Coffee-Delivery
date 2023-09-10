import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  background-color: ${(props) => props.theme['gray-300']};
  padding: 0 1.25rem 1.25rem;
  width: 16rem;

  margin-bottom: 2.5rem;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: -0.8rem;
  }

  .tags {
    margin: 1rem 0 1.25rem;

    display: flex;
    flex-direction: row;
    gap: 0.25rem;

    .tag {
      border-radius: 100px;
      padding: 0.3rem 0.5rem;
      background-color: ${(props) => props.theme['yellow-100']};

      display: flex;
      align-items: center;
      justify-content: center;
    }

    span {
      color: ${(props) => props.theme['yellow-300']};

      font-size: 0.625rem;
      font-weight: 700;
    }
  }

  h3 {
    color: ${(props) => props.theme['brown-200']};

    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
  }

  p {
    margin: 0.5rem 0 2rem;

    color: ${(props) => props.theme['gray-700']};

    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 20rem;

    img {
      margin-top: -1.2rem;
    }

    .tag > span {
      font-size: 0.875rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`

export const BuySection = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .price {
    margin-right: 1.375rem;

    display: flex;
    gap: 3px;
    align-items: baseline;

    font-size: 0.8rem;

    strong {
      font-size: 1.5rem;
      font-family: 'Baloo 2', sans-serif;
    }
  }

  @media (max-width: 768px) {
    .price {
      margin-right: 3rem;
      font-size: 1rem;
    }
  }
`
