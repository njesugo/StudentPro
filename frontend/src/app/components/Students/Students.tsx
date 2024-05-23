import axios from 'axios';
import { useEffect, useState } from 'react';
import { Student as StudentType } from "../../types/Student";
import { Student } from '../Student/Student';
import { Divider, message } from 'antd';
import { AddStudent } from '../AddStudent/AddStudent';

export const Students = () => {

    const [students, setStudents] = useState<StudentType[]>([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/students`);
                setStudents(data);
            } catch (error) {
                message.error('Failed to fetch students.');
                console.error('Error fetching students:', error);
            }
        }
        fetchStudents();
    }, []);

    const addStudent = async (name: string, firstname: string, age: number) => { 
        const student = {
            name: name,
            firstname: firstname,
            age: age,
        };
        try {
            await axios.post(`http://localhost:5000/students`, student); 

            const response = await axios.get(`http://localhost:5000/students`);
            const updatedStudents = response.data;

            setStudents(updatedStudents);
            message.success('Student added successfully.');

        } catch (error) {
            message.error('Failed to add student.');
            console.error('Error adding student:', error);
        }
    };

    const editStudent = async (data: Partial<StudentType>) => {
        try {
            await axios.put(`http://localhost:5000/students/${data._id}`, data);
            const response = await axios.get(`http://localhost:5000/students`);
            const updatedStudents = response.data;

            setStudents(updatedStudents);
        } catch (error) {
            message.error('Failed to update student.');
            console.error('Error updating student:', error);
        }
    }

    const deleteStudent = async (id: string) => {
        axios.delete(`http://localhost:5000/students/${id}`);
        setStudents(students.filter((student) => student._id !== id))
    }

    return (
        <>
            <h3>All The Students</h3>
            {students.length > 0 ? (
                students.map((student) => (
                    <Student
                        key={student._id}
                        student={student}
                        onEdit={editStudent}
                        onDelete={deleteStudent}
                    />
                ))
            ) : ( 
                    <div>No Student Yet !</div>
                )}
            <Divider />
            <AddStudent onAdd={addStudent}/>
        </>
    );
}