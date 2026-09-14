document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('#mainNav .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('mainNav');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});

const enquiryForm = document.getElementById('whatsappEnquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(enquiryForm);
    const message = [
      'Hello, I would like to make an availability enquiry.',
      `Name: ${data.get('name')}`,
      `Preferred area: ${data.get('area')}`,
      `Preferred date: ${data.get('date')}`,
      `Preferred profile: ${data.get('profile') || 'Not specified'}`,
      `Occasion: ${data.get('occasion')}`
    ].join('\n');
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
}

const selectedAreaName = document.getElementById('selectedAreaName');
if (selectedAreaName) {
  const selectedArea = new URLSearchParams(window.location.search).get('area');
  const areaLink = selectedArea ? document.getElementById(selectedArea) : null;
  const areaName = areaLink?.dataset.areaName || 'Mumbai';
  if (areaLink) {
    areaLink.classList.add('is-selected');
    areaLink.setAttribute('aria-current', 'page');
  }
  selectedAreaName.textContent = areaName;
  const selectedAreaLabel = document.getElementById('selectedAreaLabel');
  if (selectedAreaLabel) selectedAreaLabel.textContent = areaName;
  document.title = `${areaName} Area Booking Guide | Miss Mumbai`;

  const areaWhatsAppLink = document.getElementById('areaWhatsAppLink');
  if (areaWhatsAppLink) {
    const message = `Hello, I would like to check availability for ${areaName}.`;
    areaWhatsAppLink.href = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
  }

  const areaHeroBookingButton = document.getElementById('areaHeroBookingButton');
  if (areaHeroBookingButton) {
    const message = `Hello, I would like to book in ${areaName}.`;
    areaHeroBookingButton.href = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    areaHeroBookingButton.setAttribute('aria-label', `Book in ${areaName} on WhatsApp`);
  }

  document.querySelectorAll('.area-profile-link').forEach((link) => {
    const profileName = link.dataset.profileName;
    const message = `Hello, I would like to ask about ${profileName} for ${areaName}.`;
    link.href = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
  });
}
