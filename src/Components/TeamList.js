import React from 'react';


const TeamList = props => {
    console.log("team",props);
    return (
   <div className="team-list">
       {props.teamMembers.map(member =>{

        return (
            <div className="member" key = {member.id}>
            <h2>{member.Name}</h2>
            <h3>{member.Email}</h3>
            <p>{member.Role}</p>
            </div>
        );
    })}
    </div>
    )
};

export default TeamList;