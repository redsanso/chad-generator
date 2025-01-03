import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { <%= classify(name) %> } from '../<%= dasherize(name) %>';
import { <%= classify(name) %>ApiService } from '../<%= dasherize(name) %>.service';

@Component({
    selector: "view-<%= dasherize(name) %>",
    standalone: true,
    imports: [CommonModule],
	templateUrl: "./view-<%= dasherize(name) %>.component.html",
	styleUrl: "./view-<%= dasherize(name) %>.component.css",
})
export class View<%= classify(name) %>Component implements OnInit {

    data$?: Observable<<%= classify(name) %>>;

    constructor(
        private readonly service: <%= classify(name)%>ApiService
    ){}

    ngOnInit() {
        this.data$ = this.service.findOne();
    }
}