import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { <%= classify(name) %> } from '../<%= dasherize(name) %>';
import { <%= classify(name) %>ApiService } from '../<%= dasherize(name) %>.service';

@Component({
    selector: "search-<%= dasherize(name) %>",
    standalone: true,
    imports: [CommonModule],
	templateUrl: "./search-<%= dasherize(name) %>.component.html",
	styleUrl: "./search-<%= dasherize(name) %>.component.scss",
})
export class Search<%= classify(name) %>Component implements OnInit {

    dataList$?: Observable<<%= classify(name) %>[]>;

    constructor(
        private readonly service: <%= classify(name)%>ApiService
    ){}

    ngOnInit() {
        this.dataList$ = this.service.findAll();
    }
}