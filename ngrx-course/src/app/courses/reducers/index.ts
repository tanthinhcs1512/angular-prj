import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { CourseActions } from '../action-types';
import { compareCourses, Course } from '../model/course';

export interface CourseState extends EntityState<Course> {
  allCoursesLoad: boolean;
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses
});

export const initialCourseState = adapter.getInitialState({allCoursesLoad:false});

export const coursesReducer = createReducer(
  initialCourseState,
  on(CourseActions.allCoursesLoaded, (state, action) => adapter.addAll(action.courses, {...state, allCoursesLoad:true})),
  on(CourseActions.courseUpdated, (state, action) => adapter.updateOne(action.update, state))
);

export const { selectAll } = adapter.getSelectors();

export const metaReducers: MetaReducer<CourseState>[] = [];
