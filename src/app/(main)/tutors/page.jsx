"use client";

import DateFiltering from "@/components/filter/DateFiltering";
import TutorsFeaturesCard from "@/components/TutorsFeatures/TutorsFeaturesCard";
import { Label, SearchField } from "@heroui/react";
import { useEffect, useState } from "react";

const TutorsPage = () => {
  const [tutors, setTutors] = useState([]);
  const [searching, setSearching] = useState("");

  const fetchTutors = async (search = "") => {
    const res = await fetch(`http://localhost:8541/tutors?search=${search}`);
    const data = await res.json();
    setTutors(data);
  };
  console.log(tutors);
  useEffect(() => {
    fetchTutors(searching);
  }, [searching]);
  return (
    <section className="w-11/12 mx-auto">
      <div className="text-center my-5">
        <h1 className="text-5xl font-bold">Our All Tutors</h1>
        <p className="text-muted text-lg">
          Here are all of the Verified Teachers
        </p>
      </div>
      <div className="flex gap-4 w-11/12 mx-auto my-4">
        <div>
          <SearchField name="search">
            <Label>Search</Label>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input
                value={searching}
                onChange={(e) => setSearching(e.target.value)}
                className=""
                type="text"
                placeholder="Search..."
              />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </div>
        <DateFiltering />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {tutors.map((tutor) => (
          <TutorsFeaturesCard key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </section>
  );
};

export default TutorsPage;
