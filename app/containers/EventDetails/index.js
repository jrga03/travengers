import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { StyledWrapper } from './styles';

import { mockEvents } from '../App/fakeData';

class EventDetails extends PureComponent { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {
        routeParams: PropTypes.object
    };

    render() {
        const { title } = mockEvents[ mockEvents.findIndex(( event ) => `${event.id}` === this.props.routeParams.eventId ) ].details;

        return (
            <StyledWrapper>
                <Helmet
                    title="Travenger"
                    meta={ [
                        { name: 'Travenger', content: 'A group travel website for travelers' }
                    ] }
                />
                <h1>{ title }</h1>
                <hr />
            </StyledWrapper>
        );
    }
}

export default EventDetails;
