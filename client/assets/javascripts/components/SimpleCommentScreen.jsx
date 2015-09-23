import React from 'react';
import SimpleCommentBox from './SimpleCommentBox';

const SimpleCommentScreen = React.createClass({
  displayName: 'SimpleCommentScreen',

  render() {
    return (
      <div>
        <SimpleCommentBox />
      </div>
    );
  }

});

export default SimpleCommentScreen;