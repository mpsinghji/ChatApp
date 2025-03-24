import React from 'react';

const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-lg bg-white/20 backdrop-blur-md border border-white/20'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-blue-500'> ChatApp</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-gray-300'>Username</span>
						</label>
						<input 
							type='text' 
							placeholder='Enter username' 
							className='w-full input input-bordered h-10 bg-white/10 border-white/20 text-white placeholder-gray-400' 
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-gray-300'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 bg-white/10 border-white/20 text-white placeholder-gray-400'
						/>
					</div>
					<a href='#' className='text-sm text-gray-300 hover:underline hover:text-blue-400 mt-2 inline-block'>
						{"Don't"} have an account?
					</a>

					<div>
						<button className='btn btn-block btn-sm mt-2 bg-blue-500 hover:bg-blue-600 text-white border-none'>Login</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;