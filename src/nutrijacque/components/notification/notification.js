import React from 'react';
import {
    Snackbar,
    IconButton,
} from '@material-ui/core/';
import {
    Alert,
} from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';

import { useAlert } from '../../contexts/alertN';


export default function Notification({tipo}) {
    const { abrir, setAbrir, msg, type } = useAlert();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAbrir(false);
    };

    return (
        <div>
            <Snackbar
            open={abrir} 
            autoHideDuration={6000} 
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
            action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
            >
                <Alert variant={type}>
                    <WarningIcon /> {msg}
                </Alert>
            </Snackbar>
        </div>
    );
}
