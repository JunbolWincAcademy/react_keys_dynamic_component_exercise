import './TextInput.css';

export const TextInput = ({ changeFn }) => {
  return (
    <input
      className="text-input" // Apply the CSS class for styling
      onChange={changeFn} // Pass the function reference without calling it,
      // that is why it doesn't have the ( )
      placeholder="Search for a drink" // Optional: add a placeholder for clarity
    />
  );
};
