// ===== SHOP PAGE: product list, cards, cart =====
(function () {
  const CURRENCY = "$"; // change to "₦" if you want Naira

  // ONE LINE PER PRODUCT. The photo is img/<id>.jpg (id 1 -> img/1.jpg).
  // Keep the comma at the end of every line except the last one.
  const products = [
    { id: 1,  name: "Midnight Hoodie",        price: 45 },
    { id: 2,  name: "Teal Fleece Hoodie",     price: 48 },
    { id: 3,  name: "Classic Black Hoodie",   price: 42 },
    { id: 4,  name: "Ash Zip Hoodie",         price: 52 },
    { id: 5,  name: "Oversized Sand Hoodie",  price: 55 },
    { id: 6,  name: "Runner One",             price: 80 },
    { id: 7,  name: "Runner Orange",          price: 85 },
    { id: 8,  name: "Street Low Sneaker",     price: 70 },
    { id: 9,  name: "White Court Sneaker",    price: 65 },
    { id: 10, name: "Trail Boot",             price: 95 },
    { id: 11, name: "Classic Cap",            price: 18 },
    { id: 12, name: "Black Snapback",         price: 20 },
    { id: 13, name: "Ash Dad Cap",            price: 17 },
    { id: 14, name: "Orange Trucker Cap",     price: 19 },
    { id: 15, name: "Teal Bucket Hat",        price: 22 },
    { id: 16, name: "City Backpack",          price: 60 },
    { id: 17, name: "Mini Crossbody",         price: 35 },
    { id: 18, name: "Everyday Tote",          price: 30 },
    { id: 19, name: "Sling Bag",              price: 28 },
    { id: 20, name: "Gym Duffel",             price: 48 },
    { id: 21, name: "Ash Bomber Jacket",      price: 90 },
    { id: 22, name: "Black Puffer Jacket",    price: 120 },
    { id: 23, name: "Teal Windbreaker",       price: 70 },
    { id: 24, name: "Denim Jacket",           price: 85 },
    { id: 25, name: "Orange Utility Jacket",  price: 95 },
    { id: 26, name: "Olive Field Jacket",     price: 100 },
    { id: 27, name: "Quilted Vest",           price: 75 },
    { id: 28, name: "Varsity Jacket",         price: 105 },
    { id: 29, name: "Rain Shell Jacket",      price: 80 },
    { id: 30, name: "Fleece Zip Jacket",      price: 68 },
    { id: 31, name: "Blue Straight Jeans",    price: 60 },
    { id: 32, name: "Black Slim Jeans",       price: 58 },
    { id: 33, name: "Wide Leg Jeans",         price: 65 },
    { id: 34, name: "Light Wash Jeans",       price: 55 },
    { id: 35, name: "Ash Cargo Pants",        price: 62 },
    { id: 36, name: "Ripped Skinny Jeans",    price: 57 },
    { id: 37, name: "Baggy Denim",            price: 66 },
    { id: 38, name: "Tapered Jeans",          price: 59 },
    { id: 39, name: "Dark Indigo Jeans",      price: 64 },
    { id: 40, name: "Carpenter Jeans",        price: 68 },
    { id: 41, name: "Graphic Hoodie",         price: 50 },
    { id: 42, name: "Sherpa Zip Hoodie",      price: 72 },
    { id: 43, name: "Cropped Hoodie",         price: 44 },
    { id: 44, name: "Heavyweight Hoodie",     price: 60 },
    { id: 45, name: "Orange Pullover Hoodie", price: 47 },
    { id: 46, name: "Slip-On Loafer",         price: 58 },
    { id: 47, name: "Canvas Low Top",         price: 48 },
    { id: 48, name: "High Top Sneaker",       price: 78 },
    { id: 49, name: "Sport Runner Black",     price: 82 },
    { id: 50, name: "Chunky Sneaker",         price: 88 },
    { id: 51, name: "Ash Oversized Hoodie", price: 18500, image: "img/51.jpg", isNew: true },
    { id: 52, name: "Teal Cargo Joggers", price: 15000, image: "img/52.jpg", isNew: true },
    { id: 53, name: "Orange Trim Windbreaker", price: 22000, image: "img/53.jpg", isNew: true },
    { id: 54, name: "Classic White Tee", price: 8500, image: "img/54.jpg", isNew: true },
    { id: 55, name: "Ribbed Knit Sweater", price: 16500, image: "img/55.jpg", isNew: true },
    { id: 56, name: "Relaxed Denim Jacket", price: 24000, image: "img/56.jpg", isNew: true },
    { id: 57, name: "Fleece Sweatpants", price: 14000, image: "img/57.jpg", isNew: true },
    { id: 58, name: "Ash Grey Cap", price: 6500, image: "img/58.jpg", isNew: true },
    { id: 59, name: "Graphic Crewneck Sweatshirt", price: 17000, image: "img/59.jpg", isNew: true },
    { id: 60, name: "Everyday Canvas Tote", price: 9500, image: "img/60.jpg", isNew: true }
  ];
  const DETAILS = [
    "Deep black fleece hoodie with a soft inside, kangaroo pocket and ribbed cuffs. Warm and easy to wear daily.", // 1
    "Teal fleece hoodie that is light but warm. Relaxed fit with a roomy hood and front pocket.", // 2
    "Heavyweight black hoodie with a brushed inside and ribbed cuffs. A simple piece that goes with everything.", // 3
    "Ash grey zip-up hoodie with two side pockets. Easy to layer over a tee in any weather.", // 4
    "Oversized hoodie in a soft sand shade. Drop shoulders and a thick hood for a relaxed look.", // 5
    "Light everyday runners with a cushioned sole and breathable top. Comfortable for walking or training.", // 6
    "Bold orange runners with good grip and a soft inner sole. Stand out while you stay comfortable.", // 7
    "Clean low-cut street sneaker with a flexible sole. A simple style for daily use.", // 8
    "Classic white court sneaker with a neat finish. Easy to match with jeans, joggers or shorts.", // 9
    "Strong trail boot with a firm sole and lace-up front. Built for rough paths and long wear.", // 10
    "Classic cap with a curved brim and adjustable strap. Light and breathable for sunny days.", // 11
    "Black snapback with a flat brim and snap closure. A sharp street-style cap.", // 12
    "Soft ash dad cap with a relaxed fit and adjustable back. Simple and comfortable.", // 13
    "Orange trucker cap with a mesh back for airflow. Bright, light and easy to wear.", // 14
    "Teal bucket hat with a wide brim for shade. Soft, light and easy to pack.", // 15
    "Roomy city backpack with padded straps and a laptop sleeve. Strong zips and several pockets.", // 16
    "Small crossbody bag with an adjustable strap. Fits your phone, wallet and keys.", // 17
    "Spacious everyday tote with long handles. Light, strong and good for shopping or school.", // 18
    "Compact sling bag that sits across the chest. Quick access to your essentials.", // 19
    "Large gym duffel with a shoulder strap and side pockets. Strong stitching for heavy loads.", // 20
    "Ash grey bomber jacket with ribbed collar, cuffs and hem. Zip front with a smooth lining.", // 21
    "Black puffer jacket that keeps you warm in cold weather. Zip pockets and a high collar.", // 22
    "Teal windbreaker with a light water-resistant shell. Easy to fold and carry.", // 23
    "Classic denim jacket with button front and chest pockets. A timeless layer.", // 24
    "Orange utility jacket with roomy pockets and a sturdy zip. Bold and practical.", // 25
    "Olive field jacket with multiple pockets and a strong front closure. Made for everyday outdoors.", // 26
    "Quilted vest that adds warmth without bulk. Easy to layer over hoodies and shirts.", // 27
    "Varsity jacket with contrast sleeves, ribbed trims and snap buttons. A sporty campus look.", // 28
    "Rain shell jacket with a hood and water-resistant fabric. Light enough to carry anywhere.", // 29
    "Fleece zip jacket that is soft and warm. Two zip pockets and a high collar.", // 30
    "Blue straight-leg jeans in sturdy denim. Classic five-pocket design with a comfortable fit.", // 31
    "Black slim jeans with a little stretch. Neat fit that works with any top.", // 32
    "Wide-leg jeans with a relaxed, roomy cut. Easy street style with a mid-rise waist.", // 33
    "Light wash jeans with a soft, faded look. Comfortable for warm days.", // 34
    "Ash cargo pants with roomy side pockets. Durable cotton with an adjustable waist.", // 35
    "Ripped skinny jeans with stretch denim for a snug fit. Bold distressed details.", // 36
    "Baggy denim with a loose, relaxed fit. A street style that is easy to wear.", // 37
    "Tapered jeans that are roomy at the top and slim at the ankle. Clean and comfortable.", // 38
    
    "Dark indigo jeans with a deep, rich wash. Smart enough to dress up or down.", // 39
    "Carpenter jeans with hammer loop and utility pockets. Tough denim made to last.", // 40
    "Graphic hoodie with a bold printed design on the front. Soft inside and warm.", // 41
    "Sherpa-lined zip hoodie that is extra warm and cosy. Perfect for cold mornings.", // 42
    "Cropped hoodie with a short, boxy cut. Pairs well with high-waisted pants.", // 43
    "Heavyweight hoodie in thick, durable fabric. Warm, solid and built to last.", // 44
    "Orange pullover hoodie with a roomy hood and front pocket. Bright and comfortable.", // 45
    "Slip-on loafer with a soft inner sole. Easy to wear, smart and comfortable.", // 46
    "Canvas low top with a flexible rubber sole. A casual lace-up for every day.", // 47
    "High top sneaker with a padded collar and strong grip. Bold, sporty and supportive.", // 48
    "Black sport runner with a cushioned sole and breathable upper. Made for movement.", // 49
    "Chunky sneaker with a thick platform sole and a bold shape. Padded for all-day comfort.", // 50
    "Heavyweight fleece hoodie with a relaxed oversized fit, drop shoulders and a soft brushed inside. Warm without feeling bulky.", //51
    "Tapered cargo joggers in soft cotton twill with two side pockets and an elastic cuff. Easy to wear all day.", //52
    "Lightweight water-resistant windbreaker with orange trim, a zip front and an adjustable hood. Good for rainy days.", //53
    "Everyday crew-neck tee in breathable 100% cotton. A clean fit that goes with everything.", //54
    "Soft ribbed sweater with a round neck and a snug cuff. Warm, stretchy and comfortable.", //55
    "Mid-wash denim jacket with a relaxed fit, button front and two chest pockets. Layers well over a hoodie.",//56
    "Cosy fleece sweatpants with a drawstring waist and side pockets. Perfect for home and casual outings.",//57
    "Six-panel cotton cap with a curved brim and an adjustable strap at the back. One size fits most.",//58
    "Midweight sweatshirt with a bold front print and a ribbed neck and hem. Soft inside, built to last.",//59
    "Strong canvas tote with a reinforced handle and an inside pocket. Big enough for daily essentials."//60
  ];
    const newGrid = document.getElementById("newGrid");

  if (newGrid) {
    const fresh = products.filter(function (p) { return p.isNew; });

    if (fresh.length === 0) {
      newGrid.innerHTML = '<p class="new-empty">No new arrivals right now. Check back soon.</p>';
    } else {
      newGrid.innerHTML = fresh.map(function (p) {
  return `
    <article class="shop-card">
      <a class="sc-img" href="product.html?id=${p.id}" aria-label="${p.name}">
        <img src="img/${p.id}.jpg" alt="${p.name}">
      </a>
      <button class="heart" data-id="${p.id}" aria-label="Save ${p.name}"><span class="new-badge">NEW</span><svg width="16" height="16"><use href="#heart"/></svg></button>
      <a class="sc-name" href="product.html?id=${p.id}">${p.name}</a>
      <p class="sc-price">${CURRENCY}${p.price}</p>
      <div class="sc-actions">
        <button type="button" class="sc-cart" data-id="${p.id}" aria-label="Add ${p.name} to cart"><i class="fa-solid fa-cart-shopping"></i></button>
        <a class="sc-buy" href="product.html?id=${p.id}">Buy</a>
      </div>
    </article>`;
}).join("");
    }
  }
  const grid = document.getElementById("shopGrid");
  // Best Sellers page: the grid has data-list="best"
  const BEST_IDS = [1, 6, 11, 16, 4, 7, 21, 22, 24, 28, 31, 33, 35, 41, 42, 44, 48, 49, 50, 25]; // 20 ids
  const list = (grid && grid.dataset.list === "best")
    ? BEST_IDS.map(id => products.find(p => p.id === id)).filter(Boolean)
    : products;

  function getCart() {
    try { return JSON.parse(localStorage.getItem("cart_" + (localStorage.getItem("currentUserId") || "guest"))) || []; } catch (e) { return []; }
  }
  function saveCart(cart) {
  localStorage.setItem(
    "cart_" + (localStorage.getItem("currentUserId") || "guest"),
    JSON.stringify(cart)
  );
  syncCartUp(cart);
  updateCartCount();
}
  function updateCartCount() {
    const total = getCart().reduce((n, i) => n + i.qty, 0);
    document.querySelectorAll(".cart-count").forEach(c => (c.textContent = total));
  }
  // ===== CART SYNC ACROSS DEVICES =====
  function syncCartUp(cart) {
    var uid = localStorage.getItem("currentUserId");
    if (!uid || !window.cloudDB) return;
    localStorage.setItem("cartDirty_" + uid, "1");
    window.cloudDB.set(uid, "cart", { items: cart })
      .then(function () { localStorage.removeItem("cartDirty_" + uid); })
      .catch(function () {});
  }

  async function syncCartDown(user) {
    if (!user || !window.cloudDB) return;
    try {
      var local = getCart();
      if (localStorage.getItem("cartDirty_" + user.uid)) {
        syncCartUp(local);
        return;
      }
      var remote = await window.cloudDB.get(user.uid, "cart");
      if (remote && Array.isArray(remote.items)) {
        if (JSON.stringify(remote.items) !== JSON.stringify(local)) {
          localStorage.setItem("cart_" + user.uid, JSON.stringify(remote.items));
          updateCartCount();
          if (document.getElementById("cartBody")) location.reload();
        }
      } else if (local.length) {
        await window.cloudDB.set(user.uid, "cart", { items: local });
      }
    } catch (e) {}
  }

  window.addEventListener("auth-ready", function (e) { syncCartDown(e.detail); });
  if (window.authUser) syncCartDown(window.authUser);
  if (grid) {
    grid.innerHTML = list.map(p => `
      <article class="shop-card">
        <a class="sc-img" href="product.html?id=${p.id}" aria-label="${p.name}">
          <img src="img/${p.id}.jpg" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">
        </a>
        <button class="heart" data-id="${p.id}" aria-label="Save ${p.name}"><svg width="16" height="16"><use href="#heart"/></svg></button>
        <a class="sc-name" href="product.html?id=${p.id}">${p.name}</a>
        <p class="sc-price">${CURRENCY}${p.price}</p>
        <div class="sc-actions">
          <button type="button" class="sc-cart" data-id="${p.id}" aria-label="Add ${p.name} to cart"><i class="fa-solid fa-cart-shopping"></i></button>
          <a class="sc-buy" href="product.html?id=${p.id}">Buy</a>
        </div>
      </article>`).join("");

    grid.addEventListener("click", e => {
      const b = e.target.closest(".sc-cart");
      if (!b) return;
      const id = Number(b.dataset.id);
      const cart = getCart();
      const item = cart.find(i => i.id === id);
      if (item) item.qty += 1; else cart.push({ id: id, qty: 1 });
      saveCart(cart);
      b.innerHTML = '<i class="fa-solid fa-check"></i>';
      setTimeout(() => (b.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'), 1200);
    });
  }
  updateCartCount();
    window.addEventListener("pageshow", updateCartCount);
    // ===== CART PAGE (only runs on account.html, where the cart table is) =====
  const cartBody = document.getElementById("cartBody");
  if (cartBody) {
    const TAX_RATE = 0;                     // 0 = hide the Tax row. For 7.5% tax use 0.075
    const CART_WHATSAPP = "2349118335328";  // orders go to this WhatsApp number

    const money = n => CURRENCY + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    const cartLines = () =>
      getCart()
        .map(item => ({ item: item, product: products.find(p => p.id === Number(item.id)) }))
        .filter(x => x.product);

    const renderCart = () => {
      const lines = cartLines();
      document.getElementById("cartEmpty").hidden = lines.length > 0;
      document.getElementById("cartBox").hidden = lines.length === 0;
      cartBody.textContent = "";
      let subtotal = 0;

      lines.forEach(({ item, product }) => {
        subtotal += product.price * item.qty;
        const tr = document.createElement("tr");

        const tdProduct = document.createElement("td");
        const info = document.createElement("div");
        info.className = "cart-info";
        const img = document.createElement("img");
        img.src = "img/" + product.id + ".jpg";
        img.alt = product.name;
        const text = document.createElement("div");
        const name = document.createElement("p");
        name.className = "cart-name";
        name.textContent = product.name;
        const price = document.createElement("small");
        price.textContent = "Price: " + money(product.price);
        const remove = document.createElement("a");
        remove.href = "#";
        remove.className = "cart-remove";
        remove.dataset.id = product.id;
        remove.textContent = "Remove";
        text.append(name, price, document.createElement("br"), remove);
        info.append(img, text);
        tdProduct.append(info);

        const tdQty = document.createElement("td");
        const input = document.createElement("input");
        input.type = "number";
        input.min = "1";
        input.value = item.qty;
        input.className = "cart-qty";
        input.dataset.id = product.id;
        tdQty.append(input);

        const tdSub = document.createElement("td");
        tdSub.className = "cart-sub";
        tdSub.textContent = money(product.price * item.qty);

        tr.append(tdProduct, tdQty, tdSub);
        cartBody.append(tr);
      });

      const tax = subtotal * TAX_RATE;
      document.getElementById("cartSubtotal").textContent = money(subtotal);
      document.getElementById("cartTax").textContent = money(tax);
      document.getElementById("cartTotal").textContent = money(subtotal + tax);
      document.getElementById("cartTaxRow").style.display = TAX_RATE === 0 ? "none" : "";
    };

    cartBody.addEventListener("click", e => {
      const rm = e.target.closest(".cart-remove");
      if (!rm) return;
      e.preventDefault();
      saveCart(getCart().filter(i => Number(i.id) !== Number(rm.dataset.id)));
      renderCart();
    });

    cartBody.addEventListener("change", e => {
      if (!e.target.classList.contains("cart-qty")) return;
      const qty = Math.max(1, parseInt(e.target.value, 10) || 1);
      const cart = getCart();
      const item = cart.find(i => Number(i.id) === Number(e.target.dataset.id));
      if (item) item.qty = qty;
      saveCart(cart);
      renderCart();
    });

    document.getElementById("checkoutBtn").addEventListener("click", e => {
      e.preventDefault();
      const lines = cartLines();
      if (!lines.length) return;
      const subtotal = lines.reduce((s, { item, product }) => s + product.price * item.qty, 0);
      const total = subtotal + subtotal * TAX_RATE;
      const rows = lines.map(({ item, product }, n) =>
        (n + 1) + ". " + product.name + " x" + item.qty + " - " + money(product.price * item.qty)
      );
      const msg = "*NEW ORDER*\n\n" + rows.join("\n") + "\n\n*TOTAL* : " + money(total);
      window.open("https://wa.me/" + CART_WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank");
    });

    renderCart();
  }
    // ===== PRODUCT PAGE (only runs on product.html) =====
  const nameEl = document.getElementById('product-name');
  if (nameEl) {
    const WHATSAPP_NUMBER = '2349118335328'; // 234 + your number without the first 0

    const params = new URLSearchParams(window.location.search);
    const product = products.find(p => p.id === parseInt(params.get('id'), 10)) || products[0];
    const id = product.id;
    const priceText = CURRENCY + product.price.toLocaleString();

    document.title = product.name;
    nameEl.textContent = product.name;
    document.getElementById('product-price').textContent = priceText;
    document.getElementById('product-details').textContent = DETAILS[id - 1];

    const img = document.getElementById('product-img');
    img.src = 'img/' + id + '.jpg';
    img.alt = product.name;

    // dropdowns: open, choose, close
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dd) {
      const btn = dd.querySelector('.dropdown-btn');
      const label = dd.querySelector('.dropdown-label');
      btn.addEventListener('click', function () {
        dropdowns.forEach(function (other) {
          if (other !== dd) other.classList.remove('open');
        });
        dd.classList.toggle('open');
      });
      dd.querySelectorAll('.dropdown-list li').forEach(function (item) {
        item.addEventListener('click', function () {
          label.textContent = item.textContent;
          dd.classList.remove('open');
        });
      });
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(function (dd) { dd.classList.remove('open'); });
      }
    });

    // Cart button: adds this product with the chosen number to your cart
    const cartBtn = document.getElementById('cart-btn');
    cartBtn.addEventListener('click', function () {
      const qtyLabel = document.querySelectorAll('.dropdown-label')[1].textContent;
      const qty = qtyLabel.startsWith('Select') ? 1 : Number(qtyLabel);
      const cart = getCart();
      const item = cart.find(i => i.id === id);
      if (item) item.qty += qty; else cart.push({ id: id, qty: qty });
      saveCart(cart);
      cartBtn.textContent = '✔ Added';
      setTimeout(function () { cartBtn.textContent = '🛒 Cart'; }, 1200);
    });

    // WhatsApp message with product, size and number filled in
    const waLink = document.getElementById('whatsapp-link');
    waLink.addEventListener('click', function () {
      const labels = document.querySelectorAll('.dropdown-label');
      const sizeText = labels[0].textContent.startsWith('Select') ? 'not chosen yet' : labels[0].textContent;
      const qtyText = labels[1].textContent.startsWith('Select') ? '1' : labels[1].textContent;
      const msg =buildPaymentMessage(
      document.getElementById('product-name').textContent,
      document.getElementById('product-price').textContent,
      sizeText,
      qtyText
    );
      waLink.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
    });
   }
})();
// Nice WhatsApp message for "Chat on WhatsApp to paste proof of payment"
function buildPaymentMessage(name, price, size, qty) {
  const line = "━━━━━━━━━━━━━━━";
  const unit = parseFloat(String(price).replace(/[^0-9.]/g, ""));
  const rows = [
    "*PRODUCT* : " + name,
    "*SIZE* : " + size,
    "*QUANTITY* : " + qty,
    "*PRICE* : " + (isNaN(unit) ? price : "$" + unit.toLocaleString("en-US"))
  ];
  if (!isNaN(unit)) rows.push("*TOTAL* : $" + (unit * Number(qty)).toLocaleString("en-US"));
  return "🧾 *PAYMENT PROOF* 🧾\n" + line + "\n\n" +
         rows.join("\n\n") + "\n\n" + line +
         "\n📎 _Sending my proof of payment now..._";
}
(function () {
  var box = document.getElementById('delivery-box');
  if (!box) return;

  var WA_NUMBER = '2349118335328'; // change to your client's WhatsApp number
  var user = null;
  var mapLink = '';

  var f = {
    name: document.getElementById('d-name'),
    phone: document.getElementById('d-phone'),
    address: document.getElementById('d-address'),
    landmark: document.getElementById('d-landmark')
  };
  var gpsStatus = document.getElementById('d-gps-status');
  var msg = document.getElementById('d-msg');

  function current() {
    return {
      name: f.name.value.trim(),
      phone: f.phone.value.trim(),
      address: f.address.value.trim(),
      landmark: f.landmark.value.trim(),
      mapLink: mapLink
    };
  }

  function fill(d) {
    f.name.value = d.name || '';
    f.phone.value = d.phone || '';
    f.address.value = d.address || '';
    f.landmark.value = d.landmark || '';
    mapLink = d.mapLink || '';
    gpsStatus.textContent = mapLink ? '📍 Location pinned' : '';
  }

  async function loadSaved(u) {
    user = u;
    if (!u) {
      msg.textContent = 'Log in to save your delivery location to your account.';
      return;
    }
    msg.textContent = '';
    var key = 'deliveryLocation_' + u.uid;
    try {
      var cached = JSON.parse(localStorage.getItem(key) || 'null');
      if (cached) fill(cached);
    } catch (e) {}
    try {
      var d = await window.cloudDB.get(u.uid, 'delivery');
      if (d) {
        fill(d);
        localStorage.setItem(key, JSON.stringify(d));
      }
    } catch (e) {}
  }

  window.addEventListener('auth-ready', function (e) { loadSaved(e.detail); });
  if (window.authUser !== undefined) loadSaved(window.authUser);

  document.getElementById('d-gps').addEventListener('click', function () {
    if (!navigator.geolocation) {
      gpsStatus.textContent = 'Your browser does not support location.';
      return;
    }
    gpsStatus.textContent = 'Getting your location...';
    navigator.geolocation.getCurrentPosition(function (pos) {
      mapLink = 'https://www.google.com/maps?q=' + pos.coords.latitude + ',' + pos.coords.longitude;
      gpsStatus.textContent = '📍 Location pinned';
    }, function () {
      gpsStatus.textContent = 'Could not get location. Allow location access or type your address.';
    }, { enableHighAccuracy: true, timeout: 10000 });
  });

  document.getElementById('d-save').addEventListener('click', async function () {
    var d = current();
    if (!d.address && !d.mapLink) { msg.textContent = 'Enter an address or pin your location first.'; return; }
    if (!user) { msg.textContent = 'Log in to save your delivery location.'; return; }
    localStorage.setItem('deliveryLocation_' + user.uid, JSON.stringify(d));
    try {
      await window.cloudDB.set(user.uid, 'delivery', d);
      msg.textContent = 'Saved ✓';
    } catch (e) {
      msg.textContent = 'Saved on this device only. Check your connection and try again.';
    }
  });

  document.getElementById('d-wa').addEventListener('click', function () {
    var d = current();
    if (!d.address && !d.mapLink) { msg.textContent = 'Enter an address or pin your location first.'; return; }
    var labels = document.querySelectorAll('.dropdown-label');
    var size = labels[0] ? labels[0].textContent.trim() : '';
    var qty = labels[1] ? labels[1].textContent.trim() : '';
    if (/^select/i.test(size)) size = 'not selected';
    if (/^select/i.test(qty)) qty = '1';
    var name = document.getElementById('product-name');
    var price = document.getElementById('product-price');
    var text =
      'Hello, I want to order:\n' +
      'Product: ' + (name ? name.textContent.trim() : '') + '\n' +
      'Price: ' + (price ? price.textContent.trim() : '') + '\n' +
      'Size: ' + size + '\n' +
      'Quantity: ' + qty + '\n\n' +
      'Deliver to:\n' +
      'Name: ' + d.name + '\n' +
      'Phone: ' + d.phone + '\n' +
      'Address: ' + d.address + '\n' +
      (d.landmark ? 'Landmark: ' + d.landmark + '\n' : '') +
      (d.mapLink ? 'Map: ' + d.mapLink : '');
    window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text), '_blank');
  });
})();