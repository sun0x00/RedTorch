import React, { PureComponent } from 'react';
import { connect } from 'dva';
import AccountsTable from './Tables/AccountsTable';

@connect(({account}) => ({
  account
}))
class Center extends PureComponent {
  constructor(props) {
    super(props);
    this.state={
       tableHeight: ((window.innerHeight - 200) > 480?(window.innerHeight - 200):480) || 480
    }
  }

  onWindowResize=()=>{
    this.setState({
      tableHeight: ((window.innerHeight - 200) > 480?(window.innerHeight - 200):480) || 480
    })
  }

  componentDidMount = () => {
    const { dispatch } = this.props;

    dispatch({
      type: 'account/fetchAccounts',
      payload: {},
    });

    window.addEventListener('resize', this.onWindowResize)
  }

  componentWillUnmount = () =>{
      window.removeEventListener('resize', this.onWindowResize)
  }
  
  render() {
    const {account} = this.props
    const {tableHeight} = this.state;

    return (
      <AccountsTable scroll={{x: 1340,y: tableHeight}} pagination={{pageSize: 50}} list={account.accounts} />
    );
  }
}

export default Center;
