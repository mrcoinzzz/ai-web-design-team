// Local practice interaction only: no network request or message delivery.
document.querySelectorAll('[data-demo-form]').forEach((form) => {
  const button = form.querySelector('button[type="submit"]');
  const result = form.querySelector('[role="status"]');
  const control = form.querySelector('select');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (button.disabled) return;
    button.disabled = true;
    button.textContent = 'Checking demo…';
    result.textContent = 'Practice request pending. Nothing is being sent.';
    const outcome = control.value;
    window.setTimeout(() => {
      result.textContent = outcome === 'error'
        ? 'Practice error: no request was sent. Your details are still here; choose success and retry.'
        : 'Practice complete. No request was sent; this example has no backend.';
      button.disabled = false;
      button.textContent = 'Try practice request';
    }, 450);
  });
});
