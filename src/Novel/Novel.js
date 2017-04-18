import React, { Component } from 'react';

import './Novel.css';

import { EditableText, Button } from '@blueprintjs/core'

class Novel extends Component {
    render() {
        return (
            <div className="novel pt-card">
                <EditableText minWidth="100px" placeholder="Novel title" className="titletext" />
                <div className="novel-edit">
                    <Button type="reflexbutton" iconName="minus" className="pt-button pt-minimal pt-icon-large" />
                    <EditableText placeholder="0" className="numbertext" />
                    <Button type="button" iconName="plus" className="pt-button pt-minimal pt-icon-large"  />
                </div>
                <div className="icon-footer">
                    <Button type="button" iconName="trash" className="pt-button pt-minimal" />
                    <Button type="button" iconName="star-empty" className="pt-button pt-minimal" />
                </div>
            </div>
        );
    }
}

export default Novel;