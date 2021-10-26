import Select from "./Select";

function App() {
  return (
    <div>
      <Select
        data_list={[
          "Image",
          "Live",
          "Notes",
          "Presentation",
          "Report",
          "Video",
        ]}
        placeholder={`Please Choose option\\s`}
      />
    </div>
  );
}

export default App;
