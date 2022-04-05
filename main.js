class Validation {
  constructor(element) {
    this.element = element;
    this.fullName = element.querySelector('#fullname');
    this.email = element.querySelector('#email');
    this.maleGender = element.querySelector('.wrapper-form-gender');
    this.submit = element.querySelector('.form-submit');
    this.country = element.querySelector('#select-country');
    this.password = element.querySelector('#password');
    this.rePassword = element.querySelector('#re-enter-password');
    this.setEventListeners();
  }

  setEventListeners() {
    this.fullName.addEventListener('blur', () => this.validateFullName());

    this.fullName.addEventListener('input', () => {
      this.fullName.parentElement.classList.remove('invalid');
      this.fullName.nextElementSibling.innerHTML = '';
    });

    this.email.addEventListener('blur', () => this.validateEmail());

    this.email.addEventListener('input', () => {
      this.email.parentElement.classList.remove('invalid');
      this.email.nextElementSibling.innerHTML = '';
    });

    this.submit.addEventListener('click', (e) => {
      e.preventDefault();
      let error = false;
      error = this.validateFullName();
      error = this.validateEmail();
      error = this.validateGender();
      error = this.validateHobby();
      error = this.validateCountry();
      error = this.validateRePass();
      error = this.validatePass();

      if (error == true) {
        alert('Bạn đã đăng nhập thành công');
      }
    })


  };

  validateFullName() {
    if (this.fullName.value == '') {
      this.fullName.parentElement.classList.add('invalid');
      this.fullName.nextElementSibling.innerHTML = 'Vui lòng nhập thông tin';
    } else {
      this.fullName.parentElement.classList.remove('invalid');
      this.fullName.nextElementSibling.innerHTML = '';
    }

    return !this.fullName.value == '';
  }

  validateGender() {
    this.gender = document.querySelector('input[name="gender"]:checked');
    this.gendersElement = document.querySelector('input[name="gender"]').parentElement;
    if (this.gender) {
      this.gendersElement.parentElement.classList.remove('invalid');
      this.gendersElement.nextElementSibling.innerHTML = '';
    } else {
      this.gendersElement.parentElement.classList.add('invalid');
      this.gendersElement.nextElementSibling.innerHTML = 'Vui lòng chọn trường này';
    }

    return this.gender;
  }

  validateEmail() {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(this.email.value)) {
      this.email.parentElement.classList.add('invalid');
      this.email.nextElementSibling.innerHTML = 'Email không hợp lệ';
    } else {
      this.email.parentElement.classList.remove('invalid');
      this.email.nextElementSibling.innerHTML = '';
    }

    return regex.test(this.email.value);
  }

  validateHobby() {
    this.genders = document.querySelector('input[name="hobby"]:checked');
    this.genderElement = document.querySelector('input[name="hobby"]');
    if (this.genders) {
      this.genderElement.parentElement.parentElement.classList.remove('invalid');
      this.genderElement.parentElement.nextElementSibling.innerHTML = '';
    } else {
      this.genderElement.parentElement.parentElement.classList.add('invalid');
      this.genderElement.parentElement.nextElementSibling.innerHTML = 'Vui lòng chọn trường này';
    }
    
    return this.genders;
  }

  validateCountry() {
    this.countryElement = this.country.options[this.country.selectedIndex];
    this.countryValue = this.country.options[this.country.selectedIndex].value;
    if (this.countryValue) {
      this.countryElement.parentElement.parentElement.classList.remove('invalid');
      this.countryElement.parentElement.nextElementSibling.innerHTML = '';
    } else {
      this.countryElement.parentElement.parentElement.classList.add('invalid');
      this.countryElement.parentElement.nextElementSibling.innerHTML = 'Vui lòng chọn trường này';
    }

    return this.countryValue;
  }


  validatePass() {
    if (this.password.value == '') {
      this.password.parentElement.classList.add('invalid');
      this.password.nextElementSibling.innerHTML = 'Vui lòng nhập trường này có các ký tự A-Z,0-9';
    } else {
      this.password.parentElement.classList.remove('invalid');
      this.password.nextElementSibling.innerHTML = '';
    }

    return !this.password.value == '';
  }

  validateRePass() {
    if (this.rePassword.value == '') {
      this.rePassword.parentElement.classList.add('invalid');
      this.rePassword.nextElementSibling.innerHTML = 'Vui lòng nhập trường này';
    } else if (this.rePassword.value == this.password.value) {
      this.rePassword.parentElement.classList.remove('invalid');
      this.rePassword.nextElementSibling.innerHTML = '';
    } else {
      this.rePassword.parentElement.classList.add('invalid');
      this.rePassword.nextElementSibling.innerHTML = 'Vui lòng nhập lại password';
    }

    return this.rePassword.value == this.password.value;
  }


  
}

const validate = new Validation(
  document.querySelector('#form-1')
);
