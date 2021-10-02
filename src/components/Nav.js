import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/authedUser'

class Nav extends Component {

  handleLogout = ()=>{
    const {dispatch} = this.props

    dispatch(logout())
  }
  render() {
    const { authedUser } = this.props
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active' style={{ textDecoration: 'none' }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active' style={{ textDecoration: 'none' }}>
              leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active' style={{ textDecoration: 'none' }}>
              Add
            </NavLink>
          </li>

          {authedUser && <li className='authed-user-li'>
            <span>{authedUser.name}</span><span>   </span><span onClick={this.handleLogout} className='logout'>Logout</span>
          </li>}
        </ul>
      </nav>
    )
  }

}
function mapStateToProps({ authedUser }) {
  return {
    'authedUser': authedUser,
  }
}

export default connect(mapStateToProps)(Nav)