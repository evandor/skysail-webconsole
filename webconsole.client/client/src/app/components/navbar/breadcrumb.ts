export class Breadcrumb {
    title: string;
    link: string[];
    
    constructor(link: string[], title: string) {
        this.title = " &gt; " + title;
        this.link = link;
    }
}