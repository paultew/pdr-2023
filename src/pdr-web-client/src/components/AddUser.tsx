import { FC, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserCreateRequest } from '../proto/user';

const AddUser: FC<UserCreateRequest> = () => {
    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
    <Form onSubmit={handleOnSubmit} className='user-form'>
        <Form.Group controlId="">
            
        </Form.Group>
    </Form>
    );
};

export default AddUser;