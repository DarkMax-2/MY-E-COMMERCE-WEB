// Contact form -> opens WhatsApp with the message ready to send
(function () {
  const WHATSAPP_NUMBER = "2349118335328"; // country code first, no +, no spaces, no leading 0
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const lines = [];
    Array.from(form.elements).forEach(function (f) {
      if (!f.name || f.name.charAt(0) === "_" || f.type === "submit" || f.type === "button") return;
      const v = f.value.trim();
      if (!v) return;
      const label = f.name.replace(/[_-]/g, " ").toUpperCase();
      lines.push("*" + label + "* : " + v);
    });
    const line = "━━━━━━━━━━━━━━━";
    const text =
      "📩 *NEW MESSAGE FROM MYSHOP* 📩\n" + line + "\n\n" +
      lines.join("\n\n") + "\n\n" + line + "\n_Sent from the MyShop website_";
    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
    form.reset();
    window.location.href = url;
  });
})();