import React from 'react';


const TeamList = props => {
    console.log(props);

    return (
   <div className="team-list">
       {props.teamList.map(member =>{

        return (
            <div className="member" key = {member.id}>
            <h2>{member.name}</h2>
            <h3>{member.email}</h3>
            <p>{member.role}</p>
            </div>
        );
    })}
    </div>
    )
};

export default TeamList;