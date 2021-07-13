import React from 'react';

// eslint-disable-next-line global-require
import whyDidYouRender from '@welldone-software/why-did-you-render';

whyDidYouRender(React, {
  onlyLogs: true,
  titleColor: 'green',
  trackAllPureComponents: true
});
