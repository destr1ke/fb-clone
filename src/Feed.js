import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';

function Feeds() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
        </div>
    )
}

export default Feeds;
