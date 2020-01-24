import React from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

const nodes = [{
  value: 'page1',
  label: 'Page1',
  children: [
    { value: 'page2', label: 'Page2' },
    { value: 'page3', label: 'Page3' },
  ],
}];

class Checkbox extends React.Component {
  state = {
    checked: [],
    expanded: [],
  };

  onCheck = (checked) => {
    this.setState({ checked });
  };

  onExpand = (expanded) => {
    this.setState({ expanded });
  };

  render() {
    const { checked, expanded } = this.state;

    return (
      <CheckboxTree
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={this.onCheck}
        onExpand={this.onExpand}
        icons={{
               check: <span className="rct-icon rct-icon-check" />,
               uncheck: <span className="rct-icon rct-icon-uncheck" />,
               halfCheck: <span className="rct-icon rct-icon-half-check" />,
               expandClose: <span className="rct-icon rct-icon-expand-close" />,
               expandOpen: <span className="rct-icon rct-icon-expand-open" />,
               expandAll: <span className="rct-icon rct-icon-expand-all" />,
               collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
               parentClose: <span className="rct-icon rct-icon-parent-close" />,
               parentOpen: <span className="rct-icon rct-icon-parent-open" />,
               leaf: <span className="rct-icon rct-icon-leaf" />,
           }}
      />
    );
  }
}

export default Checkbox;
