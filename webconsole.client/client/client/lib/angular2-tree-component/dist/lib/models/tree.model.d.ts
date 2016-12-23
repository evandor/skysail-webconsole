import { TreeNode } from './tree-node.model';
import { TreeOptions } from './tree-options.model';
import { ITreeModel } from '../defs/api';
export declare class TreeModel implements ITreeModel {
    roots: TreeNode[];
    options: TreeOptions;
    nodes: any[];
    expandedNodeIds: {
        [id: string]: boolean;
    };
    expandedNodes: TreeNode[];
    activeNodeIds: {
        [id: string]: boolean;
    };
    activeNodes: TreeNode[];
    _focusedNode: TreeNode;
    focusedNodeId: string;
    _dragNode: {
        node: TreeNode;
        index: number;
    };
    _dropLocation: {
        component: any;
        node: TreeNode;
        index: number;
    };
    static focusedTree: any;
    private events;
    virtualRoot: TreeNode;
    firstUpdate: boolean;
    eventNames: string[];
    setData({nodes, options, events}: {
        nodes: any;
        options: any;
        events: any;
    }): void;
    update(): void;
    _calculateExpandedNodes(startNode?: any): void;
    fireEvent(event: any): void;
    focusedNode: TreeNode;
    getFocusedNode(): TreeNode;
    setFocusedNode(node: any): void;
    getActiveNode(): TreeNode;
    getActiveNodes(): TreeNode[];
    getTreeNode(node: any, parent: TreeNode): TreeNode;
    getVisibleRoots(): TreeNode[];
    getFirstRoot(skipHidden?: boolean): TreeNode;
    getLastRoot(skipHidden?: boolean): TreeNode;
    isFocused: boolean;
    isNodeFocused(node: any): boolean;
    setFocus(value: any): void;
    private _treeNodeContentComponent;
    treeNodeContentComponent: any;
    private _loadingComponent;
    loadingComponent: any;
    _initTreeNodeContentComponent(): void;
    _initLoadingComponent(): void;
    _loadState(): void;
    getNodeByPath(path: any, startNode?: any): TreeNode;
    getNodeById(id: any): any;
    getNodeBy(predicate: any, startNode?: any): any;
    _createAdHocComponent(templateStr: any): any;
    focusNextNode(): void;
    focusPreviousNode(): void;
    focusDrillDown(): void;
    focusDrillUp(): void;
    isActive(node: any): boolean;
    setActiveNode(node: any, value: any, multi?: boolean): void;
    _setActiveNodeSingle(node: any, value: any): void;
    _setActiveNodeMulti(node: any, value: any): void;
    isExpanded(node: any): boolean;
    setExpandedNode(node: any, value: any): void;
    performKeyAction(node: any, $event: any): boolean;
    filterNodes(filter: any, autoShow?: boolean): void;
    clearFilter(): void;
    canMoveNode({from, to}: {
        from: any;
        to: any;
    }): boolean;
    moveNode({from, to}: {
        from: any;
        to: any;
    }): void;
    setDragNode(dragNode: {
        node: TreeNode;
        index: number;
    }): void;
    getDragNode(): {
        node: TreeNode;
        index: number;
    };
    isDragging(): TreeNode;
    setDropLocation(dropLocation: {
        component: any;
        node: TreeNode;
        index: number;
    }): void;
    getDropLocation(): {
        component: any;
        node: TreeNode;
        index: number;
    };
    isDraggingOver(component: any): boolean;
    cancelDrag(): void;
}
