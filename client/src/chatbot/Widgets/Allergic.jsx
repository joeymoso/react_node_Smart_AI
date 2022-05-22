import React, { useState} from "react";
//import ToggleButton from '@mui/material/ToggleButton';
import MuiToggleButton from '@mui/material/ToggleButton';

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

import "./Widgets.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
// dairy, egg, gluten, peanut, sesame, seafood, shellfish, soy, sulfite, tree nut, and wheat
const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'black',
      backgroundColor: selectedColor,
    },
  }));

const Allergic = (props) => {
    const { setState } = props
    const items = ["dairy", "egg", "gluten", "peanut", "sesame", "seafood", "shellfish", "soy", "sulfite", "wheat"]
    const [value, setValue] = useState(props.allergic);
    const [disable, changeDisable] = useState(false);

    const [text, changeText] = useState('Skip');

    const handleChange = (event, val) => {
        setValue(val);
        changeText(val.length > 0 ? 'Next' : 'Skip')
        setState(state => ({ ...state, allergic: val }))
    };



    const buttonsMarkup = items.map((item) => (
        <ToggleButton selectedColor="white" className="option-btn" key={item} value={item}>{item}</ToggleButton>
    ));


    return (
        <div>
            {!disable &&
                <div className="buttons-div" >
                    <ToggleButtonGroup disabled={disable} id="allergic-group" className="btn-group" type="checkbox" value={value} onChange={handleChange}>
                        {buttonsMarkup}
                    </ToggleButtonGroup>

                    <Button
                        onClick={() => {
                            changeDisable(true)
                            props.actionProvider.handleDietary(value);
                        }}
                        className="option-button">{text}</Button>

                </div>
            }
        </div>
    );
};

export default Allergic;