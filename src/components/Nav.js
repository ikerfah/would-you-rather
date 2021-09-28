import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {

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

          <li className='authed-user-li'>
              <span className='logged-as'>Logged as </span><span>{authedUser.name}</span>
          </li>
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