import { Col, Row, Input, Checkbox, Button } from 'antd';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const Login = () => {
    return (
        <div className='mx-auto max-w-6xl'>
            <Row>
                <Col xs={{ span: 24 }} lg={{ span: 16 }}>col-8</Col>
                <Col className='px-4 md:px-8' xs={{ span: 24 }} lg={{ span: 8 }}>
                    <div>
                        <p>Sign In</p>
                        <p>Sign in to your account</p>
                        <div>
                            <div>
                                <Input size="large" placeholder="large size" prefix={<MdEmail />} />
                            </div>
                            <div>
                                <Input type='password' placeholder="input password" prefix={<RiLockPasswordFill />} />
                            </div>
                            <div>
                                <Checkbox value="Remember Me">Remember Me</Checkbox>
                                <p>Forget Password</p>
                            </div>
                            <div>
                                <Button type="primary" danger>
                                    Login
                                </Button>
                            </div>
                            <div>
                                Dont have an account? Create free account
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Login;