"use client";

import { Button, Label, SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchFiltering = () => {
  const [search, setSearch] = useState();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("searchTerm", search);
    } else {
      params.delete("searchTerm");
    }
    router.push(`/tutors?${params.toString()}`);
  };
  return (
    <div>
      <SearchField name="search">
        <Label>Search</Label>
        <div className="flex gap-1 items-center">
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className=""
              type="text"
              placeholder="Search..."
            />
            <SearchField.ClearButton />
          </SearchField.Group>
          <Button onClick={handleSearch} className={"rounded-sm"}>
            Search
          </Button>
        </div>
      </SearchField>
    </div>
  );
};

export default SearchFiltering;
