import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

const Note = (props) => {
    let notas = props.notes;
    let nota = props.match.params.id; 
    
    let note = notas.filter(({id}) => id === parseInt(nota))[0];
            return(
                <Fragment>
                    <Typography align="center" variant="h4" gutterBottom>
                        {note.title}
                    </Typography>
                    <Typography align="justify" variant="subtitle1">
                        {note.description}
                    </Typography>
                </Fragment>
            )
}

export default Note;