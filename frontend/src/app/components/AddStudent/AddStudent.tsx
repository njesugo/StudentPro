import { Span } from "next/dist/trace";
import { useState } from "react";
import { Form, Button, Input } from "antd";

type AddStudentProps = {
    onAdd: (name: string, firstname: string, age: number) => void;
}

export const AddStudent = ({onAdd}:AddStudentProps) => {
    const [name, setName] = useState<string>("");
    const [firstname, setFirstname] = useState<string>(""); 
    const [age, setAge] = useState<number>();
    
    return (
        <>
            <Form
                name="basic"
                labelCol={{ span:8 }}
                wrapperCol={{ span:16 }}
                style={{ maxWidth:600 }}
                initialValues={{ remember:true }}
                onFinish={() => onAdd(name, firstname, age!)}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "name is required !" }]}
                >
                    <Input onChange={(e) => setName(e.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Firstname"
                    name="firstname"
                    rules={[{ required: true, message: "firstname is required !" }]}
                >
                    <Input onChange={(e) => setFirstname(e.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Age"
                    name="age"
                    rules={[{ required: true, message: "Age is required !" }]}
                >
                    <Input onChange={(e) => setAge(Number(e.target.value))} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Ajouter
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}