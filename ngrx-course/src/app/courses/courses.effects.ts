import { ThrowStmt } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { dispatch } from "rxjs/internal/observable/pairs";
import { tap, concatMap, map } from "rxjs/operators";
import { CourseActions } from "./action-types";
import { allCoursesLoaded } from "./courses-actions";
import { CoursesHttpService } from "./services/courses-http.service";

@Injectable()  
export class CoursesEffects {

    loadCourses$ = createEffect(() => 
        this.action$
            .pipe(
                ofType(CourseActions.loadAllCourses),
                //concatMap ensure that we only send one request at the time to backend
                concatMap(action => this.courseHttpService.findAllCourses()),
                map(courses => allCoursesLoaded({courses}))
            )
    );

    saveCourse$ = createEffect(() => this.action$
        .pipe(
            ofType(CourseActions.courseUpdated),
            concatMap(action => this.courseHttpService.saveCourse(action.update.id, action.update.changes))
        ),
        {dispatch: false}
    );

    constructor(private action$: Actions, private courseHttpService: CoursesHttpService) {

    }



} 