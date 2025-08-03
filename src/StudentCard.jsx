//this component displays a bio that when clicked displays extra information
import React from "react";
function StudentCard(props) {
  const { name, major, year, bio, imageUrl } = props;
  //initialize showBio to false and use setShowBio as state setter function to update showBio
  const [showBio, setShowBio] = React.useState(false);
  //flip showBio value by calling state setter function setShowBio
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    <div
      style={{
        maxWidth: "350px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        margin: "20px auto",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "12px",
        }}
      />
      <h2 style={{ margin: "0", fontSize: "22px" }}>{name}</h2>
      <p style={{ margin: "4px 0", fontSize: "16px" }}>
        {major} – {year}
      </p>
      <button
        onClick={toggleBio}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          fontSize: "14px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
        }}
      >
        {/*ternary operator to alternate text when bio is shown or not shown*/}
        {showBio ? "Hide Bio" : "Show Bio"}
      </button>
      {/*ternary operator to alternate text when bio is shown or not shown*/}
      {showBio && <p style={{ marginTop: "16px", fontSize: "14px" }}>{bio}</p>}
    </div>
  );
}

export default StudentCard;
