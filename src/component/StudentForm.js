import React,{ useState } from 'react';

const StudentForm = ({ onSubmit}) =>{
    const [name,setName] = useState('');
 const [email, setEmail] = useState('');

const handleSubmit =(e) =>{
    e.preventDefault();
    onSubmit({ name , email});
    setName('');
    setEmail('');
};
return(
    <form onSubmit = {handleSubmit}>
        <input type="text"
        placeholder="Name"
        Value={name}
        onChange={(e) =>setName(e.target.value)}
        />
        <input 
        type="text"
        placeholder="Email"
        Value={email}
        onChange={(e) =>setEmail(e.target.value)}
        />
<button type="submit">Submit</button>

</form>
);
};


export default StudentForm;