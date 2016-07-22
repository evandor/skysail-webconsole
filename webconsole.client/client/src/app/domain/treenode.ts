import {TreeModel} from '../domain/treemodel';

export class TreeNode {

    constructor(
        public id: string,       // a path like 'ch.qos.logback.classic'
        public name: string      // typically the last part of the path
    ) { 
    }

    isExpanded: boolean = false;

    children: TreeNode[] = [];

    addChild(child: TreeNode) {
        if (this.children == null) {
            this.children = [];
        }
        this.children.push(child);
    }

    toString = function() {
        var result =  "{id: '"+this.id+"', name: '"+this.name+"', ";
        if (this.isExpanded) {
            result += "isExpanded: "+this.isExpanded+", ";
        }
        result += "children: [";
        this.children.forEach(child => {
            result += child.toString();
        });
        result += "]}\n";
        return result;
    }

}