import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "search-<%= dasherize(name) %>",
    standalone: true,
    imports: [CommonModule],
	templateUrl: "./search-<%= dasherize(name) %>.component.html",
	styleUrl: "./search-<%= dasherize(name) %>.component.css",
})
export class Search<%= classify(name) %>Component implements OnInit {
    ngOnInit() {

    }
}