import { styled } from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5rem;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 6.62rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-300']};
  }

  h3 {
    margin-bottom: 2.5rem;

    color: ${(props) => props.theme['brown-200']};

    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 400;
  }

  .containerGradient {
    padding: 1px;
    border-radius: 6px 36px;
    background: linear-gradient(
      to left,
      ${(props) => props.theme['purple-300']} 0%,
      ${(props) => props.theme['yellow-300']} 100%
    );
  }

  @media (max-width: 768px) {
    margin-top: 4rem;
    gap: 3rem;

    img {
      width: 25rem;
    }
  }
`

export const DeliveryData = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 5px 34px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    align-items: flex-start;
    gap: 12px;

    p {
      color: ${(props) => props.theme['brown-200']};
      line-height: 1.3;
    }

    span {
      display: flex;
      align-items: center;
      padding: 8px;
      border-radius: 100%;

      svg {
        color: ${(props) => props.theme['gray-100']};
      }
    }
  }

  > div:nth-child(1) > span {
    background: ${(props) => props.theme['purple-200']};
  }

  > div:nth-child(2) > span {
    background: ${(props) => props.theme['yellow-200']};
  }

  > div:nth-child(3) > span {
    background: ${(props) => props.theme['yellow-300']};
  }
`
