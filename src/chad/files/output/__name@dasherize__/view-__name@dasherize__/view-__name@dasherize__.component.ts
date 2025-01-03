import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { Observable } from "rxjs";
import { <%= classify(name) %> } from '../<%= dasherize(name) %>';
import { <%= classify(name) %>ApiService } from '../<%= dasherize(name) %>.service';

@Component({
    selector: "view-<%= dasherize(name) %>",
    standalone: true,
    imports: [CommonModule, RouterModule],
	templateUrl: "./view-<%= dasherize(name) %>.component.html",
	styleUrl: "./view-<%= dasherize(name) %>.component.scss",
})
export class View<%= classify(name) %>Component implements OnInit {

    id?: number;
    data$?: Observable<<%= classify(name) %>>;

    constructor(
        private readonly service: <%= classify(name)%>ApiService,
		private readonly route: ActivatedRoute,
    ){}

    ngOnInit() {
        this.id = this.route.snapshot.params["id"] || "";

        if(this.id) 
            this.data$ = this.service.findOne(this.id);
    }
}