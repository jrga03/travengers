import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { StyledWrapper } from './styles';

import EventCard from '../../components/EventCard';

import { mockEvents } from './fakeData';

class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <StyledWrapper>
                <Helmet
                    title="Travenger"
                    meta={ [
                        { name: 'Travenger', content: 'A group travel website for travelers' }
                    ] }
                />
                <section>
                    <header>
                        <h4>Browse Events By Categories</h4>
                    </header>
                    <hr />
                    <div>Categories here</div>
                    <br />
                </section>
                <section className="events">
                    <header>
                        <h4>Popular Events</h4>
                    </header>
                    <hr />
                    <div>
                        {
                            mockEvents.map(( event ) => (
                                <EventCard
                                    key={ event.id }
                                    id={ event.id }
                                    details={ event.details }
                                    liked={ event.liked }
                                    comments={ event.comments }
                                />
                            ))
                        }
                    </div>
                    <br />
                </section>
                <section className="events">
                    <header>
                        <h4>Events</h4>
                    </header>
                    <hr />
                    <div>Events here</div>
                    <br />
                </section>
            </StyledWrapper>
        );
    }
}

export default HomePage;
