import React from "react";

interface Props {
  query: string;
  onChange: (q: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, onChange }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search doctors by name or specialization..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
