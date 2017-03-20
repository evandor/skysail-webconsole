"use strict";
var _ = require('lodash');
var TreeOptions = (function () {
    function TreeOptions(options) {
        if (options === void 0) { options = {}; }
        this.childrenField = 'children';
        this.displayField = 'name';
        this.idField = 'id';
        this.isExpandedField = 'isExpanded';
        this.treeNodeTemplate = '{{ node.displayField }}';
        this.loadingComponent = 'loading...';
        this.getChildren = null;
        this.hasCustomContextMenu = false;
        this.context = null;
        _.extend(this, options);
    }
    return TreeOptions;
}());
exports.TreeOptions = TreeOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1vcHRpb25zLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL21vZGVscy90cmVlLW9wdGlvbnMubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQVksQ0FBQyxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBYzVCO0lBV0UscUJBQVksT0FBWTtRQUFaLHVCQUFZLEdBQVosWUFBWTtRQVZ4QixrQkFBYSxHQUFVLFVBQVUsQ0FBQztRQUNsQyxpQkFBWSxHQUFVLE1BQU0sQ0FBQztRQUM3QixZQUFPLEdBQVUsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQVUsWUFBWSxDQUFDO1FBQ3RDLHFCQUFnQixHQUFRLHlCQUF5QixDQUFDO1FBQ2xELHFCQUFnQixHQUFRLFlBQVksQ0FBQztRQUNyQyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQix5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsWUFBTyxHQUFHLElBQUksQ0FBQztRQUdiLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksbUJBQVcsY0FjdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi90cmVlLW5vZGUubW9kZWwnO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVPcHRpb25zIHtcbiAgY2hpbGRyZW5GaWVsZDogc3RyaW5nO1xuICBkaXNwbGF5RmllbGQ6IHN0cmluZztcbiAgaWRGaWVsZDogc3RyaW5nO1xuICBpc0V4cGFuZGVkRmllbGQ6c3RyaW5nO1xuICB0cmVlTm9kZVRlbXBsYXRlOiBhbnk7XG4gIGxvYWRpbmdDb21wb25lbnQ6IGFueTtcbiAgZ2V0Q2hpbGRyZW4obm9kZTpUcmVlTm9kZSk6IGFueTtcbiAgaGFzQ3VzdG9tQ29udGV4dE1lbnU6IGJvb2xlYW47XG4gIGNvbnRleHQ6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVPcHRpb25zIHtcbiAgY2hpbGRyZW5GaWVsZDpzdHJpbmcgPSAnY2hpbGRyZW4nO1xuICBkaXNwbGF5RmllbGQ6c3RyaW5nID0gJ25hbWUnO1xuICBpZEZpZWxkOnN0cmluZyA9ICdpZCc7XG4gIGlzRXhwYW5kZWRGaWVsZDpzdHJpbmcgPSAnaXNFeHBhbmRlZCc7XG4gIHRyZWVOb2RlVGVtcGxhdGU6IGFueSA9ICd7eyBub2RlLmRpc3BsYXlGaWVsZCB9fSc7XG4gIGxvYWRpbmdDb21wb25lbnQ6IGFueSA9ICdsb2FkaW5nLi4uJztcbiAgZ2V0Q2hpbGRyZW4gPSBudWxsO1xuICBoYXNDdXN0b21Db250ZXh0TWVudSA9IGZhbHNlO1xuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBfLmV4dGVuZCh0aGlzLCBvcHRpb25zKTtcbiAgfVxufVxuIl19