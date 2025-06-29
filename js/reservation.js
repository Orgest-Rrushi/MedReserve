document.addEventListener('DOMContentLoaded', async function() {
  const doctorsRes = await fetch('data/doctors.json');
  const doctors = await doctorsRes.json();
  
  document.getElementById('service').addEventListener('change', function() {
    const service = this.value;
    const doctorSelect = document.getElementById('doctor');
    doctorSelect.innerHTML = '<option value="" data-translate="choose-doctor">Zgjidhni një mjek</option>';
    
    doctors.filter(d => d.specialty === service).forEach(doctor => {
      const option = document.createElement('option');
      option.value = doctor.id;
      option.textContent = doctor.name;
      doctorSelect.appendChild(option);
    });
  });
  
  document.getElementById('date').addEventListener('change', function() {
    const timeSelect = document.getElementById('time');
    timeSelect.innerHTML = '<option value="" data-translate="choose-time">Zgjidhni një orë</option>';
    
    for (let hour = 9; hour <= 16; hour++) {
      const option = document.createElement('option');
      option.value = `${hour}:00`;
      option.textContent = `${hour}:00`;
      timeSelect.appendChild(option);
    }
  });
  
  document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Rezervimi u krye me sukses! Do të merrni një email konfirmimi.');
  });
});