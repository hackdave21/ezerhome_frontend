/**
 * Ezer Home - Interactions JavaScript légères
 */
document.addEventListener('DOMContentLoaded', () => {
  // Le menu mobile est géré par assets/js/layout.js

  // Simple Tab switcher
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab-target');
      const group = btn.getAttribute('data-tab-group') || 'default';

      // Update buttons
      document.querySelectorAll(`[data-tab-group="${group}"]`).forEach(b => {
        b.classList.remove('text-ezer-green', 'border-b-2', 'border-ezer-green', 'font-semibold', 'bg-ezer-green-light');
        b.classList.add('text-ezer-muted');
      });
      btn.classList.add('text-ezer-green', 'border-b-2', 'border-ezer-green', 'font-semibold');
      btn.classList.remove('text-ezer-muted');

      // Update panes
      document.querySelectorAll(`[data-tab-pane="${group}"]`).forEach(pane => {
        pane.classList.add('hidden');
      });
      const activePane = document.getElementById(target);
      if (activePane) {
        activePane.classList.remove('hidden');
      }
    });
  });

  // State switcher demo helper (for testing different screen states: errors, loading, success)
  const stateToggles = document.querySelectorAll('[data-state-target]');
  stateToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-state-target');
      const group = btn.getAttribute('data-state-group') || 'states';

      const holder = document.querySelector('[data-state-switcher="' + group + '"]');
      const on = (holder && holder.getAttribute('data-active-class')) || 'bg-ezer-dark text-white';
      const off = (holder && holder.getAttribute('data-idle-class')) || 'bg-white text-ezer-dark';

      document.querySelectorAll('[data-state-group="' + group + '"]').forEach(b => {
        b.classList.remove(...on.split(' '));
        b.classList.add(...off.split(' '));
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.remove(...off.split(' '));
      btn.classList.add(...on.split(' '));
      btn.setAttribute('aria-pressed', 'true');

      document.querySelectorAll('[data-state-pane="' + group + '"]').forEach(pane => {
        pane.classList.add('hidden');
      });
      const activePane = document.getElementById(target);
      if (activePane) {
        activePane.classList.remove('hidden');
      }
    });
  });
});
