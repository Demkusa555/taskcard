function TextInput() {
  return (
    <div className="Tname">
      <h5
        style={{
          color: "#97A3B6",
          textTransform: "capitalize",
          paddingBottom: "10px",
        }}
      >
        Task Name
      </h5>
      <input
        type="text"
        style={{ border: "1px solid #E3E8EF", padding: "5px" }}
      />
    </div>
  );
}

export default TextInput;
