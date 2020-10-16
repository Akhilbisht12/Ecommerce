import styled, {css} from 'styled-components';
const StyledButton = styled.button`
    font-weight : 600;
    margin : .5rem 1rem;
    padding : 1rem 2rem;
    border : none;
    border-radius : 0.5rem;

    ${props => props.primary && css`
    background-color : #2F29A3;
    color : #ffffff
    `}

    ${props => props.dilute && css`
    border-width : 0.1rem;
    border-color : #2F29A3;
    background-color : transparent;
    `}
`;

export default StyledButton;