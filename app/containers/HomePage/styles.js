import styled from 'styled-components';

export const StyledWrapper = styled.main`
    max-width: 1040px;
    min-width: 800px;
    margin: auto;
    padding: 15px;

    h4 {
        margin: 0;
    }

    .events > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
    }
`;
