import React from 'react';
import { Octave } from './Keys/Octave';
export class Piano extends React.Component {
    render() {
        let component = (
            <div>
                <Octave></Octave>
                <Octave></Octave>
                <Octave></Octave>
            </div>
        );
        return component;
    }
}