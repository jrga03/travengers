import React, { PureComponent } from 'react';
import { StyledWrapper } from './styles';

class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <StyledWrapper>
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
                        <div className="event">
                            <img src="https://images.freeimages.com/images/large-previews/478/jack-o-lanterns-1326113.jpg" alt="Test" />
                            <div>
                                <div className="event-date">
                                    <div>01</div>
                                    <div>Oct</div>
                                </div>
                                <h5 className="event-title">Tango for Fast Learners</h5>
                            </div>
                            <p>2 The Avenue London W13 8PH UK</p>
                            <p>Jul 15, 2014 To Jul 15, 2019</p>
                            <p>3:00 pm To 5:00 pm</p>
                            <p>(805) 735-2281111</p>
                        </div>
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
