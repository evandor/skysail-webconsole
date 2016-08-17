/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from './router_state';
import { PRIMARY_OUTLET } from './shared';
import { UrlSegment, mapChildrenIntoArray } from './url_tree';
import { last, merge } from './utils/collection';
import { TreeNode } from './utils/tree';
class NoMatch {
    constructor(segment = null) {
        this.segment = segment;
    }
}
export function recognize(rootComponentType, config, urlTree, url) {
    try {
        const children = processSegment(config, urlTree.root, {}, PRIMARY_OUTLET);
        const root = new ActivatedRouteSnapshot([], {}, PRIMARY_OUTLET, rootComponentType, null, urlTree.root, -1);
        const rootNode = new TreeNode(root, children);
        return of(new RouterStateSnapshot(url, rootNode, urlTree.queryParams, urlTree.fragment));
    }
    catch (e) {
        if (e instanceof NoMatch) {
            return new Observable((obs) => obs.error(new Error(`Cannot match any routes: '${e.segment}'`)));
        }
        else {
            return new Observable((obs) => obs.error(e));
        }
    }
}
function processSegment(config, segment, extraParams, outlet) {
    if (segment.pathsWithParams.length === 0 && segment.hasChildren()) {
        return processSegmentChildren(config, segment, extraParams);
    }
    else {
        return processPathsWithParams(config, segment, 0, segment.pathsWithParams, extraParams, outlet);
    }
}
function processSegmentChildren(config, segment, extraParams) {
    const children = mapChildrenIntoArray(segment, (child, childOutlet) => processSegment(config, child, extraParams, childOutlet));
    checkOutletNameUniqueness(children);
    sortActivatedRouteSnapshots(children);
    return children;
}
function sortActivatedRouteSnapshots(nodes) {
    nodes.sort((a, b) => {
        if (a.value.outlet === PRIMARY_OUTLET)
            return -1;
        if (b.value.outlet === PRIMARY_OUTLET)
            return 1;
        return a.value.outlet.localeCompare(b.value.outlet);
    });
}
function processPathsWithParams(config, segment, pathIndex, paths, extraParams, outlet) {
    for (let r of config) {
        try {
            return processPathsWithParamsAgainstRoute(r, segment, pathIndex, paths, extraParams, outlet);
        }
        catch (e) {
            if (!(e instanceof NoMatch))
                throw e;
        }
    }
    throw new NoMatch(segment);
}
function processPathsWithParamsAgainstRoute(route, rawSegment, pathIndex, paths, parentExtraParams, outlet) {
    if (route.redirectTo)
        throw new NoMatch();
    if ((route.outlet ? route.outlet : PRIMARY_OUTLET) !== outlet)
        throw new NoMatch();
    if (route.path === '**') {
        const params = paths.length > 0 ? last(paths).parameters : {};
        const snapshot = new ActivatedRouteSnapshot(paths, merge(parentExtraParams, params), outlet, route.component, route, getSourceSegment(rawSegment), getPathIndexShift(rawSegment) - 1);
        return [new TreeNode(snapshot, [])];
    }
    const { consumedPaths, parameters, extraParams, lastChild } = match(rawSegment, route, paths, parentExtraParams);
    const rawSlicedPath = paths.slice(lastChild);
    const childConfig = route.children ? route.children : [];
    const { segment, slicedPath } = split(rawSegment, consumedPaths, rawSlicedPath, childConfig);
    const snapshot = new ActivatedRouteSnapshot(consumedPaths, parameters, outlet, route.component, route, getSourceSegment(rawSegment), getPathIndexShift(rawSegment) + pathIndex + lastChild - 1);
    if (slicedPath.length === 0 && segment.hasChildren()) {
        const children = processSegmentChildren(childConfig, segment, extraParams);
        return [new TreeNode(snapshot, children)];
    }
    else if (childConfig.length === 0 && slicedPath.length === 0) {
        return [new TreeNode(snapshot, [])];
    }
    else {
        const children = processPathsWithParams(childConfig, segment, pathIndex + lastChild, slicedPath, extraParams, PRIMARY_OUTLET);
        return [new TreeNode(snapshot, children)];
    }
}
function match(segment, route, paths, parentExtraParams) {
    if (route.path === '') {
        if (route.terminal && (segment.hasChildren() || paths.length > 0)) {
            throw new NoMatch();
        }
        else {
            return { consumedPaths: [], lastChild: 0, parameters: {}, extraParams: {} };
        }
    }
    const path = route.path;
    const parts = path.split('/');
    const posParameters = {};
    const consumedPaths = [];
    let currentIndex = 0;
    for (let i = 0; i < parts.length; ++i) {
        if (currentIndex >= paths.length)
            throw new NoMatch();
        const current = paths[currentIndex];
        const p = parts[i];
        const isPosParam = p.startsWith(':');
        if (!isPosParam && p !== current.path)
            throw new NoMatch();
        if (isPosParam) {
            posParameters[p.substring(1)] = current.path;
        }
        consumedPaths.push(current);
        currentIndex++;
    }
    if (route.terminal && (segment.hasChildren() || currentIndex < paths.length)) {
        throw new NoMatch();
    }
    const parameters = merge(parentExtraParams, merge(posParameters, consumedPaths[consumedPaths.length - 1].parameters));
    const extraParams = route.component ? {} : parameters;
    return { consumedPaths, lastChild: currentIndex, parameters, extraParams };
}
function checkOutletNameUniqueness(nodes) {
    const names = {};
    nodes.forEach(n => {
        let routeWithSameOutletName = names[n.value.outlet];
        if (routeWithSameOutletName) {
            const p = routeWithSameOutletName.url.map(s => s.toString()).join('/');
            const c = n.value.url.map(s => s.toString()).join('/');
            throw new Error(`Two segments cannot have the same outlet name: '${p}' and '${c}'.`);
        }
        names[n.value.outlet] = n.value;
    });
}
function getSourceSegment(segment) {
    let s = segment;
    while (s._sourceSegment) {
        s = s._sourceSegment;
    }
    return s;
}
function getPathIndexShift(segment) {
    let s = segment;
    let res = 0;
    while (s._sourceSegment) {
        s = s._sourceSegment;
        res += segment._pathIndexShift;
    }
    return res;
}
function split(segment, consumedPaths, slicedPath, config) {
    if (slicedPath.length > 0 &&
        containsEmptyPathMatchesWithNamedOutlets(segment, slicedPath, config)) {
        const s = new UrlSegment(consumedPaths, createChildrenForEmptyPaths(segment, consumedPaths, config, new UrlSegment(slicedPath, segment.children)));
        s._sourceSegment = segment;
        s._pathIndexShift = 0;
        return { segment: s, slicedPath: [] };
    }
    else if (slicedPath.length === 0 && containsEmptyPathMatches(segment, slicedPath, config)) {
        const s = new UrlSegment(segment.pathsWithParams, addEmptyPathsToChildrenIfNeeded(segment, slicedPath, config, segment.children));
        s._sourceSegment = segment;
        s._pathIndexShift = 0;
        return { segment: s, slicedPath };
    }
    else {
        return { segment, slicedPath };
    }
}
function addEmptyPathsToChildrenIfNeeded(segment, slicedPath, routes, children) {
    const res = {};
    for (let r of routes) {
        if (emptyPathMatch(segment, slicedPath, r) && !children[getOutlet(r)]) {
            const s = new UrlSegment([], {});
            s._sourceSegment = segment;
            s._pathIndexShift = segment.pathsWithParams.length;
            res[getOutlet(r)] = s;
        }
    }
    return merge(children, res);
}
function createChildrenForEmptyPaths(segment, consumedPaths, routes, primarySegment) {
    const res = {};
    res[PRIMARY_OUTLET] = primarySegment;
    primarySegment._sourceSegment = segment;
    primarySegment._pathIndexShift = consumedPaths.length;
    for (let r of routes) {
        if (r.path === '') {
            const s = new UrlSegment([], {});
            s._sourceSegment = segment;
            s._pathIndexShift = consumedPaths.length;
            res[getOutlet(r)] = s;
        }
    }
    return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segment, slicedPath, routes) {
    return routes
        .filter(r => emptyPathMatch(segment, slicedPath, r) && getOutlet(r) !== PRIMARY_OUTLET)
        .length > 0;
}
function containsEmptyPathMatches(segment, slicedPath, routes) {
    return routes.filter(r => emptyPathMatch(segment, slicedPath, r)).length > 0;
}
function emptyPathMatch(segment, slicedPath, r) {
    if ((segment.hasChildren() || slicedPath.length > 0) && r.terminal)
        return false;
    return r.path === '' && r.redirectTo === undefined;
}
function getOutlet(route) {
    return route.outlet ? route.outlet : PRIMARY_OUTLET;
}
//# sourceMappingURL=recognize.js.map