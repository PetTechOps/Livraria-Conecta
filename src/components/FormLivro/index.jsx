import {
  FormContainer,
  FormGroup,
  Label,
  InputText,
  InputNumber,
  SubmitButton,
} from "./styles";

export function FormLivro({ info }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = {};

    info.slice(0, 3).forEach((item) => {
      formData[item] = document.getElementById(
        `txt-${item.replace(" ", "")}`
      ).value;
    });

    const lastItem = info[3];
    formData[lastItem] = document.getElementById(
      `num-${lastItem.replace(" ", "")}`
    ).value;

    const existingData = JSON.parse(localStorage.getItem("livroData")) || [];
    existingData.push(formData);
    localStorage.setItem("livroData", JSON.stringify(existingData));

    event.target.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {info.slice(0, 3).map((item) => (
        <FormGroup key={item}>
          <Label htmlFor={`txt-${item}`}>{item}:</Label>
          <InputText type="text" id={`txt-${item.replace(" ", "")}`} />
        </FormGroup>
      ))}
      <FormGroup>
        <Label htmlFor={`num-${info[3]}`}>{info[3]}:</Label>
        <InputNumber id={`num-${info[3].replace(" ", "")}`} />
      </FormGroup>
      <SubmitButton type="submit">CADASTRAR</SubmitButton>
    </FormContainer>
  );
}
