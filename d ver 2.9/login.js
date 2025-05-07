const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = this.email.value;
      const password = this.password.value;

      // Admin login (hardcoded)
      const validEmailADMIN = 'user@example.com';
      const validPasswordADMIN = '1';

      if (email === validEmailADMIN && password === validPasswordADMIN) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userRole', 'admin');
        window.location.href = 'admin/ADMIN_dashboard.html';
        return;
      }

      // Barber login
      const barbers = JSON.parse(localStorage.getItem('barbers')) || [];
      const barber = barbers.find(user => user.email === email && user.password === password);
      if (barber) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userRole', 'barber');
        localStorage.setItem('userName', barber.name);
        window.location.href = 'barber/BARBER_dashboard.html';
        return;
      }

      // Customer login
      const customers = JSON.parse(localStorage.getItem('customers')) || [];
      const customer = customers.find(user => user.email === email && user.password === password);
      if (customer) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userRole', 'customer');
        localStorage.setItem('userName', customer.name);
        window.location.href = 'customer/CUSTOMER_dashboard.html';
        return;
      }

      alert('Invalid email or password!');
    });
  }