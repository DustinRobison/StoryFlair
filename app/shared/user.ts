import { Story } from './story';

export interface User {
    id: number;
    username: string;
    storyteller_stories: Story[];
    character_stories: Story[];
}
