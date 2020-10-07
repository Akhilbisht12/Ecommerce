import styled, {css} from 'styled-components';
const StyledHeading = styled.p`
    font-weight : 800;
    display : flex;
    margin : 0;
    padding : 0;
    margin-bottom : 1rem;
    margin-top : 1rem;

    ${props => props.small && css`
    font-size : 1rem;
  `}

    ${props => props.med && css`
    font-size : 2rem;
    `}

    ${props => props.large && css`
    font-size : 3rem;
  `}
`;

export default StyledHeading;