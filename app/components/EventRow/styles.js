import styled from 'styled-components';

export const StyledWrapper = styled.div`
width: 100%;
`;

export const EventRowWrapper = styled.div`
width: 100%;
margin-bottom: 30px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;


a {
    text-decoration: none;

    img {
        width: 250px;
        object-fit: contain;
        margin-right: 25px;
        margin-top: 10px;
    }
}

& > div {
    flex: 1;
    display: -webkit-box;
    overflow : hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    padding-right: 80px;

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

    .description {
        overflow: hidden;
        text-overflow: ellipsis;
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

    & > p {
        margin-top: 10px;
    }

    a {
        font-size: 14px;
        padding-left: 4px;
    }
}
`;
