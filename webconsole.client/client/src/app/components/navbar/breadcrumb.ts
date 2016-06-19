export class Breadcrumb {
    title: string;
    link: string[];
    
    constructor(link: string[], title: string) {
        this.title = title;
        this.link = link;
    }
}