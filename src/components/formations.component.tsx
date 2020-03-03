import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Course from "./course.component";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import * as APICourse from "../api/course";
import { Course as ICourse } from "../../types/course";
import { Test as ITest } from "../../types/test";
import axios from 'axios';

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

  /*useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        'http://obiwan2.univ-brest.fr:7937/consultation_formation',
      );
      setCourses(res.data);
      console.log(res.data);
    };
    fetchData();
  }, []);*/

  useEffect(() => {
    APICourse.getTest().then( res => {
      setCourses(res);
    });
    console.log(courses);
  }, [courses]);

  return (
    <div className={classes.root}>
      yggygygygyg
    </div>
  );
}
