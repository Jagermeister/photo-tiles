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
                src: '3.jpg'
            },
            {
                src: '4.jpg'
            },
            {
                src: '5.jpg'
            },
            {
                src: '6.jpg'
            },
            {
                src: '7.jpg'
            },
            {
                src: '8.jpg'
            },
            {
                src: '9.jpg'
            },
            {
                src: '10.jpg'
            },
            {
                src: '11.jpg'
            },
            {
                src: '12.jpg'
            },
        ]
    }
}
