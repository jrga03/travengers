import styled from 'styled-components';

export const StyledWrapper = styled.div`
width: 240px;
height: 400px;
margin-bottom: 50px;
align-items: flex-start;
justify-content: flex-start;


a {
    text-decoration: none;

    img {
        width: 100%;
        height: 170px;
        object-fit: contain;
    }
}

.event-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    margin: 10px 0;

    div {
        padding: 0 15px;
        margin-right: 10px;
        border-right-style: solid;
        border-right-width: 1px;
        border-color: gray;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h5 {
            margin: 0;
            font-weight: normal;
        }
    }

    h5 {
        flex: 1;
        text-align: left;
        margin: 0;
        font-size: 15px;
        color: #000;
    }

    h5:hover {
        color: #0000EE;
    }
}

.event-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 4px;

    img {
        height: 20px;
        width: 15px;
        margin-right: 5px;
    }

    p {
        flex: 1;
    }
}

.event-footer {
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    button {
        display: flex;
        flex-direction: row;
        padding: 0;
        cursor: pointer;

        img {
            height: 20px;
            width: 10px;
            margin-right: 10px;
        }

        p {
            flex: 1;
            font-size: 12px;
            font-weight: 300;
        }
    }

    button:nth-of-type(1) {
        margin-right: 25px;
    }
}

p {
    margin: 0;
    font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
}
`;
