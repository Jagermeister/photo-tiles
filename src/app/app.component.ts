import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    photos: Photo[];    

    ngOnInit() {
        this.photos = [
            {
                src: '1.jpg'
            },
            {
                src: '2.jpg'
            },
            {
                src: '3.jpg',
                rows: 2
            },
            {
                src: '4.jpg'
            },
            {
                src: '5.jpg'
            },
            {
                src: '12.jpg',
                rows: 2,
                cols: 2
            },
            {
                src: '8.jpg'
            },
            {
                src: '9.jpg'
            },
        ]
    }
}
