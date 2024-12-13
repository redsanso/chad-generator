import { Routes } from "@angular/router";

export const routes: Routes = [
    [
        {
            path: "",
            pathMatch: "full",
            redirectTo: "search",
        },
        {
            path: "search",
            data: {},
            loadComponent: () => import("./search-<%= dasherize(name) %>/search-<%= dasherize(name) %>.component").then(c => c.Search<%= classify(name) %>Component)
        }
    ]
];