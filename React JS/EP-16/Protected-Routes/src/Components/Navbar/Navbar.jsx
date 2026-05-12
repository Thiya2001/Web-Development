import React, { useDebugValue } from 'react';
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../Slices/userSlice';

const Navbar = () => {
    const user = useSelector((state) => state.userInfo.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(removeUser());
        navigate("/");
    };
  return (
    <nav>
        <h1>React EP-16</h1>
        <ul>
            {!user && (
                <Link to="/login">
                    <li>Login</li>
                </Link>
            )}
            {user && (
              <>
                <Link to="/settings">
                    <li>Settings</li>
                </Link>
                <li onClick={logout}>Logout</li>
              </>
            )}
        </ul>
    </nav>
  );
};

export default Navbar;