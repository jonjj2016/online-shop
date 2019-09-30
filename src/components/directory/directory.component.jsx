import React, { Component } from 'react';
import './directory.styles.scss';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
// importing selectors
import { selectDirectorySection } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
const Directory = ({ sections }) => {
  //this.state.sections.forEach(item => console.log(item.title));
  return (
    <div className="directory-menu">
      {sections.map(item => (
        <MenuItem
          size={item.size}
          key={item.id}
          title={item.title}
          image={item.imageUrl}
          linkUrl={item.linkUrl}
        />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});
export default connect(mapStateToProps)(Directory);
