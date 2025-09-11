function TextInput({ name, handleChangeTask, keyname, defaultvalue }) {
  return (
    <div className="Tname">
      <h5
        style={{
          color: "#97A3B6",
          textTransform: "capitalize",
          paddingBottom: "10px",
        }}
      >
        {name}
      </h5>
      <input
        onChange={(event) => {
          handleChangeTask(event.target.value, event.target.name);
        }}
        type="text"
        style={{ border: "1px solid #E3E8EF", padding: "5px" }}
        name={keyname}
        value={defaultvalue}
      />
    </div>
  );
}

export default TextInput;
