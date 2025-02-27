import { Button, Checkbox, Form, Input, message } from 'antd';
import {Link, useNavigate} from "react-router-dom";
import { LoginUser } from '../../api/auth';

const Login = () => {

    const navigate = useNavigate();

    const onLogin = async (values)=>{

        const {email, password}= values;

        const input={
            email,
            password
        };


         const response = await LoginUser(input);

         if(response.success){
            message.success("Login Success");

            const accessToken = response.accessToken;
            localStorage.setItem("token",accessToken);
            

            navigate("/");
         }else{
            message.error(response.message);
         }

    }

    return <>    
    <header className='App-header'>
        <main className='border main-area mw-500 text-center px-3' >

            <section> 
                <h1> Login to BookMyShow </h1>
            </section>

            <section>

                        <Form
                        layout='vertical'
                      name="basic"
                      onFinish={onLogin}
               
            >
                <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                    required: true,
                    message: 'Email is required!',
                    },
                ]}
                >

                    <Input 
                    type='email'
                    id='email'
                    placeholder='Enter your Email'>
                    </Input>

                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Password is required!',
                    },
                ]}
                >
                    <Input 
                    type='password'
                    id='password'
                    placeholder='Enter your Password'>
                    </Input>

                </Form.Item>

                <Form.Item
                >
                    <Button style={{fontSize:"1rem",fontWeight:"600"}} htmlType='submit' block type='primary'>
                        Login
                    </Button>

                </Form.Item>

       
            </Form>

            <p>
                New User ?  
                
                <Link to="/register" >
                 Register Here
                </Link>
            </p>

            </section>


        </main>
    </header>

    
    </>
  }
  export default Login;
