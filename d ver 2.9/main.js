document.addEventListener('DOMContentLoaded', function () {
  // AUTH CHECK (for admin pages)
  if (document.body.classList.contains('admin-page')) {
    if (localStorage.getItem('loggedIn') !== 'true' || localStorage.getItem('userRole') !== 'admin') {
      alert('Access denied. Admins only.');
      window.location.href = '../login.html';
    }
  }
  
  

  // LOGOUT (used in admin panel)
  window.logout = function () {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    window.location.href = '../login.html';
  };

  // SIDEBAR SECTION SWITCHING
  window.showSection = function (id) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.sidebar button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.getElementById(`${id}Btn`).classList.add('active');
  };



  


});
