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
                <section>
                    <header>
                        <h4>Popular Events</h4>
                    </header>
                    <hr />
                    <div>Popular events here</div>
                    <br />
                </section>
                <section>
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
