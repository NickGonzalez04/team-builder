import React, {useState} from 'react';


const Form = props =>{
    const [members, setMembers] = useState({
        username: "",
        email:"",
        role:"",
    });

    const handleChange = event => {
        console.log(event.target.name)
        setMembers({ ...members, [event.target.name]: event.target.value });
      };
    const handleSubmit = event => {
    event.preventDefault();
    const newMember ={
        ...members,
        id: Date.now()
    }
    
     props.addNewMember(newMember);
     setMembers({name: "", email: "", role: ""})

}
    return (
    <form onSubmit={handleSubmit}>
        <input type="date"/>
           Username:
    <input type="text" 
           name="UserName"
           value={members.name}
           onChange={event => handleChange(event)}/>
            Email:
    <input type="text" 
           email="Email"
           value={members.email}
           onChange={event => handleChange(event)}/>
            Role:
    <input type="text" 
           role="Role"
           value={members.role}
           onChange={event => handleChange(event)}/>
      
        <button type="submit">Add Member</button>
    </form>

    );
};


export default Form;