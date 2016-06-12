import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { StoryFlairAppComponent } from '../app/story-flair.component';

beforeEachProviders(() => [StoryFlairAppComponent]);

describe('App: StoryFlair', () => {
  it('should create the app',
      inject([StoryFlairAppComponent], (app: StoryFlairAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'story-flair works!\'',
      inject([StoryFlairAppComponent], (app: StoryFlairAppComponent) => {
    expect(app.title).toEqual('story-flair works!');
  }));
});
