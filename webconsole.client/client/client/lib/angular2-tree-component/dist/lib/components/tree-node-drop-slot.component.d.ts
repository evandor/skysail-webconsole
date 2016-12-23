import { TreeNode } from '../models/tree-node.model';
export declare class TreeNodeDropSlot {
    node: TreeNode;
    dropIndex: number;
    onDragOver($event: any): void;
    onDragLeave(): void;
    onDrop($event: any): void;
}
