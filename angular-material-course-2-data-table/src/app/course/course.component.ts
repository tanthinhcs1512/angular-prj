import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {debounceTime, distinctUntilChanged, startWith, tap, timeout} from 'rxjs/operators';
import {merge, fromEvent} from "rxjs";
import { MatTableDataSource } from '@angular/material/table';
import { LessonDataSource } from '../services/lessons.dataSource';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {

    course:Course;

    filter: string = '';

    dataSource: LessonDataSource;

    displayedColumns = ["seqNo", "description", "duration"];

    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    constructor(private route: ActivatedRoute,
                private coursesService: CoursesService) {

    }

    ngOnInit() {

        this.course = this.route.snapshot.data["course"];

        this.dataSource = new LessonDataSource(this.coursesService);
        this.dataSource.loadLessons(this.course.id, '', 'asc', 0, 3);

    }

    searchLessons(search: any = '') {
        this.filter = search.toLowerCase().trim();
        this.dataSource.loadLessons(this.course.id, search.toLowerCase().trim(), 'asc', 0, 3);
    }

    ngAfterViewInit() {
        this.paginator.page.pipe(
            tap(() => this.dataSource.loadLessons(this.course.id, this.filter, 'asc', this.paginator.pageIndex, this.paginator.pageSize)));
    }


}
