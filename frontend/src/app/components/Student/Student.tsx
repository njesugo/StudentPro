import { Space, Card, Button, Input } from 'antd';
import { Student as StudentType } from "../../types/Student";
import { useState } from 'react';
import { EditOutlined, CheckOutlined, DeleteOutlined } from '@ant-design/icons';

type StudentProps = {
    student: StudentType;
    onEdit: (data: Partial<StudentType>) => void;
    onDelete: (id: string) => void;
}

export const Student = ({student, onEdit, onDelete}: StudentProps) => {

    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>(student.name);
    const [firstname, setFirstname] = useState<string>(student.firstname); 
    const [age, setAge] = useState<number>(student.age);

    const edit = (_id: string, name:string, firstname: string, age: number) => {
        onEdit({_id, name, firstname, age});
    };

    return (
        <div>
            {editing ? ( // Afficher les inputs d'édition si editing est true
                <>
                    <Space>
                        <label>Name:</label>
                        <Input 
                            defaultValue={student.name}
                            onChange={(e) => {setName(e.target.value)}}
                        />
                        <label>Firstname:</label>
                        <Input 
                            defaultValue={student.firstname}
                            onChange={(e) => {setFirstname(e.target.value)}}
                        />
                        <label>Age:</label>
                        <Input
                            defaultValue={student.age}
                            onChange={(e) => {setAge(parseInt(e.target.value))}}
                        />
                    </Space>
                    <Button 
                        type='primary'
                        icon={<CheckOutlined />}
                        onClick={() => {
                            edit(student._id, name, firstname, age);
                            setEditing(false);
                        }}
                    />
                </>
                
                
            ) : ( // Sinon, afficher les valeurs par défaut
                <>
                    <Space>
                        <label><b>Name : </b>{student.name}</label>
                        <label><b>Firstname : </b>{student.firstname}</label>
                        <label><b>Age : </b>{student.age}</label>
                    </Space>
                    <Button 
                        type='primary'
                        icon={<EditOutlined /> }
                        onClick={() => setEditing(true)}
                    />
                </>
            )}
            
            <Button
                type="primary"
                danger={true} 
                icon={<DeleteOutlined />} 
                onClick={() => onDelete(student._id)}
            />
            {/* <Card title={`${student.firstname} ${student.name}`}>
                <p>Age: {student.age}</p>
            </Card> */}
        </div>
    );
}