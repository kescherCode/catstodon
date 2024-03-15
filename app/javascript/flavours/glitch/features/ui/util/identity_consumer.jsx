import PropTypes from 'prop-types';
import { PureComponent } from 'react';

export class IdentityConsumer extends PureComponent {
  static contextTypes = {
    identity: PropTypes.object
  };

  static propTypes = {
    children: PropTypes.func.isRequired
  };

  render() {
    return this.props.children(this.context.identity);
  }
}
