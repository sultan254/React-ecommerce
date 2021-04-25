import React from 'react';
import './Header.styles.scss';
import { ReactComponent as Logo } from '.././asset/4.2 crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import Cart from '../Cart.component/Cart';
import CartDropdown from '../CartDropdown.component/Cart-dropdown';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <Logo /> <br />
        </Link>
      </div>

      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>

        <Link to='/contact' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to='/signin' className='option'>
            SIGN IN
          </Link>
        )}
        <Cart />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
