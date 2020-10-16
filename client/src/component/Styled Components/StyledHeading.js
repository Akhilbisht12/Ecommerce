import styled, {css} from 'styled-components';
const StyledHeading = styled.p`
    font-weight : 800;
    margin : 0;
    padding : 0;
    margin-bottom : 0.2rem;
    margin-top : 0.2rem;

    ${props => props.small && css`
    font-size : 1rem;
  `}

    ${props => props.med && css`
    font-size : 2rem;
    `}

    ${props => props.large && css`
    font-size : 3rem;
  `}

    ${props => props.center && css`
      text-align : center;
    `}
`;

export default StyledHeading;