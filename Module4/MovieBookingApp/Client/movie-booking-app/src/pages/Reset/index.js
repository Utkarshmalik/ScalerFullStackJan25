import { Button, Checkbox, Form, Input, message } from 'antd';
import {Link, useNavigate} from "react-router-dom";
import { LoginUser, ResetPasswordAPI } from '../../api/auth';

const Reset = () => {

    const navigate = useNavigate();

    const onResetPassword = async (values)=>{

        const {otp, password}= values;

        console.log(values);

        const input={
            password,
            otp
        };

        try{

            const response = await ResetPasswordAPI(input);


            if(response.success){
                message.success(response.message);
                navigate("/login");
             }else{
                message.error(response.message);
             }

          


        }catch(err){

        }
       

    }

    return <>    
    <header className='App-header'>
        <main className='border main-area mw-500 text-center px-3' >

            <section> 
                <h1> Reset Password </h1>
            </section>

            <section>

                        <Form
                        layout='vertical'
                      name="basic"
                      onFinish={onResetPassword}
               
            >
                <Form.Item
                label="OTP"
                name="otp"
                rules={[
                    {
                    required: true,
                    message: 'OTP is required!',
                    },
                ]}
                >

                    <Input 
                    type='number'
                    id='otp'
                    placeholder='Enter your OTP'>
                    </Input>

                </Form.Item>

                <Form.Item
                label="New Password"
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
                        Reset Password 
                    </Button>

                </Form.Item>

       
            </Form>

            <p>
                New User ?  
                
                <Link to="/register" >
                 Register Here
                </Link>
            </p>

            <p>
                Forget Password ?  
                
                <Link to="/forget" >
                 Click here 
                </Link>
            </p>

            </section>


        </main>
    </header>

    
    </>
  }
  export default Reset;
