import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, finalize, first, tap } from "rxjs/operators";
import { loadAllCourses } from "./courses-actions";
import { areCoursesLoad } from "./courses-selectors";
import { Course } from "./model/course";
import { CourseState } from "./reducers";

@Injectable()
export class CourseResolver implements Resolve<Course> {

    loading: boolean = false;

    constructor(private store: Store<CourseState>) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            select(areCoursesLoad),
            tap(coursesLoad => {
                if (!this.loading && !coursesLoad) {
                    this.loading = !this.loading;
                    this.store.dispatch(loadAllCourses());
                }
            }),
            filter(coursesLoad => coursesLoad),
            first(),
            finalize(() => this.loading = false)
        );
    }
}