//  Package imports  //
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { FormattedMessage } from 'react-intl';

import ImmutablePropTypes from 'react-immutable-proptypes';

import { ReactComponent as AddReactionIcon } from '@material-symbols/svg-600/outlined/add_reaction.svg';
import { ReactComponent as EditIcon } from '@material-symbols/svg-600/outlined/edit.svg';
import { ReactComponent as HomeIcon } from '@material-symbols/svg-600/outlined/home-fill.svg';
import { ReactComponent as InsertChartIcon } from '@material-symbols/svg-600/outlined/insert_chart.svg';
import { ReactComponent as PushPinIcon } from '@material-symbols/svg-600/outlined/push_pin.svg';
import { ReactComponent as RepeatIcon } from '@material-symbols/svg-600/outlined/repeat.svg';
import { ReactComponent as StarIcon } from '@material-symbols/svg-600/outlined/star-fill.svg';

import { Icon } from 'flavours/glitch/components/icon';
import { me } from 'flavours/glitch/initial_state';

import NameList from './name_list';

export default class StatusPrepend extends PureComponent {

  static propTypes = {
    type: PropTypes.string.isRequired,
    status: ImmutablePropTypes.map.isRequired,
    accounts: ImmutablePropTypes.listOf(ImmutablePropTypes.map.isRequired),
    parseClick: PropTypes.func.isRequired,
    notificationId: PropTypes.number,
  };

  handleClick = (acct, e) => {
    const { status, parseClick } = this.props;

    if (!acct) {
      const originalAuthor = status.getIn(['reblog', 'account', 'acct'], status.getIn(['account', 'acct']));
      const originalStatusId = status.getIn(['reblog', 'id'], status.get('id'));
      parseClick(e, `/@${originalAuthor}/${originalStatusId}` + this.getUrlSuffix());
    } else {
      parseClick(e, `/@${acct.get('acct')}`);
    }
  };

  getUrlSuffix = () => {
    const { type } = this.props;
    switch (type) {
    case 'reblog':
      return '/reblogs';
    case 'favourite':
      return '/favourites';
    default:
      return '';
    }
  };

  Message = () => {
    const { type, accounts, status } = this.props;

    const viewMoreHref = status.get('url') + this.getUrlSuffix();

    const linkifiedAccounts = (
      <span>
        <NameList
          accounts={accounts}
          viewMoreHref={viewMoreHref}
          onClick={this.handleClick}
        />
      </span>
    );

    switch (type) {
    case 'featured':
      return (
        <FormattedMessage id='status.pinned' defaultMessage='Pinned post' />
      );
    case 'reblogged_by':
      return (
        <FormattedMessage
          id='status.reblogged_by'
          defaultMessage='{name} boosted'
          values={{ name : linkifiedAccounts }}
        />
      );
    case 'favourite':
      return (
        <FormattedMessage
          id='notification.favourite'
          defaultMessage='{name} favourited your status'
          values={{ name : linkifiedAccounts }}
        />
      );
    case 'reaction':
      return (
        <FormattedMessage
          id='notification.reaction'
          defaultMessage='{name} reacted to your status'
          values={{ name : linkifiedAccounts }}
        />
      );
    case 'reblog':
      return (
        <FormattedMessage
          id='notification.reblog'
          defaultMessage='{name} boosted your status'
          values={{ name : linkifiedAccounts }}
        />
      );
    case 'status':
      return (
        <FormattedMessage
          id='notification.status'
          defaultMessage='{name} just posted'
          values={{ name: linkifiedAccounts }}
        />
      );
    case 'poll':
      if (me === accounts.get(0).get('id')) {
        return (
          <FormattedMessage
            id='notification.own_poll'
            defaultMessage='Your poll has ended'
          />
        );
      } else {
        return (
          <FormattedMessage
            id='notification.poll'
            defaultMessage='A poll you have voted in has ended'
          />
        );
      }
    case 'update':
      return (
        <FormattedMessage
          id='notification.update'
          defaultMessage='{name} edited a post'
          values={{ name: linkifiedAccounts }}
        />
      );
    }
    return null;
  };

  render () {
    const { Message } = this;
    const { type } = this.props;

    let iconId, iconComponent;

    switch(type) {
    case 'favourite':
      iconId = 'star';
      iconComponent = StarIcon;
      break;
    case 'reaction':
      iconId = 'add_reaction';
      iconComponent = AddReactionIcon;
      break;
    case 'featured':
      iconId = 'thumb-tack';
      iconComponent = PushPinIcon;
      break;
    case 'poll':
      iconId = 'tasks';
      iconComponent = InsertChartIcon;
      break;
    case 'reblog':
    case 'reblogged_by':
      iconId = 'retweet';
      iconComponent = RepeatIcon;
      break;
    case 'status':
      iconId = 'bell';
      iconComponent = HomeIcon;
      break;
    case 'update':
      iconId = 'pencil';
      iconComponent = EditIcon;
      break;
    }

    return !type ? null : (
      <aside className={type === 'reblogged_by' || type === 'featured' ? 'status__prepend' : 'notification__message'}>
        <div className={type === 'reblogged_by' || type === 'featured' ? 'status__prepend-icon-wrapper' : 'notification__favourite-icon-wrapper'}>
          <Icon
            className={`status__prepend-icon ${type === 'favourite' ? 'star-icon' : ''}`}
            id={iconId}
            icon={iconComponent}
          />
        </div>
        <Message />
      </aside>
    );
  }

}
