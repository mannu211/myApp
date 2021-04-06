import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import clsx from "clsx";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import { red } from "@material-ui/core/colors";
import { Assignment, Reddit, ExpandMore } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { Avatar, CardHeader, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  avatar: {
    backgroundColor: red[500],
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function InfoCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root} key={props.dataObj.id} id={props.dataObj.id}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.dataObj.title.substr(0, 1).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        }
        title={props.dataObj.title}
        subheader={`Flight No :${
          props.dataObj.flight_number ? props.dataObj.flight_number : "N/A"
        } \n @${new Date(props.dataObj.event_date_utc).toLocaleString()}`}
      ></CardHeader>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" component="p">
            {props.dataObj.details}
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions style={{ float: "right" }}>
        <IconButton
          onClick={(evt) => window.open(props.dataObj.links.reddit)}
          color="primary"
        >
          <Reddit />
        </IconButton>
        <IconButton
          onClick={(evt) => window.open(props.dataObj.links.article)}
          color="primary"
        >
          <Assignment />
        </IconButton>
        <IconButton
          onClick={(evt) => window.open(props.dataObj.links.wikipedia)}
          color="primary"
          style={{ fontSize: "14px" }}
        >
          Wikipedia
        </IconButton>
      </CardActions>
    </Card>
  );
}
