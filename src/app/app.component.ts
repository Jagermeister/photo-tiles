import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    photos: Object[];    

    ngOnInit() {
        this.photos = [
            {
                href: '1.jpg'
            },
            {
                href: '2.jpg'
            },
            {
                href: '3.jpg'
            },
            {
                href: '4.jpg'
            },
            {
                href: '5.jpg'
            },
            {
                href: '6.jpg'
            },
            {
                href: '7.jpg'
            },
            {
                href: '8.jpg'
            },
            {
                href: '9.jpg'
            },
            {
                href: '10.jpg'
            },
            {
                href: '11.jpg'
            },
            {
                href: '12.jpg'
            },
        ]
    }
}
