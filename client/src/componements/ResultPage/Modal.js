import React, { useState, useContext } from "react";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stored } from "../../App";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    height: "50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll'
};

const PictureModal = (props) => {
    const [result, setData] = useState({})
    const [stored, setStored] = useContext(Stored);
    React.useEffect(() => {
        fetch("/summary/" + props.id)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            });
    }, []);

    const handleAdd = () => {
        setStored(stored.concat([{id: props.id, title: props.title, img: props.imageSrc}]));
    }

    const handleRemove = () => {
        setStored(stored.filter(item => item.id !== props.id))
    }



    return (
        <Modal
            open={props.open}
            onClose={props.closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {result.summary ?
                <Box sx={style}>
                    <img src={props.imageSrc} alt="Italian Trulli" className="popupImg" />
                    <Typography dangerouslySetInnerHTML={{ __html: result.summary }} id="modal-modal-description" sx={{ mt: 2 }}>
                    </Typography>

                    {!stored.some(e => e.id === props.id) ? <button onClick={handleAdd} className="option-button">
                        Add to your list!
                    </button> : <button onClick={handleRemove} className="option-button">
                        Remove from your list!
                    </button>}

                </Box>
                :
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Loading...
                    </Typography>
                </Box>}
        </Modal>
    )

}

export default PictureModal