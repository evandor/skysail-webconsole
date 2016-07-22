import {TreeNode} from '../domain/treenode';

export class TreeModel {

    root: TreeNode = new TreeNode(null,null);

    getParent(path: string):TreeNode {
        var parentId = path.split(".").slice(0, -1).join('.');
        return this.checkNodes(this.root.children, parentId);
    }

    private checkNodes(subroots: TreeNode[], id: string): TreeNode {
        for(var i = 0; i < subroots.length; i++) {
            if (subroots[i].id == id) {
                return subroots[i];
            }
        }
        for(var i = 0; i < subroots.length; i++) {
            var found = this.checkNodes(subroots[i].children, id); 
            if (found != null) {
                return found;
            }
        }
        return null;
    }
}