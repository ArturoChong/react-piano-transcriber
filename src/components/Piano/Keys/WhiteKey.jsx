import React from 'react';
import { BlackKey } from './BlackKey'; 
import './style.css';
export class WhiteKey extends React.Component {
    render() {
        let component = (
            <div className="white-key">
                {!this.props.hide && <BlackKey/>}
            </div>
        );
        return component;
    }
}