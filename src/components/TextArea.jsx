function TextArea({ name, handleChangeTask, keyname, defaultvalue }) {
  return (
    <div>
      <div className="Tdesc">
        <h5
          style={{
            color: "#97A3B6",
            textTransform: "capitalize",
            paddingBottom: "10px",
          }}
        >
          {name}
        </h5>
        <textarea
          onChange={(event) => {
            handleChangeTask(event.target.value, event.target.name);
          }}
          style={{ border: "1px solid #E3E8EF", padding: "5px" }}
          name={keyname}
          value={defaultvalue}
        />
      </div>
    </div>
  );
}

export default TextArea;
