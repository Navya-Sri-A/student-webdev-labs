const submitForm = function submitFormUserInput() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();

    console.log(form.elements.fname.value);
    console.log(form.elements.email.value);
    console.log(form.elements.section.value);
    console.log(form.elements.assignments.value);
    console.log(form.elements.comments.value);
  });
};

submitForm();
