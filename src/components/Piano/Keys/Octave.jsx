import React from 'react';
import { WhiteKey } from './WhiteKey';

export class Octave extends React.Component {
    render() {
        let component = (
            <div className="octave">
                <WhiteKey></WhiteKey>
                <WhiteKey></WhiteKey>                
                <WhiteKey hide="true"></WhiteKey>                
                <WhiteKey></WhiteKey>                
                <WhiteKey></WhiteKey>                
                <WhiteKey></WhiteKey>                
                <WhiteKey hide="true"></WhiteKey>
            </div>   
        );
        return component;
    }
}