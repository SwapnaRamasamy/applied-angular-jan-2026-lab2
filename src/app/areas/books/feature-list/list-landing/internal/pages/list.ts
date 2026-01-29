import { Component, ChangeDetectionStrategy } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <table class="table mb-8">
      <!-- head -->
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        @for (book of booksResource.value().; track task.startTime) {
          <tr>
            <th>...</th>
            <td>{{ task.startTime | date: 'shortTime' }}</td>
            <td>{{ task.endTime | date: 'shortTime' }}</td>
            <td>{{ task.minutes }}</td>
          </tr>
        } @empty {
          <div class="alert alert-info">
            <p>No Tasks Yet! Get Busy</p>
          </div>
        }
      </tbody>
    </table>
  `,
  styles: ``,
})
export class List {
  booksResource = httpResource(() => '/api/books');
}
