 document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes('/minibin-rentals-material-delivery')) {
      // Load Roboto Font
      const roboto = document.createElement('link');
      roboto.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
      roboto.rel = 'stylesheet';
      document.head.appendChild(roboto);

      // Create style block
      const style = document.createElement('style');
      style.textContent = `:root {
        --chat-width: 340px;
        --z-chat: 1000;
        --z-chat-box: 1100;
        --z-chat-prompt: 1200;
      }

      #chat-widget-container * {
        font-family: 'Roboto', sans-serif;
      }

      #chat-widget-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: var(--z-chat);
      }

      #chat-bubble {
        background-color: #f05a28;
        border-radius: 50%;
        width: 64px;
        height: 64px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
        transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
      }

      #chat-bubble:hover {
        transform: scale(1.05);
        background-color: #ff743f;
        box-shadow: 0 8px 20px rgba(240, 90, 40, 0.3);
        filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 1));
      }

      #chat-bubble svg {
        width: 28px;
        height: 28px;
        display: block;
      }

      #chat-box {
        width: var(--chat-width);
        max-height: 90vh;
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        overflow: hidden;
        display: none;
        flex-direction: column;
        position: absolute;
        bottom: 80px;
        right: 0;
        opacity: 0;
        transform: scale(0.95);
        transition: opacity 0.25s ease, transform 0.25s ease;
        z-index: var(--z-chat-box);
      }

      #chat-box.open {
        display: flex;
        opacity: 1;
        transform: scale(1);
      }

      .chat-topbar {
        background: linear-gradient(to right, #d73304, #ff4f00);
        color: white;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;
        font-weight: 500;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        height: 75px;
        position: relative;
      }

      .logo-wrap {
        display: flex;
        align-items: center;
        z-index: 2;
      }

      .logo-circle {
        border-radius: 50%;
        border: 2px solid white;
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .logo-circle img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .chat-title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0.2px;
        line-height: 1.2;
        pointer-events: none;
      }

      .close-toggle {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 2;
        padding-right: 4px;
        background: none;
        border: none;
      }

      .chat-scrollable {
        overflow-y: auto;
        padding: 16px;
        box-sizing: border-box;
      }

      .chat-bubble-wrap {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        margin-bottom: 16px;
      }

      .chat-bubble-wrap img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }

      .chat-bubble-inner {
        max-width: 294px;
        padding-right: 14px;
        box-sizing: border-box;
      }

      .chat-message {
        background: #f1f5f9;
        padding: 12px 14px;
        border-radius: 12px;
        font-size: 13px;
        line-height: 1.5;
        letter-spacing: 0.01em;
        color: #111827;
        width: 100%;
        box-sizing: border-box;
      }

      .chat-form-wrapper {
        padding-left: 38px;
        padding-right: 14px;
        box-sizing: border-box;
        width: 100%;
      }

      .chat-form-container {
        border: 1px solid #ddd;
        border-radius: 12px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 13px;
        width: 100%;
        box-sizing: border-box;
      }

      .chat-form-container input,
      .chat-form-container textarea {
        padding: 8px 12px;
        font-size: 13px;
        line-height: 1.3;
        border-radius: 8px;
        border: 1px solid #ccc;
        width: 100%;
        box-sizing: border-box;
      }

      .chat-form-container textarea {
        min-height: 80px;
        resize: vertical;
      }

    .chat-disclaimer {
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: #111827;
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-top: 4px;
  font-weight: normal;
  font-family: 'Roboto', sans-serif;
}

.chat-disclaimer input[type="checkbox"] {
  width: 16px;
  height: 16px;
  margin-top: 2px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  appearance: auto;
  accent-color: #f05a28;
  cursor: pointer;
}

      .chat-send-btn {
        background-color: #6d7b80;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 13px;
        cursor: pointer;
        align-self: center;
        margin-top: 10px;
      }

      .chat-powered-wrapper {
        padding: 0 16px;
        width: 100%;
      }

      .chat-powered {
        text-align: center;
        padding: 12px 0 20px;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0.1px;
        color: #111;
      }

      .chat-powered span {
        color: #f05a28;
        font-weight: 500;
      }

      @keyframes fadeSlideUp {
        0% {
          opacity: 0;
          transform: translateY(10px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-in {
        animation: fadeSlideUp 0.4s ease forwards;
      }

      .animate-in-delayed {
        animation: fadeSlideUp 0.4s ease 0.2s forwards;
        opacity: 0;
      }

      #chat-bubble-wrapper {
        position: relative;
      }

     #chat-prompt-bubble {
  position: absolute;
  bottom: 90px;
  right: 0;
  background: white;
  border-radius: 12px;
  padding: 10px 16px 10px 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 280px;
  max-width: 340px;
  width: auto;
  min-height: 50px;
  z-index: var(--z-chat-prompt);
  animation: fadeInUp 0.3s ease-out;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  pointer-events: none;
}

#chat-prompt-bubble.show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.chat-prompt-logo {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 3px;
}

.chat-prompt-message {
  font-size: 15px;
  color: #111827;
  line-height: 1.4;
  font-weight: 300;
  letter-spacing: 0.01em;
  margin: 0;
  flex: 1;
  white-space: normal;
}

      .chat-prompt-message strong {
        font-weight: 400;
      }

      .chat-prompt-close {
        position: absolute;
        top: 8px;
        right: 10px;
        border: none;
        background: none;
        font-size: 16px;
        color: #1a1f23;
        cursor: pointer;
      }

      #chat-prompt-bubble::after {
        content: "";
        position: absolute;
        bottom: -10px;
        right: 25px;
        width: 16px;
        height: 16px;
        background: white;
        transform: rotate(45deg);
        box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.1);
        z-index: -1;
      }

      #chat-prompt-bubble {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.4s ease, transform 0.4s ease;
        pointer-events: none;
      }

      #chat-prompt-bubble.show {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }

      @media (max-width: 480px) {
  #chat-widget-container {
    right: 15px;
    bottom: 20px;
  }

  .chat-disclaimer {
    font-size: 10px;
  }

  #chat-box {
    position: fixed;
    top: 12px;
    left: 10px;
    right: 10px;
    bottom: 8px;
    padding-bottom: env(safe-area-inset-bottom, 1px);
    width: auto;
    height: auto;
    background: #fff;
    border-radius: 12px;
    z-index: var(--z-chat-box);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    display: none;
    flex-direction: column;
    opacity: 0;
    transform: scale(0.95);
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  #chat-box.open {
    display: flex;
    opacity: 1;
    transform: scale(1);
  }

  .chat-scrollable {
    flex-grow: 1;
    overflow-y: auto;
    padding: 16px;
    padding-bottom: 20px;
    box-sizing: border-box;
  }

  .chat-powered-wrapper {
    padding: 0 16px 0px;
    width: 100%;
    margin-top: auto;
  }

  .chat-powered {
    text-align: center;
    padding: 10px 0 10px;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.1px;
    color: #111;
  }

  #chat-prompt-bubble {
    width: auto;
    min-width: 280px;
    max-width: 340px;
    right: 2px;
    padding: 10px 16px 10px 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.4s ease, transform 0.4s ease;
    pointer-events: none;
  }

  #chat-prompt-bubble.show {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  #chat-prompt-bubble::after {
    right: 24px;
  }

  .chat-prompt-message {
    font-size: 14.5px;
    line-height: 1.4;
    flex: 1;
    white-space: normal;
  }

  body.chat-open {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
    touch-action: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}

@media (max-width: 480px) {
  .chat-form-container input,
  .chat-form-container textarea {
    font-size: 16px;
  }
}
    `;
      document.head.appendChild(style);

      // Create container and inject HTML
      const wrapper = document.createElement('div');
      wrapper.innerHTML = `<div id="chat-widget-container">
    <div id="chat-bubble-wrapper">
      <div id="chat-bubble" onclick="toggleChat()">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6663 17.5007L8.07854 21.1333C7.57809 21.64 7.32786 21.8934 7.11279 21.9112C6.92619 21.9267 6.74349 21.8517 6.62163 21.7096C6.48116 21.5457 6.48116 21.1896 6.48116 20.4774V18.6575C6.48116 18.0186 5.95793 17.5563 5.32575 17.4637V17.4637C3.79571 17.2396 2.59408 16.038 2.36996 14.5079C2.33301 14.2556 2.33301 13.9546 2.33301 13.3525V7.93399C2.33301 5.9738 2.33301 4.99371 2.71449 4.24502C3.05004 3.58645 3.58547 3.05102 4.24404 2.71546C4.99273 2.33398 5.97282 2.33398 7.93301 2.33398H16.5663C18.5265 2.33398 19.5066 2.33398 20.2553 2.71546C20.9139 3.05102 21.4493 3.58645 21.7849 4.24502C22.1663 4.99371 22.1663 5.9738 22.1663 7.93398V12.834M22.1663 25.6673L19.6272 23.902C19.2703 23.6539 19.0918 23.5298 18.8976 23.4418C18.7252 23.3637 18.544 23.3069 18.3578 23.2726C18.1482 23.234 17.9308 23.234 17.4961 23.234H15.3997C14.0929 23.234 13.4395 23.234 12.9404 22.9797C12.5013 22.756 12.1444 22.399 11.9207 21.96C11.6663 21.4608 11.6663 20.8074 11.6663 19.5007V16.5673C11.6663 15.2605 11.6663 14.6071 11.9207 14.108C12.1444 13.669 12.5013 13.312 12.9404 13.0883C13.4395 12.834 14.0929 12.834 15.3997 12.834H21.933C23.2398 12.834 23.8932 12.834 24.3923 13.0883C24.8314 13.312 25.1883 13.669 25.412 14.108C25.6663 14.6071 25.6663 15.2605 25.6663 16.5673V19.734C25.6663 20.8212 25.6663 21.3648 25.4887 21.7936C25.2519 22.3653 24.7977 22.8196 24.2259 23.0564C23.7971 23.234 23.2535 23.234 22.1663 23.234V25.6673Z" stroke="#ffffff" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <div id="chat-prompt-bubble">
        <img src="https://images.squarespace-cdn.com/content/v1/5f932302989402102c340216/35502772-562d-498b-ab3d-8941ea59eefb/Pika+Logo.png" alt="Logo" class="chat-prompt-logo" />
        <div class="chat-prompt-message">
          Hi there, have a question?<br /> We'll text you straight back.
        </div>
        <button class="chat-prompt-close" aria-label="Close prompt">×</button>
      </div>
    </div>

    <div id="chat-box">
      <div class="chat-topbar">
        <div class="logo-wrap">
          <div class="logo-circle">
            <img src="https://images.squarespace-cdn.com/content/v1/5f932302989402102c340216/35502772-562d-498b-ab3d-8941ea59eefb/Pika+Logo.png" alt="Pika Landscapes" />
          </div>
        </div>
        <span class="chat-title">Pika Landscapes</span>
        <button class="close-toggle" aria-label="Close chat">
          <svg class="arrow-down" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      <div class="chat-scrollable">
        <div class="chat-bubble-wrap animate-in" id="intro-bubble">
          <img src="https://images.squarespace-cdn.com/content/v1/5f932302989402102c340216/35502772-562d-498b-ab3d-8941ea59eefb/Pika+Logo.png" />
          <div class="chat-bubble-inner">
            <div class="chat-message">
              Enter your question below and a representative will get right back to you. Be sure to enter a valid mobile number as we will reach out to you via SMS shortly.
            </div>
          </div>
        </div>

        <div class="chat-form-wrapper animate-in-delayed" id="chat-form-section">
          <form class="chat-form-container" id="chat-form">
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Message" required></textarea>

           <label class="chat-disclaimer">
<input type="checkbox" required checked />
  <span>
    By submitting, you agree to receive SMS or emails from Pika Landscapes.
    Standard messaging rates may apply. You can opt out at any time by replying STOP.
  </span>
</label>

            <button type="submit" class="chat-send-btn">Send ➔</button>
          </form>
        </div>

        <div id="submission-summary" style="display: none; flex-direction: column; gap: 12px;"></div>
      </div>

      <div class="chat-powered-wrapper">
        <div class="chat-powered">Powered by <span>Echo Digital</span></div>
      </div>
    </div>
  </div>
`;
      document.body.appendChild(wrapper);

      // Behavior script
      const chatBubble = document.getElementById('chat-bubble');
      const chatBox = document.getElementById('chat-box');
      const closeBtn = document.querySelector('.close-toggle');
      const promptBubble = document.getElementById('chat-prompt-bubble');
      const promptClose = document.querySelector('.chat-prompt-close');
      const form = document.getElementById('chat-form');
      const formSection = document.getElementById('chat-form-section');
      const thankYouTarget = document.getElementById('submission-summary');
      const introBubble = document.getElementById('intro-bubble');
      let isAnimating = false;

      function toggleChat() {
        if (isAnimating) return;
        const isOpen = chatBox.classList.contains('open');
        introBubble?.classList.remove('animate-in');
        formSection?.classList.remove('animate-in-delayed');
        void chatBox.offsetWidth;
        isAnimating = true;
        promptBubble.style.display = 'none';

        if (isOpen) {
          chatBox.classList.remove('open');
          document.body.classList.remove('chat-open');
          setTimeout(() => {
            chatBox.style.display = 'none';
            isAnimating = false;
          }, 300);
        } else {
          chatBox.style.display = 'flex';
          setTimeout(() => {
            chatBox.classList.add('open');
            document.body.classList.add('chat-open');
            introBubble?.classList.add('animate-in');
            formSection?.classList.add('animate-in-delayed');
            isAnimating = false;
          }, 10);
        }
      }

      chatBubble.addEventListener('click', toggleChat);
      closeBtn.addEventListener('click', toggleChat);
      promptClose?.addEventListener('click', () => {
        promptBubble.style.display = 'none';
      });

      window.addEventListener('load', () => {
        if (promptBubble) {
          setTimeout(() => {
            promptBubble.classList.add('show');
          }, 700);
        }
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]').value;
        const phone = form.querySelector('input[type="tel"]').value;
        const message = form.querySelector('textarea').value;

        if (window.innerWidth > 480) {
          const scrollable = document.querySelector('.chat-scrollable');
          scrollable.style.minHeight = scrollable.scrollHeight + 'px';
        }

        formSection.style.display = 'none';
        thankYouTarget.style.display = 'flex';
        thankYouTarget.innerHTML = `
          <div class="chat-bubble-wrap animate-in" style="justify-content: flex-end;">
            <div class="chat-bubble-inner">
              <div class="chat-message" style="background-color: #f05a28; color: white;">
                <strong>Details:</strong><br />
                Name: ${name}<br />
                Phone: ${phone}<br />
                Message: ${message}
              </div>
            </div>
          </div>

          <div class="chat-bubble-wrap animate-in">
            <div style="width: 30px; height: 30px; min-width: 30px; border-radius: 50%; background-color: #10b981; display: flex; align-items: center; justify-content: center;">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#10b981"/>
                <path d="M6 10.5L9 13.5L14 8.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="chat-bubble-inner">
              <div class="chat-message">
                <strong>Thank You!</strong><br />
                One of our representatives will send you a text message shortly to discuss.
              </div>
            </div>
          </div>
        `;

        const iframe = document.createElement('iframe');
        iframe.name = 'hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        const tempForm = document.createElement('form');
        tempForm.method = 'POST';
        tempForm.action = 'https://script.google.com/macros/s/AKfycbyb3HN-XVobGyTMh1EnRbfBn57JSdEcLTRf2p8JuGtsLhNx01aaq0bxjb_Pd-_fOoXI/exec';
        tempForm.target = 'hidden_iframe';

        const addField = (fieldName, value) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = fieldName;
          input.value = value;
          tempForm.appendChild(input);
        };

        addField('name', name);
        addField('phone', phone);
        addField('message', message);

        document.body.appendChild(tempForm);
        tempForm.submit();

        setTimeout(() => {
          iframe.remove();
          tempForm.remove();
        }, 1000);
      });
    }
  });
