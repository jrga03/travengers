import React, { PropTypes } from 'react';
import moment from 'moment/moment';

import Pin from '../../../assets/Icons/icon_location.svg';
import Calendar from '../../../assets/Icons/icon_date.svg';
import ChatBubble from '../../../assets/Icons/icon_chat_bubble.svg';
import Phone from '../../../assets/Icons/icon_phone.svg';
import ThumbUp from '../../../assets/Icons/icon_thumb_up.svg';
import ThumbUpOutline from '../../../assets/Icons/icon_thumb_up_outline.svg';
import Time from '../../../assets/Icons/icon_time.svg';

import { StyledWrapper } from './styles';

const EventCard = ({ details, liked, comments }) => (
    <StyledWrapper>
        <img src={ details.photo } alt="Event" />
        <div className="event-header" >
            <div>
                <h5>{ moment( details.dateStart ).get( 'date' ) }</h5>
                <h5>{ moment( details.dateStart ).format( 'MMM' ) }</h5>
            </div>
            <h5>{ details.title }</h5>
        </div>
        { details.location && <div className="event-row" >
            <img src={ Pin } alt="Location" />
            <p>{ details.location }</p>
        </div> }
        <div className="event-row" >
            <img src={ Calendar } alt="Date" />
            <p>
                { moment( details.dateStart ).isSame( details.dateEnd ) ?
                    moment( details.dateStart ).format( 'MMM D, YYYY' ) :
                    `${moment( details.dateStart ).format( 'MMM D, YYYY' )} To ${moment( details.dateEnd ).format( 'MMM D, YYYY' )}`
                }
            </p>
        </div>
        <div className="event-row" >
            <img src={ Time } alt="Time" />
            <p>
                { `${moment( details.dateStart ).format( 'hh:mm A' )} To ${moment( details.dateEnd ).format( 'hh:mm A' )}` }
            </p>
        </div>
        { details.contact && <div className="event-row" >
            <img src={ Phone } alt="Contact number" />
            <p>{ details.contact }</p>
        </div> }
        <div className="event-footer">
            <button>
                <img src={ liked ? ThumbUp : ThumbUpOutline } alt="Like" />
                <p>Interested</p>
            </button>
            <button>
                <img src={ ChatBubble } alt="Comments" />
                <p>{ comments }</p>
            </button>
        </div>
    </StyledWrapper>
);

EventCard.propTypes = {
    details: PropTypes.object,
    liked: PropTypes.bool,
    comments: PropTypes.number
};

EventCard.defaultProps = {
    liked: false,
    comments: 0
};

export default EventCard;
