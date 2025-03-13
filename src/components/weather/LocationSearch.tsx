import React, { useState } from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { Search } from "baseui/icon";

interface LocationSearchProps {
  onSearch: (location: string) => void;
  isLoading?: boolean;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onSearch, isLoading = false }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormControl label="Search for a location">
          <Input
            value={location}
            onChange={(e) => {
              setLocation(e.currentTarget.value);
            }}
            placeholder="Enter city or location"
            clearable
            endEnhancer={() => <Search size="18px" />}
          />
        </FormControl>
        <Button type="submit" isLoading={isLoading} disabled={!location.trim() || isLoading}>
          Get Weather
        </Button>
      </div>
    </form>
  );
};

export default LocationSearch;
