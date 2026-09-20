/* Prepare a draft locally. Sending is completed by the visitor in their email app. */
(function () {
  'use strict';
  document.querySelectorAll('[data-roof-inquiry]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      var fields = new FormData(form);
      var body = [
        'Service: ' + form.dataset.service,
        'Name: ' + fields.get('name').trim(),
        'Reply to: ' + fields.get('reply').trim(),
        'Property: ' + fields.get('location').trim(),
        '', fields.get('message').trim()
      ].join('\n');
      var subject = 'Website inquiry: ' + form.dataset.service;
      window.location.href = 'mailto:jamesleo@maximumroofing.us?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      form.querySelector('[role="status"]').textContent = 'Finish sending in your email app. This website has not sent your request. If no draft opens, call (732) 395-3945 or use the direct email link below.';
    });
    form.querySelector('button[type="submit"]').disabled = false;
  });
}());
