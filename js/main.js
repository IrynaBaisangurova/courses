let selector = document.querySelector("#phone")
let im = new Inputmask("+38(999) 999-99-99")
im.mask(selector)

let validation = new JustValidate("form")

validation.addField("#name", [
  {
    rule: "required",
    errorMessage: "Введіть ім'я!"
  },
  {
    rule: "minLength",
    value: 2,
    errorMessage: "Мінімум 2 символа!"
  }
]).addField("#phone", [
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length > 0)
    },
    errorMessage: 'Введіть телефон'
  },
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length === 10)
    },
    errorMessage: 'Введіть телефон повністю'
  }
]).addField("#message", [
  {
    rule: "required",
    errorMessage: "Введіть повідомлення!"
  },
  {
    rule: "minLength",
    value: 9,
    errorMessage: "Мінімум 10 символів!"
  }
]).onSuccess(async function () {
  let data = {
    name: document.getElementById("name").value,
    tel: selector.inputmask.unmaskedvalue(),
    msg: document.getElementById("message").value
  }

})
