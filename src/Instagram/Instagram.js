import React, { Component } from 'react'
import './Instagram.scss'
import InstaToolbar from './toolbar/InstaToolbar'
import InstaPost from './Post/InstaPost';
import InstaStatus from './status/InstaStatus';
import Suggestion from './Suggestions/Suggestion';

export class Instagram extends Component {
    render() {
        return (
            <div className="instagram">
              <InstaToolbar />
              <hr />
              <div className="container">
                <div className="row instgram-content">
                  <InstaPost  className="col-md-6 first"/>
                  <div className="col-md-6 second">
                    <div className="profile">
                      <img src="/post/aarish.jpg" alt="dp" className="profile-dp"></img>
                      <span className="profile-disc">
                      <label><strong>nightmare_king</strong></label>                   
                      <label className="user">Aarish Hussain</label>                   
                      </span>
                    </div>
                    <InstaStatus />
                    <Suggestion />                           
                  </div>
                </div> 
              </div>
            </div>
        )
    }
}

export default Instagram
