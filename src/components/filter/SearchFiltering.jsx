import { Label, SearchField } from "@heroui/react";

const SearchFiltering = () => {
  return (
    <div>
      <SearchField name="search">
        <Label>Search</Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input className="w-[280px]" placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>
    </div>
  );
};

export default SearchFiltering;
