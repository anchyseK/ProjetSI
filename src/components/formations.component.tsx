import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Course from "./course.component";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import * as APICourse from "../api/course";
import { Course as ICourse } from "../../types/course";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(8)
    },
    title: {
        marginLeft: theme.spacing(6)
    },
    course: {
      padding: theme.spacing(4)
    }
  })
);

export default function FullWidthGrid() {
  const classes = useStyles();
  const [courses, setCourses] = React.useState<ICourse[]>([]);

  useEffect(() => {
    APICourse.GetCourses()
      .then(res => {
        const courses = res;
        setCourses(courses);
    })
  });

  return (
    <div className={classes.root}>
        <Typography variant="h4" className={classes.title} align="center">
            Nos formations :
        </Typography>
        <Grid container>
            <Grid container justify="center">
                { courses.map(course => 
                  <Grid item className={classes.course}>
                     <Course course={course} />
                  </Grid >
                )}
            </Grid>
        </Grid>
    </div>
  );
}
