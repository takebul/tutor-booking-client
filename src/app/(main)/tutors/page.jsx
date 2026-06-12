"use client";

import TutorsFeaturesCard from "@/components/TutorsFeatures/TutorsFeaturesCard";
import {
  Calendar,
  DateField,
  DatePicker,
  Label,
  SearchField,
} from "@heroui/react";
import { useEffect, useState } from "react";

const TutorsPage = () => {
  const [tutors, setTutors] = useState([]);
  const [searching, setSearching] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const fetchTutors = async (search = "", start = null, end = null) => {
    const params = new URLSearchParams();

    if (search?.trim()) {
      params.append("search", search.trim());
    }

    if (start) {
      params.append(
        "startDate",
        `${start.year}-${String(start.month).padStart(2, "0")}-${String(
          start.day,
        ).padStart(2, "0")}`,
      );
    }

    if (end) {
      params.append(
        "endDate",
        `${end.year}-${String(end.month).padStart(2, "0")}-${String(
          end.day,
        ).padStart(2, "0")}`,
      );
    }

    const res = await fetch(
      `http://localhost:8541/tutors?${params.toString()}`,
    );

    const data = await res.json();
    setTutors(data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchTutors(searching, startDate, endDate);
    }, 500);

    return () => clearTimeout(timer);
  }, [searching, startDate, endDate]);

  return (
    <section className="w-11/12 mx-auto">
      <div className="text-center my-5">
        <h1 className="text-5xl font-bold">Our All Tutors</h1>
        <p className="text-muted text-lg">
          Here are all of the Verified Teachers
        </p>
      </div>

      <div className="flex flex-wrap gap-4 w-11/12 mx-auto my-4">
        {/* Search */}
        <div>
          <SearchField name="search">
            <Label>Search</Label>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input
                value={searching}
                onChange={(e) => setSearching(e.target.value)}
                placeholder="Search tutor or subject..."
              />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </div>

        {/* Start Date */}
        <DatePicker className="w-64" value={startDate} onChange={setStartDate}>
          <Label>Start Date</Label>

          <DateField.Group fullWidth>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>

            <DateField.Suffix>
              <DatePicker.Trigger>
                <DatePicker.TriggerIndicator />
              </DatePicker.Trigger>
            </DateField.Suffix>
          </DateField.Group>

          <DatePicker.Popover>
            <Calendar aria-label="Start Date">
              <Calendar.Header>
                <Calendar.YearPickerTrigger>
                  <Calendar.YearPickerTriggerHeading />
                  <Calendar.YearPickerTriggerIndicator />
                </Calendar.YearPickerTrigger>

                <Calendar.NavButton slot="previous" />
                <Calendar.NavButton slot="next" />
              </Calendar.Header>

              <Calendar.Grid>
                <Calendar.GridHeader>
                  {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                </Calendar.GridHeader>

                <Calendar.GridBody>
                  {(date) => <Calendar.Cell date={date} />}
                </Calendar.GridBody>
              </Calendar.Grid>

              <Calendar.YearPickerGrid>
                <Calendar.YearPickerGridBody>
                  {({ year }) => <Calendar.YearPickerCell year={year} />}
                </Calendar.YearPickerGridBody>
              </Calendar.YearPickerGrid>
            </Calendar>
          </DatePicker.Popover>
        </DatePicker>

        {/* End Date */}
        <DatePicker className="w-64" value={endDate} onChange={setEndDate}>
          <Label>End Date</Label>

          <DateField.Group fullWidth>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>

            <DateField.Suffix>
              <DatePicker.Trigger>
                <DatePicker.TriggerIndicator />
              </DatePicker.Trigger>
            </DateField.Suffix>
          </DateField.Group>

          <DatePicker.Popover>
            <Calendar aria-label="End Date">
              <Calendar.Header>
                <Calendar.YearPickerTrigger>
                  <Calendar.YearPickerTriggerHeading />
                  <Calendar.YearPickerTriggerIndicator />
                </Calendar.YearPickerTrigger>

                <Calendar.NavButton slot="previous" />
                <Calendar.NavButton slot="next" />
              </Calendar.Header>

              <Calendar.Grid>
                <Calendar.GridHeader>
                  {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                </Calendar.GridHeader>

                <Calendar.GridBody>
                  {(date) => <Calendar.Cell date={date} />}
                </Calendar.GridBody>
              </Calendar.Grid>

              <Calendar.YearPickerGrid>
                <Calendar.YearPickerGridBody>
                  {({ year }) => <Calendar.YearPickerCell year={year} />}
                </Calendar.YearPickerGridBody>
              </Calendar.YearPickerGrid>
            </Calendar>
          </DatePicker.Popover>
        </DatePicker>
      </div>
      {tutors.length === 0 ? (
        <div className="text-center my-10">
          <h1 className="text-3xl font-bold">Tutors is not available here!</h1>
          <p className="text-muted">Please try another one.</p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {tutors.map((tutor) => (
              <TutorsFeaturesCard key={tutor._id} tutor={tutor} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default TutorsPage;
