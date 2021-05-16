import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { Lesson } from "../model/lesson";
import { CoursesService } from "./courses.service";

export class LessonDataSource implements DataSource<Lesson> {

    private lessonsSubject = new Subject<Lesson[]>();
    private loadingSubject = new BehaviorSubject<boolean>(false);
    loading$ =  this.loadingSubject.asObservable();

    constructor(private courseService: CoursesService) {

    }

    loadLessons(courseId: number, filter: string, sortDirection: string, pageIndex: number, pageSize: number) {
        this.loadingSubject.next(true);
        this.courseService.findLessons(courseId, filter, sortDirection, pageIndex, pageSize)
            .pipe(
                catchError(() => of([])), 
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(res => this.lessonsSubject.next(res));
    }


    connect(collectionViewer:CollectionViewer): Observable<Lesson[]> {
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer:CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }
}