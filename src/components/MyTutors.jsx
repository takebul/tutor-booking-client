import { Button, Table } from "@heroui/react";
import { Icon } from "@iconify/react";

const MyTutors = ({ tutor }) => {
  return (
    <div>
      <Table>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Tutor Name</Table.Column>
            <Table.Column>Subject</Table.Column>
            <Table.Column>Available</Table.Column>
            <Table.Column>Hourly Fee</Table.Column>
            <Table.Column>Total Slot</Table.Column>
            <Table.Column>Registration Date</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{tutor?.name}</Table.Cell>
              <Table.Cell>{tutor?.subject}</Table.Cell>
              <Table.Cell>{tutor?.mode}</Table.Cell>
              <Table.Cell>{tutor?.hourlyFee}</Table.Cell>
              <Table.Cell>{tutor?.remainingSlots}</Table.Cell>
              <Table.Cell>{tutor?.sessionStartDate}</Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-1">
                  <Button isIconOnly size="sm" variant="tertiary">
                    <Icon className="size-4" icon="gravity-ui:pencil" />
                  </Button>
                  <Button isIconOnly size="sm" variant="danger-soft">
                    <Icon className="size-4" icon="gravity-ui:trash-bin" />
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Content>
      </Table>
    </div>
  );
};

export default MyTutors;
