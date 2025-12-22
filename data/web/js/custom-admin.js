// Mailcow Admin UI Enhancement Script
document.addEventListener('DOMContentLoaded', function () {

  // 1. Add loading animations to buttons
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
      if (this.getAttribute('data-loading') !== 'true') {
        this.setAttribute('data-loading', 'true');
        this.innerHTML = `<span class="loading-spinner" style="width:16px;height:16px;border-width:2px;display:inline-block;margin-right:8px;"></span> ${this.innerHTML}`;

        // Auto remove after 3 seconds
        setTimeout(() => {
          this.setAttribute('data-loading', 'false');
          this.innerHTML = this.innerHTML.replace('<span class="loading-spinner" style="width:16px;height:16px;border-width:2px;display:inline-block;margin-right:8px;"></span> ', '');
        }, 3000);
      }
    });
  });

  // 2. Add hover effects to table rows
  document.querySelectorAll('.table tbody tr').forEach(row => {
    row.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.3s ease';
    });
  });

  // 3. Form validation animations
  document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('invalid', function (e) {
      e.preventDefault();
      this.classList.add('is-invalid');
      this.style.animation = 'shake 0.5s';

      setTimeout(() => {
        this.style.animation = '';
      }, 500);
    });

    input.addEventListener('input', function () {
      if (this.classList.contains('is-invalid')) {
        this.classList.remove('is-invalid');
      }
    });
  });

  // 4. Toast notifications for form submissions
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
      if (!this.classList.contains('no-toast')) {
        showToast('Processing your request...', 'info');
      }
    });
  });

  // 5. Modal animations
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('show.bs.modal', function () {
      this.style.opacity = 0;
      setTimeout(() => {
        this.style.transition = 'opacity 0.3s';
        this.style.opacity = 1;
      }, 10);
    });
  });

  // 6. Tooltip enhancements
  document.querySelectorAll('[title]').forEach(el => {
    el.setAttribute('data-bs-toggle', 'tooltip');
    el.setAttribute('data-bs-placement', 'top');
  });

  // 7. Copy to clipboard buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const text = this.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(() => {
        const original = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
          this.innerHTML = original;
        }, 2000);
      });
    });
  });

  // 8. Auto-hide alerts after 5 seconds
  document.querySelectorAll('.alert:not(.alert-permanent)').forEach(alert => {
    setTimeout(() => {
      if (alert.parentNode) {
        alert.style.transition = 'opacity 0.5s';
        alert.style.opacity = 0;
        setTimeout(() => {
          if (alert.parentNode) {
            alert.parentNode.removeChild(alert);
          }
        }, 500);
      }
    }, 5000);
  });

  // 9. Smooth scroll to top
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollTopBtn.className = 'btn btn-primary btn-scroll-top';
  scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: none;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  `;
  document.body.appendChild(scrollTopBtn);

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  // 10. Theme switcher (if multiple themes available)
  if (document.getElementById('themeSwitcher')) {
    document.getElementById('themeSwitcher').addEventListener('change', function (e) {
      const theme = this.value;
      fetch('/api/theme/switch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theme: theme })
      }).then(() => {
        window.location.reload();
      });
    });
  }

  // Utility function to show toast
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `alert alert-${type} toast-message`;
    toast.innerHTML = message;
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      animation: slideInRight 0.5s;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 500);
    }, 3000);
  }

  // Add shake animation for invalid inputs
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
  `;
  document.head.appendChild(style);
});
