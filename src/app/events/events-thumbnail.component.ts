import { Component, Input } from '@angular/core'

@Component({
	selector: 'event-thumbnail',
	template: `
	<div class="well hoverwell thumbnail">
		<h2>{{event?.name}}</h2>
		<div>Date: {{event?.date}}</div>
		<div [ngClass] ="getStartTimeClass()" [ngSwitch]="event?.time">Time: {{event?.time}}
			<span *ngSwitchCase="'8:00 am'">(Early Start)</span>
			<span *ngSwitchCase="'10:00 am'">(Late Start)</span>
			<span *ngSwitchDefault>(Normal Start)</span>
		</div>
		<div>Price: \${{event?.price}}</div>
		<div *ngIf="event?.location">
			<span>Location: {{event?.location?.address}}</span>
			<span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
		</div>
		<div *ngIf="event?.onlineUrl">Online URL: {{event?.onlineUrl}}</div>
	</div>
	`,
	styles: [`
		.blue {color: #0000ff;}
		.red {color: #ff0000;}
		.bold {font-weight: bold;}
		.green {color: #003300 !important;}
		.thumbnail {min-height: 210px;}
		`]
})
export class EventsThumbnailComponent {
	@Input() event: any
	getStartTimeClass(){
	if (this.event && this.event.time === '8:00 am')
		return 'green bold'
	else if (this.event && this.event.time === '10:00 am')
		return 'red'
	return 'blue'
	}

}