"use strict";
const input = document.querySelector("input");
const check = document.querySelector("button");

const shareBtn = document.getElementById("whatsappShareButton");
const section = document.querySelector(" section");
const header = document.querySelector("header");
const message = document.querySelector(".message");
const inputDisplay = document.querySelector(".input-display");

check.addEventListener("click", () => {
  if (input.value.trim() === "") {
    inputDisplay.textContent = "please enter your name";
  } else {
    setInterval(() => {
      shareBtn.style.width = "350px";
      shareBtn.style.height = "40px";
    }, 500);
    setInterval(() => {
      shareBtn.style.width = "400px";
    }, 1000);
    section.style.opacity = 100;
    input.style.opacity = 0;

    check.textContent = "PLEASE SHARE TO YOUR FRIENDS🙏🙏";
    check.style.backgroundColor = "WHITE";
    inputDisplay.textContent = "The Result Will Shock You!💝💝😘";
    message.textContent = `${input.value.toUpperCase()},please share this on your whatsapp status to see the test result`;
    shareBtn.addEventListener("click", function () {
      const randNum1 = Math.trunc(Math.random() * 99 + 1);
      const randNum2 = Math.trunc(Math.random() * 99 + 1);
      const randNum3 = Math.trunc(Math.random() * 99 + 1);
      const randNum4 = Math.trunc(Math.random() * 99 + 1);
      const randNum5 = Math.trunc(Math.random() * 99 + 1);

      const result = `
      
      *${input.value}*\n%20 ||




      Cuteness: ${randNum1}%%20 ||\n




      boldness: ${randNum2}%%20 ||\n




      Pride: ${randNum3}%%20 ||\n




      Grace: ${randNum4}%\n%20 ||\n



      Positivity: ${randNum4}%%20 ||\n




      Health: ${randNum5}%%20 ||\n




     Riches: ${randNum5}%%20 ||\n




      
      Click the link below to see yours%20\n

















       `;

      const whatsappApiUrl = `https://wa.me/?text=${result}`;

      // Open WhatsApp share link in a new tab or window.
      window.open(whatsappApiUrl, "_blank");
    });
  }
});
