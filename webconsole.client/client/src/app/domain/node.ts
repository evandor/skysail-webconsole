export class Node {
    id: string;
    name: string;
    followers: number;
    following: number;

    constructor(id, name, followers, following) {
        this.id = id;
        this.name = name;
        this.followers = followers;
        this.following = following;
    }
}