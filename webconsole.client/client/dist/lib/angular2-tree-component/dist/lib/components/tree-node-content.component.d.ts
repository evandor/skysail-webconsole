import { TemplateRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
export interface ITreeNodeTemplate {
    node: TreeNode;
    context: any;
}
export declare class TreeNodeContent {
    node: TreeNode;
    treeNodeContentTemplate: TemplateRef<ITreeNodeTemplate>;
}
