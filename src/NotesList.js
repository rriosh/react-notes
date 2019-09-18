import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentIcon from '@material-ui/icons/Comment';

import moment from 'moment';

const NotesList = ({ notes, deleteNote }) => {
        return notes.length ? (
            <Fragment>
                <List>
                    {notes.map(note => (
                        <ListItem key={note.id} button >
                            <ListItemText primary={note.title} secondary={moment(note.id).format("MMMM Do YYYY, h:mm:ss a")} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="comments" component={Link} to={`/view/${note.id}`}>
                                    <CommentIcon />
                                </IconButton>
                                <IconButton onClick={()=>deleteNote(note.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Fragment>
        ) : (
            <Typography align="center" variant="h4">
                No notes yet...
            </Typography>
        );
}

export default NotesList;