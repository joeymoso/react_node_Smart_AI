import React, { useState } from "react";
import "./Widgets.css";

const NewSession = (props) => {    
    const [disable, changeDisable] = useState(false);
    return <div className="options-container">
        {!disable &&
            <div>
                <button key={0} onClick={() => {
                    props.actionProvider.handleAllergic(`Modify my answer`);
                    //setState(state => ({ ...state, dietary: [] }))
                    //setState(state => ({ ...state, allergic: [] }))
                    changeDisable(true)
                }} className="option-button modify">
                    Modify my answer!
                </button>
            </div>
        }
    </div>;

}

export default NewSession