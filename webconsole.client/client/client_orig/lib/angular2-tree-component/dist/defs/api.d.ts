/**
 * Welcome to ng2tree
 */
import { ElementRef } from '@angular/core';
import { TreeOptions } from '../models/tree-options.model';
/**
 * This is the interface of a single Tree Node
 */
export interface ITreeNode {
    /**
     * Parent node
     */
    parent: ITreeNode;
    /**
     * The value of the node's field that is used for displaying its content.
     * By default 'name', unless stated otherwise in the options
     */
    displayField: string;
    /**
     * The children of the node.
     * By default is determined by 'node.data.children', unless stated otherwise in the options
     */
    children: ITreeNode[];
    /**
     * Pointer to the original data.
     */
    data: any;
    /**
     * Pointer to the ElementRef of the TreeNodeComponent that's displaying this node
     */
    elementRef: ElementRef;
    /**
     * Level in the tree (starts from 1).
     */
    level: number;
    /**
     * Path in the tree: Array of IDs.
     */
    path: string[];
    /**
     * A unique key of this node among its siblings.
     * By default it's the 'id' of the original node, unless stated otherwise in options.idField
     */
    id: any;
    isExpanded: boolean;
    isActive: boolean;
    isFocused: boolean;
    isCollapsed: boolean;
    isLeaf: boolean;
    hasChildren: boolean;
    isRoot: boolean;
    /**
     * @returns next sibling (or null)
     */
    findNextSibling(): ITreeNode;
    /**
     * @returns previous sibling (or null)
     */
    findPreviousSibling(): ITreeNode;
    /**
     * @returns first child (or null)
     */
    getFirstChild(): ITreeNode;
    /**
     * @returns last child (or null)
     */
    getLastChild(): ITreeNode;
    /**
     * Finds the visually next node in the tree.
     * @returns next node.
     * @param goInside whether to look for children or just siblings
     */
    findNextNode(goInside: boolean): ITreeNode;
    /**
     * Finds the visually previous node in the tree.
     * @returns previous node.
     */
    findPreviousNode(): ITreeNode;
    /**
     * Expands / Collapses the node
     */
    toggle(): any;
    /**
     * Activates / Deactivates the node (selects / deselects)
     */
    toggleActivated(): any;
    /**
     * Focus on the node
     */
    focus(): any;
    /**
     * Blur (unfocus) the node
     */
    blur(): any;
    /**
     * Fire an event to the renderer of the tree (if it was registered)
     */
    fireEvent(event: any): any;
}
/**
 * This is the interface of the TreeModel
 */
export interface ITreeModel {
    /**
     * All root nodes
     */
    roots: ITreeNode[];
    /**
     * Current active (selected) node
     */
    activeNode: ITreeNode;
    /**
     * Current focused node
     */
    focusedNode: ITreeNode;
    /**
     * Options that were passed to the tree component
     */
    options: TreeOptions;
    /**
     * Is the tree currently focused
     */
    isFocused: boolean;
    /**
     * @returns      first root of the tree
     */
    getFirstRoot(): ITreeNode;
    /**
     * @returns      last root of the tree
     */
    getLastRoot(): ITreeNode;
    /**
     * Focuses or blurs the tree
     * @param value  true or false - whether to set focus or blur.
     */
    setFocus(value: boolean): any;
    /**
     * Focuses on the next node in the tree (same as down arrow)
     */
    focusNextNode(): any;
    /**
     * Focuses on the previous node in the tree (same as up arrow)
     */
    focusPreviousNode(): any;
    /**
     * Focuses on the inner child of the current focused node (same as right arrow on an expanded node)
     */
    focusDrillDown(): any;
    /**
     * Focuses on the parent of the current focused node (same as left arrow on a collapsed node)
     */
    focusDrillUp(): any;
}
