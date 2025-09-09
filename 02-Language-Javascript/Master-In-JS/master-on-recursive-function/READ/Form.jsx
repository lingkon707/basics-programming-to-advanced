const formSchema = {
  name: "",
  address: { city: "", zip: "" }
};

function Form({ schema }) {
  return (
    <div>
      {Object.keys(schema).map((key) =>
        typeof schema[key] === "object" ? (
          <div key={key}>
            <h4>{key}</h4>
            <Form schema={schema[key]} /> {/* recursion */}
          </div>
        ) : (
          <input key={key} placeholder={key} />
        )
      )}
    </div>
  );
}

export default function App() {
  return <Form schema={formSchema} />;
}
