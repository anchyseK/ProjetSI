import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 450
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);

export default function Course(props: any) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expandedLabel, setExpandedLabel] = React.useState("Voir plus");
  const course = props.course;

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setExpandedLabel(expanded ? "Voir plus": "Voir moins");
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={course.title}
          image={course.image}
          title={course.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {course.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {course.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Tooltip title="S'abonner">
          <IconButton aria-label="S'abonner">
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Partager">
          <IconButton aria-label="Suivre">
            <ShareIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={expandedLabel}>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label={expandedLabel}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardHeader
          avatar={
            <Avatar aria-label="Formateur" className={classes.avatar}>
              R
            </Avatar>
          }
          title="Formateur"
          subheader="Date dernière modification"
        />
      </Collapse>
    </Card>
  );
}
