import { Button, Checkbox, Form, Input, message} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import { RegisterUser } from '../../api/auth';

const Register = () => {

    const navigate = useNavigate();

    const onRegister = async (values)=>{

        const {name,email,password} = values;

        const input={
            name,
            email,
            password
        }

        const response = await RegisterUser(input);

        console.log(response);

        if(response.success){
            message.success(response.message);
        }else{
            message.error(response.data.message);
        }

    }


  return <>    
  <header className='App-header'>
      <main className='border main-area mw-500 text-center px-3' >

          <section> 
              <h1> Register to BookMyShow </h1>
          </section>

          <section>

            <Form
                      layout='vertical'
              name="basic"
              onFinish={onRegister}
             
          >
              <Form.Item
              label="Name"
              name="name"
              rules={[
                  {
                  required: true,
                  message: 'Name is required!',
                  },
              ]}
              >

                  <Input 
                  type='text'
                  id='name'
                  placeholder='Enter your Name'>
                  </Input>

              </Form.Item>

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
                      Register
                  </Button>

              </Form.Item>

     
          </Form>

          <p>
              Already a user ?  
              
              <Link to="/login" >
               Login now  
              </Link>
          </p>

          </section>


      </main>
  </header>

  
  </>
  }
  export default Register;