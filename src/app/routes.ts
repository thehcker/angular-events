import { Routes } from '@angular/router'
import {
	EventsListComponent,
	EventDetailsComponent,
	CreateEventsComponent,
	EventRouteActivator,
	EventListResolver,
	CreateSessionComponent
}
from './events/index'
import { Error404Component } from './errors/404.component'
export const appRoutes = [
	{ path: 'events/new', component: CreateEventsComponent, canDeactivate: ['canDeactivateCreateEvent'] },
	{ path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
	{ path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
	{ path: 'events/session/new', component: CreateSessionComponent },
	{path: '404', component: Error404Component},
	{path: 'user', loadChildren: './user/user.module#UserModule'},
	{ path: '', redirectTo: '/events', pathMatch: 'full' }

]