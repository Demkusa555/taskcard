function TextArea({ name }) {
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
        <textarea style={{ border: "1px solid #E3E8EF", padding: "5px" }} />
      </div>
    </div>
  );
}

export default TextArea;
