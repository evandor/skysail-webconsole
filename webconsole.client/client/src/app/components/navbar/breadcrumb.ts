export class Breadcrumb {
    title: string;
    link: string[];
    
    constructor(link: string[], title: string) {
        if (title.length > 10 && !title.startsWith('<i')) {
            this.title = " &gt; " + title.substr(0,10) + "..."; 
        } else {
            this.title = " &gt; " + title;
        }
        this.link = link;
    }
}