import React from 'react';
import './collections-overview.styles.scss';
import PreviewCollection from '../preview-collection/preview-collection.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionsOverView = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherDistructionProps }) => (
      <PreviewCollection key={id} {...otherDistructionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionsOverView);
