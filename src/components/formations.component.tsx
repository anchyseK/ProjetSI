import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Course from "./course.component";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import * as APICourse from "../api/course";
import { Course as ICourse } from "../../types/course";
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
    /* APICourse.GetCourses()
      .then(res => {
        // const courses = res;
        
        setCourses(courses);
    }) */
    APICourse.getTest()
      .then(res => {
        const courses = res;
        setCourses(courses);
      })
  });

  return (
    <div className={classes.root}>
    </div>
  );
}
