import React from "react";


function BoxPic({pic, href, labelText}) {

  return (
  <div className="Header">
       <a href={href} target="blank">
        <div>
          <p>labelText</p>
        </div>
        <img
          className="BoxPic"           src={pic}
          alt="Profile Pic"
        />
      </a>
    </div>
  );
}

//first attempt to change
//    <div className="Header">
//   <img
//     src={pic}
//     alt={pic}
//     className="boxPic"
//   />
//   <div className="boxPic">
//     <h3>
//       <a href={href}>myproject</a>{" "}
//       {/* <a href={repo}>
//         <i className="fab fa-github"></i>
//       </a> */}
//     </h3>
//     <p>{labelText}</p>
//   </div>
// </div>


export default BoxPic;

//  <div className="Header">
//       <a href={href} target="blank">
//         <img
//           className="BoxPic"
//           src={pic}
//           alt="Profile Pic"
//         />
//       </a>
//     </div>

{/* <div className="project">
  <img
    src={require(`../../assets/projects/${name}.jpg`).default}
    alt={removeHyphensAndCapitalize(name)}
    className="project-bg"
  />
  <div className="project-text">
    <h3>
      <a href={link}>{removeHyphensAndCapitalize(name)}</a>{" "}
      <a href={repo}>
        <i className="fab fa-github"></i>
      </a>
    </h3>
    <p>{description}</p>
  </div>
</div>; */}