import React, {useState} from 'react';


const Form = props =>{
    const [members, setMembers] = useState({
        // username: "",
        // email:"",
        // role:"",
    });

    const handleChange = event => {
        console.log(event.target.name);
        setMembers({ ...members, [event.target.name]: event.target.value });
      };
    const handleSubmit = event => {
    event.preventDefault();
    console.log(members);// Rendering new object 
    const newMember ={
        ...members,
        id: Date.now()
    }

     props.addNewMember(newMember);
     setMembers({name: "", email: "", role: ""});

}
    return (
    <form onSubmit={handleSubmit}>
           Username:
    <input type="text" 
           name="UserName"
           placeholder="Username"
           onChange={event => handleChange(event)}/>
           Email:
    <input type="text" 
           name="Email"
           placeholder="Email"
           onChange={event => handleChange(event)}/>
           Role:  
    <input type="text" 
           name="Role"
           placeholder="Role"
           onChange={event => handleChange(event)}/>
      
        <button type="submit">Add Member</button>
    </form>

    );
};


export default Form;