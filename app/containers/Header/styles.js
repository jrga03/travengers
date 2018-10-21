import styled from 'styled-components';

export const HeaderWrapper = styled.nav`
    width: 100%;
    height: 75px;
    background: #2b2b2b;
    color: #fff;
    padding: 15px;

    div {
        display: flex;
        max-width: 1040px;
        min-width: 800px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: auto;

        h1 {
            margin: 0;
        }

        h4 {
            margin: 0;
        }
    }
`;
