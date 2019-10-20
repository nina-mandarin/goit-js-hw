'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(`${selector}`);
    this.targetDate = targetDate.getTime();

    this.init();
  }

  init() {
    this.createLayout();
    this.updateTime();
  }

  updateTime() {
    const selectorDays = this.selector.querySelector('span[data-value="days"]');
    const selectorHours = this.selector.querySelector(
      'span[data-value="hours"]',
    );
    const selectorMins = this.selector.querySelector('span[data-value="mins"]');
    const selectorSecs = this.selector.querySelector('span[data-value="secs"]');

    const timerId = setInterval(() => {
      const currentDate = Date.now();
      const time = this.targetDate - currentDate;

      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = this.pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      );
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

      selectorDays.textContent = days;
      selectorHours.textContent = hours;
      selectorMins.textContent = mins;
      selectorSecs.textContent = secs;
    }, 1000);

    if (this.targetDate < Date.now()) {
      clearInterval(timerId);

      selectorDays.textContent = '00';
      selectorHours.textContent = '00';
      selectorMins.textContent = '00';
      selectorSecs.textContent = '00';

      return;
    }
  }

  pad(value) {
    if (value.length > 2) {
      return value;
    }
    return String(value).padStart(2, '0');
  }

  createLayout() {
    const markup = `
      <div class="field">
        <span class="value" data-value="days">00</span>
        <span class="label">Days</span>
      </div>
      
      <div class="field">
        <span class="value" data-value="hours">00</span>
        <span class="label">Hours</span>
      </div>
      
      <div class="field">
        <span class="value" data-value="mins">00</span>
        <span class="label">Minutes</span>
      </div>
      
      <div class="field">
        <span class="value" data-value="secs">00</span>
        <span class="label">Seconds</span>
      </div>
    `;
    this.selector.insertAdjacentHTML('afterBegin', markup);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2020'),
});
