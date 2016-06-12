import { Component } from '@angular/core';

import { User } from './shared/user';
import { Story } from './shared/story';

@Component({
  moduleId: module.id,
  selector: 'story-flair-app',
  templateUrl: 'story-flair.component.html',
  styleUrls: ['story-flair.component.css']
})
export class StoryFlairAppComponent {
  title: string = 'story-flair works! kinda';
}
