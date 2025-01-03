import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { <%= classify(name) %> } from './<%= dasherize(name) %>';

@Component({
    selector: "search-<%= dasherize(name) %>",
    standalone: true,
    imports: [CommonModule],
	templateUrl: "./search-<%= dasherize(name) %>.component.html",
	styleUrl: "./search-<%= dasherize(name) %>.component.css",
})
export class Search<%= classify(name) %>Component implements OnInit {

    dataList$?: Observable<<%= classify(name) %>[]>;

    ngOnInit(
        private readonly service: <%= classify(name)%>ApiService
    ) {
        this.dataList$ = this.service.findAll();
    }
}