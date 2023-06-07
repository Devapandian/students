import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import Button from 'react-bootstrap/Button';


const AdminDashboard = () =>{
    const [students, setStudents] = useState([]);

    const handleAddStudent = (student) => {
        const newStudent ={
            id : new Date().getTime().toString(),
            ...student,
        };
        setStudents([...students , newStudent]);
    };
    const handleDeleteStudent = (studentId) => {
        setStudents(students.fliter ((student) => student.id !==studentId));
    };
        return (
            <div>
                <h1>Admin Dashboard</h1>
                <StudentForm onSubmit={handleAddStudent}/>
                <StudentList students={students} onDelete={handleDeleteStudent} />
                </div>
        );
};
export default AdminDashboard ;