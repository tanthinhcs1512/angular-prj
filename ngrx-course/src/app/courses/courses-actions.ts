import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

export const loadAllCourses = createAction(
    "[Course Resolver] Load all courses"
);

export const allCoursesLoaded = createAction(
    "[Load Course Effect] All courses loaded",
    props<{courses: Course[]}>()
);

export const courseUpdated = createAction(
    "[Edit Course Dialog] Course Updated",
    props<{update: Update<Course>}>()
);