import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CourseState } from "./reducers";
import * as fromCourses from './reducers';

export const selectCoursesState = createFeatureSelector<CourseState>("courses");

export const selectAllCourses = createSelector(
    selectCoursesState,
    fromCourses.selectAll
);

export const selectBeginnerCourse = createSelector(
     selectAllCourses,
     courses => courses.filter(course => course.category == 'BEGINNER')
);

export const selectAdvanceCourse = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.category == 'ADVANCED')
);

export const selectPromoTotal = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.promo).length
);

export const areCoursesLoad = createSelector(
    selectCoursesState,
    state => state.allCoursesLoad
    
)