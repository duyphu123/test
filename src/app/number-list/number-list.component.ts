import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.scss']
})
export class NumberListComponent implements OnInit {
  numbers: number[] = [];

  constructor() {}

  ngOnInit(): void {
    // Tạo một Observable từ mảng số nguyên từ 1 đến 10
    of(...Array(10).keys()).pipe(
      map((num) => num + 1), // Bình phương mỗi số
      filter((num) => num % 2 === 1) // Loại bỏ các số lẻ
    ).subscribe(
      (number: number) => {
        this.numbers.push(number);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
