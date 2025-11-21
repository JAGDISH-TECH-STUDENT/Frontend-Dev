class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  renderForm(containerId) {
    const container = document.getElementById(containerId);
    let formHTML = "<form id='dynamicForm'>";
    this.fields.forEach(field => {
      formHTML += `<label>${field.label}</label><input type="${field.type}" name="${field.label}" /><br/>`;
    });
    formHTML += `<button type="submit">Submit</button></form>`;
    container.innerHTML = formHTML;

    document.getElementById("dynamicForm").addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(this.getFormData());
    });
  }

  getFormData() {
    const form = document.getElementById("dynamicForm");
    const data = {};
    this.fields.forEach(field => {
      data[field.label] = form[field.label].value;
    });
    return data;
  }
}


