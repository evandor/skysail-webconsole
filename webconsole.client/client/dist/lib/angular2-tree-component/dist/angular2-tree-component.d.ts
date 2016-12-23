import { TREE_ACTIONS, IActionMapping, IActionHandler } from './models/tree-options.model';
import { ITreeOptions } from './defs/api';
import { KEYS } from './constants/keys';
import { TreeModel } from './models/tree.model';
import { TreeNode } from './models/tree-node.model';
import { LoadingComponent } from './components/loading.component';
import { TreeComponent } from './components/tree.component';
import { TreeNodeComponent } from './components/tree-node.component';
import { TreeNodeContent } from './components/tree-node-content.component';
import { TreeNodeDropSlot } from './components/tree-node-drop-slot.component';
import './polyfills';
export { TreeModel, TreeNode, ITreeOptions, TREE_ACTIONS, KEYS, IActionMapping, IActionHandler, LoadingComponent, TreeComponent, TreeNodeComponent, TreeNodeContent, TreeNodeDropSlot };
export declare class DeprecatedTreeModule {
    constructor();
}
export declare class TreeModule {
}
export default TreeModule;
