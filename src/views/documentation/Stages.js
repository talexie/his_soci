/* eslint-disable react/no-multi-comp */
import React from 'react';

import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { leadershipAndGovernance, managementAndWorkforce, informationAndTechnology, standardsAndInteroperability, dataQualityAndUse } from './StagesData';
// import MuiTreeView from 'material-ui-treeview';

const getTreeItemsFromData = treeItems => {
  return treeItems.map(treeItemData => {
    let children = undefined;
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    return (
      <TreeItem
        children={children}
        key={treeItemData.id}
        label={treeItemData.name}
        nodeId={treeItemData.id}
      />
    );
  });
};
const DataTreeView = ({ treeItems }) => {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {getTreeItemsFromData(treeItems)}
    </TreeView>
  );
};
export function HisOverviewStages() {
  return (
    <div className="App">
      <DataTreeView treeItems={leadershipAndGovernance} />
      <DataTreeView treeItems={managementAndWorkforce}/>
      <DataTreeView treeItems={informationAndTechnology} />
      <DataTreeView treeItems={standardsAndInteroperability}/>
      <DataTreeView treeItems={dataQualityAndUse}/>
    </div>
  );
}