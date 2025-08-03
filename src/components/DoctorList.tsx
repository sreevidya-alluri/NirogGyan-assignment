import React, { useMemo, useState } from "react";
import { doctors } from "../data/doctor";
import DoctorCard from "./DoctorCard";
import SearchBar from "./SearchBar";

const DoctorList: React.FC = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return doctors.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.specialization.toLowerCase().includes(q)
    );
  }, [search]);

  return (
<div className="page-wrapper">
  <h2 className="mb-3 text-center">Find a Doctor</h2>
  <div className="d-flex justify-content-center mb-3">
    <div style={{ width: "100%", maxWidth: 700 }}>
      <SearchBar query={search} onChange={setSearch} />
      {filtered.length === 0 && (
        <div className="alert alert-warning">No doctors match your query.</div>
      )}
      <div className="d-flex flex-column gap-3">
        {filtered.map((d) => (
          <DoctorCard key={d.id} doctor={d} />
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default DoctorList;
