import React, { Fragment } from 'react';
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import { TextField, Icon } from '@material-ui/core';

const NotesForm = ({ handleClick, title, description }) => {
    return (
        <Fragment>
            <Grid item xs={12}>
                <TextField
                    type="text"
                    label="Title"
                    margin="normal"
                    fullWidth
                    onChange={handleClick("title")}
                    value={title}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    multiline
                    rows="4"
                    placeholder="Start taking notes..."
                    margin="normal"
                    fullWidth
                    onChange={handleClick("description")}
                    value={description}
                />
            </Grid>
            <Fab color="secondary" className="editIcon">
                <Icon>edit_icon</Icon>
            </Fab>
        </Fragment>
    );
}

export default NotesForm;