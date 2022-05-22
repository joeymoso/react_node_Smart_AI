import React, { useState, useContext} from "react";

import "./Widgets.css";
import {Context} from '../../App.js'

const Options = (props) => {
    const [setting, setSetting] = useContext(Context);
    const [disable, changeDisable] = useState(false);

    return <div className="options-container">
        {!disable &&
            <div>
                <button key={0} onClick={() => {
                    props.actionProvider.handleAllergic(`Yes`);
                    changeDisable(true)
                }} className="option-button">
                    Yes.
                </button>
                <button key={1} onClick={() => {
                    setSetting({allergic: props.allergic, dietary: props.dietary})
                    props.actionProvider.handleSettingDone();
                    changeDisable(true)
                }} className="option-button submit" name="submit">
                    Find me recipes!
                </button>
            </div>
        }
    </div>;
}

export default Options;