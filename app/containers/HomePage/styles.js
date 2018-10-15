import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding: 15px;

    h4 {
        margin: 0;
    }

    .events {
        div .event{
            width: 250px;
            /* height: 200px; */

            img {
                width: 100%;
            }

            div {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                text-align: center;
                margin: 10px 0;

                .event-date {
                    padding: 0 15px;
                    margin: 0 10px 10px 0;
                    border-right-style: solid;
                    border-right-width: 1px;
                    border-color: gray;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    div {
                        margin: 0;
                    }
                }

                .event-title {
                    text-align: left;
                    margin: 0;
                    font-size: 15px;
                }
            }

            p {
                margin: 0;
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                font-size: 14px;
            }
        }
    }
`;
