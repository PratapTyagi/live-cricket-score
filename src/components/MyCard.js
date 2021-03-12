import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { showDetails } from "../Api";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Fragment } from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: "75%",
    margin: "20px auto",
  },
});

const MyCard = ({ match }) => {
  const classes = useStyles();
  const date = new Date(match.dateTimeGMT).toLocaleString();

  const cardComponent = () => (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item>
            <Typography item>{match["team-1"]}</Typography>
          </Grid>
          <Grid item>
            <Typography item>
              <img
                style={{ width: 85, height: 100 }}
                src={`https://cdn.onlinewebfonts.com/svg/img_418591.png`}
                alt="v/s"
              />
            </Typography>
          </Grid>
          <Grid item>
            <Typography item>{match["team-2"]}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justify="center">
          <Button
            onClick={() => {
              details(match.unique_id);
            }}
            size="small"
            variant="contained"
            color="primary"
            item
          >
            Show Details
          </Button>
          <Button
            size="small"
            variant="contained"
            color="primary"
            style={{ marginLeft: 10 }}
            item
          >
            Starting At: {date}
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );

  const [open, setOpen] = React.useState(false);
  const [detail, setDetail] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const details = (id) => {
    showDetails(id)
      .then((data) => {
        setDetail(data.data);
        handleClickOpen();
      })
      .catch((err) => console.log(err));
  };

  const dialogComponent = () => (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{"Match details"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography>{detail.stat}</Typography>
          <Typography>
            Match{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {detail.matchStarted === true
                ? " has started."
                : " has not started yet."}
            </span>
          </Typography>
          <Typography>
            Score{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {detail.score}
            </span>
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          CLOSE
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Fragment>
      {cardComponent()} {dialogComponent()}
    </Fragment>
  );
};

export default MyCard;
