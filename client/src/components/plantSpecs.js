import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css';

function PlantSpecs() {
  return (
    <>
    <h1>What Are Your Garden Priorities?</h1>
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control
        type="text"
        placeholder="Bird Habitat"
        aria-label="Disabled input example"
        readOnly
      />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control
        type="text"
        placeholder="Butterfly Habitat"
        aria-label="Disabled input example"
        readOnly
      />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control
        type="text"
        placeholder="Colorful Blooms"
        aria-label="Disabled input example"
        readOnly
      />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control
        type="text"
        placeholder="Edible Plants"
        aria-label="Disabled input example"
        readOnly
      />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control
        type="text"
        placeholder="Insect Pollinator Habitat"
        aria-label="Disabled input example"
        readOnly
      />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control
        type="text"
        placeholder="Privacy"
        aria-label="Disabled input example"
        readOnly
      />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control
        type="text"
        placeholder="Shade Tollerance"
        aria-label="Disabled input example"
        readOnly
      />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control
        type="text"
        placeholder="Water Efficiency"
        aria-label="Disabled input example"
        readOnly
      />
      </InputGroup>
      </Form>
    </>
  );
}

export default PlantSpecs;