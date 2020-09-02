import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-hello-component',
    // template: `
    //   <h1 style="color:red">Hi</h1>`
    templateUrl: './hello.component.html'

})
export class HelloComponent implements OnInit {
    color = 'green'
    object = {
        name: 'jerry',
        email: 'jerry@springer.com'
    }
    ngOnInit(): void {

    }
    changeColor() {
        if (this.color === 'green') {
            this.color = 'blue'
        }
        else {
            this.color = 'green'
        }
    }
}