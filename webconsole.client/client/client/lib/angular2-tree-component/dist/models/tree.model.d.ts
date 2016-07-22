import { TreeNode } from './tree-node.model';
import { TreeOptions } from './tree-options.model';
import { ITreeModel } from '../defs/api';
export declare class TreeModel implements ITreeModel {
    roots: TreeNode[];
    options: TreeOptions;
    activeNode: TreeNode;
    focusedNode: TreeNode;
    static focusedTree: any;
    private events;
    eventNames: string[];
    setData({nodes, options, events}: {
        nodes: any;
        options: any;
        events: any;
    }): void;
    fireEvent(event: any): void;
    getFirstRoot(): TreeNode;
    getLastRoot(): TreeNode;
    isFocused: boolean;
    setFocus(value: any): void;
    private _treeNodeContentComponent;
    treeNodeContentComponent: any;
    private _loadingComponent;
    loadingComponent: any;
    _initTreeNodeContentComponent(): void;
    _initLoadingComponent(): void;
    _createAdHocComponent(templateStr: any): any;
    focusNextNode(): void;
    focusPreviousNode(): void;
    focusDrillDown(): void;
    focusDrillUp(): void;
}
