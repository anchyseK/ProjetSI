import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Course from "./course.component";
import Grid from "@material-ui/core/Grid";

import * as APICourse from "../api/course";
// import { Course as ICourse } from "../../types/course";
import { Test as ITest } from "../../types/test";

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
  const [courses, setCourses] = React.useState<ITest[]>([]);

  useEffect(() => {
    APICourse.getTest().then(setCourses);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container justify="center">
          { courses.map((course, i) => 
            <Grid key={i} item className={classes.course}>
              <Course title={course} />
            </Grid >
          )}
        </Grid>
      </Grid>
    </div>
  );
}
