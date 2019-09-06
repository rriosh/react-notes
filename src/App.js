//React Components
import React, { Component, Fragment } from "react";
//Notes Components
import NotesForm from "./NotesForm";
//Material-UI
import Typografy from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      descriprion: "",
      notes: []
    }
  }
  render() {
    return (
      <Fragment>
        <Typografy align="center" variant="h2" gutterBottom>
          My Notes
        </Typografy>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={4}>
            {/* Note List */}
          </Grid>
          <Grid item xs={8}>
            <NotesForm />
          </Grid>
        </Grid>
        <Fab color="primary" className="addIcon">
          <AddIcon/>
        </Fab>
      </Fragment>
    )
  }
}

export default App;
