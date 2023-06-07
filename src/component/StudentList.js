import React from 'react';
 const StudentList =({students, onDelete}) => {
    return (
        <ul>
            { students.map((student) => (
                <li key={student.id}>
                    {student.name} - {student.email}
                    <button on onClick={() => onDelete(student.id)}>Delete</button>
                    <button on onClick={() => onclick(student.id)}>Edit</button>

                    </li>
            ))}
            </ul>
            );
 };

 export default StudentList;