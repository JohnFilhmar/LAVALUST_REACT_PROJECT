import { Button, Card, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const login = () => {
    const email = 'email@email.com';
    const password = 'passwordpassword';

    return (
        <>
        <div className="flex items-center justify-center h-screen text-center">
            <Card className="w-96 h-130">
            <h5 className="text-3xl font-bold text-gray-900 dark:text-white mt-5 mb-5">Login</h5>
            <form className="flex flex-col gap-4" action='/mainpage'>
                <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput 
                    id="email1"
                    type="email"
                    placeholder="name@flowbite.com"
                    required
                    value={email}
                />
                </div>
                <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput 
                    id="password1" 
                    type="password" 
                    required 
                    value={password}
                />
                </div>
                <Button type="submit">Submit</Button>
                <Button as={Link} to="/register">Register</Button>
            </form>
            </Card>
        </div>
        </>
    );
}
 
export default login;