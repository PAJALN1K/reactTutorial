const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={evt => onChange(evt.target.value)} >
      {/* записи disabled и disabled={true} по сути одинаковы */}
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};

export default MySelect;
