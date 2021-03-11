import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { cricketScore } from "../Api.js";

const useStyles = makeStyles({
  root: {
    maxWidth: "75%",
    margin: "20px auto",
  },
});

const MyCard = ({ match }) => {
  const classes = useStyles();
  let date = new Date(match.dateTimeGMT).toLocaleString();

  const showDetail = (id) => {
    cricketScore(id)
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justify="center" alignItems="center">
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
            onClick={() => showDetail(match.unique_id)}
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
};

export default MyCard;
