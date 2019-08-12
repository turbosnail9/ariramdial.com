import React from 'react';
import CommentContainer from 'theme/containers/CommentContainer';


const URL = 'https://github.com/turbosnail9/ariramdial.com/issues/new';

export default () => (
  <CommentContainer>
    <p>
      Questions, Comments, Suggestions?&nbsp;
      <a rel="noopener noreferrer" target="__blank" href={URL}>
        Open an Issue
      </a>
    </p>
  </CommentContainer>
);
