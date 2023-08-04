import { FC } from 'react';
import {Title} from "@mantine/core";
import { useAuth0 } from '@auth0/auth0-react';
import {Home} from './Home';

const Login: FC = () => {
	const {user, isAuthenticated} = useAuth0()
	console.log(user)
	return <>
		{!isAuthenticated ? 
		<h3>Login to see lord of the rings characters</h3>:
		<Home/>
		}

	</>;
};

export default Login

