import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'
    style={{
      backgroundImage: `url('https://www.blueskyprojects.in/design/bluesky2017/images/product/realestate.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <h1 className='text-3xl text-center font-semibold my-7 text-purple-700'>
        Sign In
      </h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 shadow-lg rounded-lg p-6 bg-purple-900'
      >
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg bg-purple-800 text-white'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg bg-purple-800 text-white'
          id='password'
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className='bg-purple-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 transition duration-300'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-purple-300'>Dont have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-purple-300 hover:underline'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
