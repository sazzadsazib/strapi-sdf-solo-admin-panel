/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { PropTypes } from 'prop-types';
import LeftMenuLink from '../LeftMenuLink';
import Wrapper from './Wrapper';
import messages from './messages.json';

defineMessages(messages);

function LeftMenuFooter({ version, ...rest }) {
  const staticLinks = [
    {
      icon: 'book',
      label: 'documentation',
      destination: 'http://sdfbd.org',
    },
    {
      icon: 'question-circle',
      label: 'help',
      destination: 'https://github.com/sazzadsazib',
    },
  ];

  return (
    <Wrapper>
      <ul className="list">
        {staticLinks.map(link => (
          <LeftMenuLink
            {...rest}
            {...link}
            label={messages[link.label].id}
            key={link.label}
          />
        ))}
      </ul>
      <div className="poweredBy">
        <FormattedMessage {...messages.poweredBy} key="poweredBy" />
        <a
          key="website"
          href="http://xgensystems.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          X-Gen
        </a>
      </div>
    </Wrapper>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
