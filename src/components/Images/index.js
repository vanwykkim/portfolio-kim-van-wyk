import React from 'react';

const styles = {
    contactIcons:{
        height: "50px",
        width: "50px",
    },
};

export default function profilePic(){
    return(
        <img  
            className=''
            src={require('../../assets/images/profile-pic.jpg')}
            alt='Profile Pic'
        />
    )
};

export function Box1Pic(){
    return(
        <img  
            className='BoxPic'
            src={require('../../assets/images/laserlights.jpg')}
            alt='Profile Pic'
            
        />
    )
};

export function PhonePic(){
    return (
      <img
        className="ContactIcons"
        src={require("../../assets/images/phone.png")}
        alt="Phone Icon"
        style={styles.contactIcons}
      />
    );
};
export function EmailPic(){
    return (
      <img
        className="ContactIcons"
        src={require("../../assets/images/email.png")}
        alt="Email Pic"
        style={styles.contactIcons}
      />
    );
};
export function LinkedPic(){
    return (
      <img
        className="ContactIcons"
        src={require("../../assets/images/linkedin.png")}
        alt="Linkedin Icon"
        style={styles.contactIcons}
      />
    );
};

