import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { domain, version, source_url, profile_directory as profileDirectory } from 'mastodon/initial_state';
import { logOut } from 'mastodon/utils/log_out';
import { openModal } from 'mastodon/actions/modal';
import { PERMISSION_INVITE_USERS } from 'mastodon/permissions';

const messages = defineMessages({
  logoutMessage: { id: 'confirmations.logout.message', defaultMessage: 'Are you sure you want to log out?' },
  logoutConfirm: { id: 'confirmations.logout.confirm', defaultMessage: 'Log out' },
});

const mapDispatchToProps = (dispatch, { intl }) => ({
  onLogout () {
  dispatch(openModal('CONFIRM', {
    message: intl.formatMessage(messages.logoutMessage),
    confirm: intl.formatMessage(messages.logoutConfirm),
    closeWhenConfirm: false,
    onConfirm: () => logOut(),
  }));
  },
});

export default @injectIntl
@connect(null, mapDispatchToProps)
class LinkFooter extends React.PureComponent {

  static contextTypes = {
  identity: PropTypes.object,
  };

  static propTypes = {
  onLogout: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  };

  handleLogoutClick = e => {
  e.preventDefault();
  e.stopPropagation();

  this.props.onLogout();

  return false;
  }

  render () {
  const { signedIn, permissions } = this.context.identity;

  const canInvite = signedIn && ((permissions & PERMISSION_INVITE_USERS) === PERMISSION_INVITE_USERS);
  const canProfileDirectory = profileDirectory;

  return (
    <div className='link-footer'>
      <p>
        Used to Twitter and Mastodon FE too hard? Try our <a href="https://elk.sakurajima.moe/">Elk Frontend</a>
      </p>
      <p>
        <strong>Sakurajima is a donor sponsored instance.</strong> You can support us at:
        {' '}
         <a key='paypal' href='https://www.paypal.com/donate/?hosted_button_id=HREN4ATRLZ54S'>Paypal</a>
        {' · '}
        <a key='kofi' href='https://ko-fi.com/V7V8GAJR9'>Ko-Fi</a>
        {' · '}
        <a key='patreon' href='https://www.patreon.com/sakurajimamastodon'>Patreon</a>
      </p>
    <p>
      <strong>{domain}</strong>:
      {' '}
      <Link key='about' to='/about'><FormattedMessage id='footer.about' defaultMessage='About' /></Link>
      {' · '}
       <a key='forums' href='https://forums.sakurajima.moe'>Forums</a>
       {' · '}
       <a key='pixelfed' href='https://usuzakuraya.us/'>Pixelfed</a>
        {' · '}
        <a key='blog' href='https://blog.sakurajima.moe'>Blog</a>
      {canInvite && (
      <>
        {' · '}
        <a key='invites' href='/invites' target='_blank'><FormattedMessage id='footer.invite' defaultMessage='Invite people' /></a>
      </>
      )};
      {canProfileDirectory && (
      <>
        {' · '}
        <Link key='directory' to='/directory'><FormattedMessage id='footer.directory' defaultMessage='Profiles directory' /></Link>
      </>
      )};
      {' · '}
      <Link key='privacy-policy' to='/privacy-policy'><FormattedMessage id='footer.privacy_policy' defaultMessage='Privacy policy' /></Link>
    </p>

    <p>
      <strong>Mastodon</strong>:
      {' '}
      <a href='https://joinmastodon.org' target='_blank'><FormattedMessage id='footer.about' defaultMessage='About' /></a>
      {' · '}
      <a href='https://joinmastodon.org/apps' target='_blank'><FormattedMessage id='footer.get_app' defaultMessage='Get the app' /></a>
      {' · '}
      <Link to='/keyboard-shortcuts'><FormattedMessage id='footer.keyboard_shortcuts' defaultMessage='Keyboard shortcuts' /></Link>
      {' · '}
      <a href={source_url} rel='noopener noreferrer' target='_blank'><FormattedMessage id='footer.source_code' defaultMessage='View source code' /></a>
      {' · '}
      v{version}
    </p>
    </div>
  );
  }

}