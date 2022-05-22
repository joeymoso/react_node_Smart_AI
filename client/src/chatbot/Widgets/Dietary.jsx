import React, { useState } from "react";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MuiToggleButton from '@mui/material/ToggleButton';
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

const Dietary = (props) => {
    const { setState } = props
    const items = ["pescetarian", "lacto vegetarian", "ovo vegetarian", "vegan", "paleo", "primal", "vegetarian"]
    const [value, setValue] = useState(props.dietary);
    const [disable, changeDisable] = useState(false);
    const [text, changeText] = useState('Skip');

    const handleChange = (event, val) => {
        setValue(val);
        setState(state => ({ ...state, dietary: val }))
        changeText(val.length > 0 ? 'Done' : 'Skip')
    };

    const buttonsMarkup = items.map((item) => (
        <ToggleButton selectedColor="white" className="option-btn" key={item} value={item}>{item}</ToggleButton>
    ));


    return (
        <div>
            {!disable &&
                <div className="buttons-div">
                    <ToggleButtonGroup disabled={disable} className="btn-group" type="checkbox" value={value} onChange={handleChange}>
                        {buttonsMarkup}
                    </ToggleButtonGroup>

                    <Button onClick={() => {
                        const allergicOpt = props.allergic.length > 0 ? `You are allergic to ` + props.allergic.join(', ') + ". " : "You have no Allergic! "
                        const dietaryOpt = props.dietary.length > 0 ? `Your dietary preference is ` + props.dietary.join(', ') : "You have no dietary preference!"
                        props.actionProvider.handleSummary(value, allergicOpt + dietaryOpt)
                        changeDisable(true);
                    }} className="option-button">{text}</Button>

                </div>
            }
        </div>
    );
};

export default Dietary;