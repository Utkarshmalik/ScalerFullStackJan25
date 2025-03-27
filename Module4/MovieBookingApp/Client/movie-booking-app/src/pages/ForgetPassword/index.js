import { Button, Checkbox, Form, Input, message } from 'antd';
import {Link, useNavigate} from "react-router-dom";
import { ForgetPasswordAPI, LoginUser } from '../../api/auth';

const ForgetPassword = () => {

    const navigate = useNavigate();

   
    const onSendOTP = async (values)=>{

        console.log(values);

        try{
            const response = await ForgetPasswordAPI({email:values.email});
            console.log(response);

             if(response.success){
                message.success(response.message);
                navigate("/reset");
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
                <h1>  Forget BookMyShow </h1>
            </section>

            <section>

                        <Form
                        layout='vertical'
                      name="basic"
                      onFinish={onSendOTP}
                  
               
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
                >
                    <Button style={{fontSize:"1rem",fontWeight:"600"}} htmlType='submit' block type='primary'>
                        Send OTP
                    </Button>

                </Form.Item>

       
            </Form>

            <p>
                Existing User ?  
                
                <Link to="/login" >
                 Login Here
                </Link>
            </p>


            </section>


        </main>
    </header>

    
    </>
  }
  export default ForgetPassword;
