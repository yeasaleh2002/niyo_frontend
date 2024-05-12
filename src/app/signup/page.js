import { Col, Row, Input, Checkbox, Button } from 'antd';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const SignupPage = () => {
    return (
        <div className='mx-auto max-w-6xl'>
            <Row>
                <Col xs={{ span: 24 }} lg={{ span: 16 }}>col-8</Col>
                <Col className='px-4 md:px-8' xs={{ span: 24 }} lg={{ span: 8 }}>
                    <div>
                        <p>Signup</p>
                        <p>Signup your account</p>
                        <div>
                            <div>
                                <Input size="large" placeholder="Enter Email" prefix={<MdEmail />} />
                            </div>
                            <div>
                                <Input type='password' placeholder="Enter Password" prefix={<RiLockPasswordFill />} />
                            </div>
                            <div>
                                <Input type='password' placeholder="Enter Confirm Password" prefix={<RiLockPasswordFill />} />
                            </div>`,`                            <div>
                                <Button type="primary" danger>
                                    Sign Up
                                </Button>
                            </div>
                            <div>
                                Already have an account? Return to Sign In
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SignupPage;