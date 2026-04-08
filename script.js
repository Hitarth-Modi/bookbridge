const STORAGE_KEY = "bookbridge-listings";
const PENDING_REQUESTS_KEY = "pendingRequests";
const APPROVED_SELLERS_KEY = "approvedSellers";
const ADMIN_STORAGE_KEY = "bookbridge-admin-logged-in";
const SELLER_SESSION_KEY = "bookbridge-current-seller";
const ADMIN_PASSWORD = "Hitarth@123";

function slugSegment(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "unknown";
}

function createSellerId(shopName = "", city = "") {
  return `seller-${slugSegment(shopName)}-${slugSegment(city)}`;
}

const DEFAULT_LISTINGS = [
  {
    id: "bb-001",
    storeName: "PageTurner Books",
    city: "Ahmedabad",
    bookTitle: "Rich Dad Poor Dad",
    price: 219,
    distanceKm: 2.1,
    editionYear: 2022,
    updatedHoursAgo: 2,
    category: "General",
    subcategory: "Self-help",
    verified: true,
  },
  {
    id: "bb-002",
    storeName: "StudySphere",
    city: "Ahmedabad",
    bookTitle: "Rich Dad Poor Dad",
    price: 240,
    distanceKm: 3.8,
    editionYear: 2021,
    updatedHoursAgo: 5,
    category: "General",
    subcategory: "Self-help",
    verified: true,
  },
  {
    id: "bb-003",
    storeName: "Readers Junction",
    city: "Ahmedabad",
    bookTitle: "Rich Dad Poor Dad",
    price: 255,
    distanceKm: 4.4,
    editionYear: 2020,
    updatedHoursAgo: 1,
    category: "General",
    subcategory: "Self-help",
    verified: true,
  },
  {
    id: "bb-004",
    storeName: "Campus Corner",
    city: "Ahmedabad",
    bookTitle: "Engineering Mathematics",
    price: 499,
    distanceKm: 1.6,
    editionYear: 2023,
    updatedHoursAgo: 3,
    category: "Academic",
    subcategory: "B.Tech",
    verified: true,
  },
  {
    id: "bb-005",
    storeName: "Scholars Den",
    city: "Ahmedabad",
    bookTitle: "Quantitative Aptitude for CAT",
    price: 389,
    distanceKm: 2.9,
    editionYear: 2024,
    updatedHoursAgo: 4,
    category: "Exam Prep",
    subcategory: "CAT",
    verified: true,
  },
  {
    id: "bb-006",
    storeName: "Civil Services Hub",
    city: "Ahmedabad",
    bookTitle: "UPSC Polity Handbook",
    price: 310,
    distanceKm: 5.1,
    editionYear: 2023,
    updatedHoursAgo: 6,
    category: "Exam Prep",
    subcategory: "UPSC",
    verified: true,
  },
  {
    id: "bb-007",
    storeName: "Novel Street",
    city: "Mumbai",
    bookTitle: "Atomic Habits",
    price: 299,
    distanceKm: 1.9,
    editionYear: 2022,
    updatedHoursAgo: 2,
    category: "General",
    subcategory: "Self-help",
    verified: true,
  },
  {
    id: "bb-008",
    storeName: "Commerce Point",
    city: "Ahmedabad",
    bookTitle: "Advanced Accountancy",
    price: 435,
    distanceKm: 2.7,
    editionYear: 2024,
    updatedHoursAgo: 3,
    category: "Academic",
    subcategory: "B.Com",
    verified: true,
  },
  {
    id: "bb-009",
    storeName: "Management Shelf",
    city: "Ahmedabad",
    bookTitle: "Principles of Management",
    price: 349,
    distanceKm: 3.3,
    editionYear: 2023,
    updatedHoursAgo: 2,
    category: "Academic",
    subcategory: "BBA",
    verified: true,
  },
  {
    id: "bb-010",
    storeName: "Engineers Hub",
    city: "Ahmedabad",
    bookTitle: "Machine Design Essentials",
    price: 579,
    distanceKm: 4.1,
    editionYear: 2024,
    updatedHoursAgo: 5,
    category: "Academic",
    subcategory: "B.E.",
    verified: true,
  },
  {
    id: "bb-011",
    storeName: "CaseStudy Books",
    city: "Ahmedabad",
    bookTitle: "Marketing Management",
    price: 499,
    distanceKm: 2.4,
    editionYear: 2023,
    updatedHoursAgo: 4,
    category: "Academic",
    subcategory: "MBA",
    verified: true,
  },
  {
    id: "bb-012",
    storeName: "TestPrep Lane",
    city: "Ahmedabad",
    bookTitle: "SSC Complete Guide",
    price: 325,
    distanceKm: 1.8,
    editionYear: 2024,
    updatedHoursAgo: 2,
    category: "Exam Prep",
    subcategory: "SSC",
    verified: true,
  },
  {
    id: "bb-013",
    storeName: "Banking Reads",
    city: "Ahmedabad",
    bookTitle: "RBI Grade B Phase I Manual",
    price: 455,
    distanceKm: 3,
    editionYear: 2024,
    updatedHoursAgo: 1,
    category: "Exam Prep",
    subcategory: "RBI Grade B",
    verified: true,
  },
  {
    id: "bb-014",
    storeName: "Finance & Law House",
    city: "Ahmedabad",
    bookTitle: "CA Intermediate Taxation",
    price: 620,
    distanceKm: 4.8,
    editionYear: 2024,
    updatedHoursAgo: 6,
    category: "Exam Prep",
    subcategory: "CA",
    verified: true,
  },
  {
    id: "bb-015",
    storeName: "Corporate Study Room",
    city: "Ahmedabad",
    bookTitle: "CS Executive Company Law",
    price: 540,
    distanceKm: 5.2,
    editionYear: 2023,
    updatedHoursAgo: 7,
    category: "Exam Prep",
    subcategory: "CS",
    verified: true,
  },
  {
    id: "bb-016",
    storeName: "Costing Corner",
    city: "Ahmedabad",
    bookTitle: "CMA Cost Accounting",
    price: 515,
    distanceKm: 2.2,
    editionYear: 2024,
    updatedHoursAgo: 3,
    category: "Exam Prep",
    subcategory: "CMA",
    verified: true,
  },
  {
    id: "bb-017",
    storeName: "Capital Markets Books",
    city: "Ahmedabad",
    bookTitle: "CFA Level 1 Quick Notes",
    price: 689,
    distanceKm: 6,
    editionYear: 2024,
    updatedHoursAgo: 8,
    category: "Exam Prep",
    subcategory: "CFA",
    verified: true,
  },
  {
    id: "bb-018",
    storeName: "Aptitude Arena",
    city: "Ahmedabad",
    bookTitle: "IBPS PO Master Guide",
    price: 360,
    distanceKm: 2.5,
    editionYear: 2024,
    updatedHoursAgo: 4,
    category: "Exam Prep",
    subcategory: "IBPS",
    verified: true,
  },
  {
    id: "bb-019",
    storeName: "Classic Chapters",
    city: "Ahmedabad",
    bookTitle: "The Alchemist",
    price: 210,
    distanceKm: 1.9,
    editionYear: 2022,
    updatedHoursAgo: 2,
    category: "General",
    subcategory: "Fiction",
    verified: true,
  },
  {
    id: "bb-020",
    storeName: "Insight Books",
    city: "Ahmedabad",
    bookTitle: "Sapiens",
    price: 399,
    distanceKm: 3.6,
    editionYear: 2021,
    updatedHoursAgo: 5,
    category: "General",
    subcategory: "Non-Fiction",
    verified: true,
  },
].map((listing) => ({
  ...listing,
  sellerId: createSellerId(listing.storeName, listing.city),
}));

function normalizeListing(listing) {
  return {
    ...listing,
    sellerId:
      listing.sellerId ||
      createSellerId(listing.storeName, listing.city),
    price: Number(listing.price) || 0,
    distanceKm: Number(listing.distanceKm) || 0,
    editionYear: Number(listing.editionYear) || new Date().getFullYear(),
    updatedHoursAgo: Number(listing.updatedHoursAgo) || 1,
    category: listing.category || "General",
    subcategory: listing.subcategory || "General",
    verified: listing.verified !== false,
  };
}

function normalizeApprovedSeller(seller) {
  return {
    ...seller,
    id: seller.id || createSellerId(seller.shopName, seller.city),
    shopName: seller.shopName || "",
    city: seller.city || "",
    password: seller.password || "",
  };
}

function normalizePendingRequest(request) {
  return {
    ...request,
    id:
      request.id ||
      `req-${createSellerId(request.storeName, request.city)}-${slugSegment(
        request.bookTitle
      )}-${Number(request.price) || 0}`,
    sellerId:
      request.sellerId || createSellerId(request.storeName, request.city),
    storeName: request.storeName || "",
    city: request.city || "",
    bookTitle: request.bookTitle || "",
    price: Number(request.price) || 0,
    sellerPassword: request.sellerPassword || "",
  };
}

function listingBelongsToSeller(listing, seller) {
  if (!listing || !seller) {
    return false;
  }

  if (listing.sellerId && seller.id) {
    return listing.sellerId === seller.id;
  }

  return (
    slugify(listing.storeName) === slugify(seller.shopName) &&
    slugify(listing.city) === slugify(seller.city)
  );
}

function seedListings() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_LISTINGS));
  }
}

function getListings() {
  seedListings();
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const source = Array.isArray(parsed) ? parsed : DEFAULT_LISTINGS.slice();
    const normalized = source.map(normalizeListing);

    if (JSON.stringify(source) !== JSON.stringify(normalized)) {
      saveListings(normalized);
    }

    return normalized;
  } catch (error) {
    return DEFAULT_LISTINGS.slice();
  }
}

function saveListings(listings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(listings));
}

function getPendingRequests() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PENDING_REQUESTS_KEY));
    const source = Array.isArray(parsed) ? parsed : [];
    const normalized = source.map(normalizePendingRequest);

    if (JSON.stringify(source) !== JSON.stringify(normalized)) {
      savePendingRequests(normalized);
    }

    return normalized;
  } catch (error) {
    return [];
  }
}

function savePendingRequests(requests) {
  localStorage.setItem(PENDING_REQUESTS_KEY, JSON.stringify(requests));
}

function getApprovedSellers() {
  try {
    const parsed = JSON.parse(localStorage.getItem(APPROVED_SELLERS_KEY));
    const source = Array.isArray(parsed) ? parsed : [];
    const normalized = source.map(normalizeApprovedSeller);

    if (JSON.stringify(source) !== JSON.stringify(normalized)) {
      saveApprovedSellers(normalized);
    }

    return normalized;
  } catch (error) {
    return [];
  }
}

function saveApprovedSellers(sellers) {
  localStorage.setItem(APPROVED_SELLERS_KEY, JSON.stringify(sellers));
}

function getCurrentSeller() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SELLER_SESSION_KEY));
    return parsed && typeof parsed === "object"
      ? normalizeApprovedSeller(parsed)
      : null;
  } catch (error) {
    return null;
  }
}

function setCurrentSeller(seller) {
  localStorage.setItem(
    SELLER_SESSION_KEY,
    JSON.stringify(normalizeApprovedSeller(seller))
  );
  updateSellerNavLinks();
}

function clearCurrentSeller() {
  localStorage.removeItem(SELLER_SESSION_KEY);
  updateSellerNavLinks();
}

function isAdminLoggedIn() {
  return localStorage.getItem(ADMIN_STORAGE_KEY) === "true";
}

function setAdminLoggedIn(value) {
  localStorage.setItem(ADMIN_STORAGE_KEY, value ? "true" : "false");
  updateAdminNavLinks();
}

function formatPrice(value) {
  return `Rs ${Number(value).toLocaleString("en-IN")}`;
}

function formatUpdated(hours) {
  return `${hours} hour${hours === 1 ? "" : "s"} ago`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entityMap[character];
  });
}

function slugify(value) {
  return String(value).trim().toLowerCase();
}

function updateAdminNavLinks() {
  const loggedIn = isAdminLoggedIn();
  document.querySelectorAll("[data-admin-nav-link]").forEach((link) => {
    link.textContent = loggedIn ? "Admin Panel" : "Admin Login";
    link.href = "admin.html";
  });
}

function updateSellerNavLinks() {
  const currentSeller = getCurrentSeller();
  document.querySelectorAll("[data-seller-nav-link]").forEach((link) => {
    link.textContent = currentSeller ? "Seller Dashboard" : "Seller Login";
    link.href = currentSeller ? "seller-dashboard.html" : "seller-login.html";
  });
}

function initializeResponsiveNav() {
  const headers = document.querySelectorAll(".site-header");

  headers.forEach((header, index) => {
    const toggle = header.querySelector(".nav-toggle");
    const nav = header.querySelector(".site-nav");

    if (!toggle || !nav) {
      return;
    }

    const navId = nav.id || `site-nav-${index + 1}`;
    nav.id = navId;
    toggle.setAttribute("aria-controls", navId);

    const closeMenu = () => {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const shouldOpen = !header.classList.contains("nav-open");

      header.classList.toggle("nav-open", shouldOpen);
      toggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (!header.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  });
}

function buildResultsUrl(filters = {}) {
  const params = new URLSearchParams();
  const {
    book = "",
    city = "",
    sort = "price",
    category = "",
    subcategory = "",
  } = filters;

  if (book.trim()) {
    params.set("book", book.trim());
  }

  if (city.trim()) {
    params.set("city", city.trim());
  }

  if (category.trim()) {
    params.set("category", category.trim());
  }

  if (subcategory.trim()) {
    params.set("subcategory", subcategory.trim());
  }

  params.set("sort", sort);
  return `results.html?${params.toString()}`;
}

function filterListings(listings, filters = {}) {
  const {
    book = "",
    city = "",
    category = "",
    subcategory = "",
  } = filters;

  const bookTerm = slugify(book);
  const cityTerm = slugify(city);
  const categoryTerm = slugify(category);
  const subcategoryTerm = slugify(subcategory);

  return listings.filter((listing) => {
    const bookMatches = !bookTerm || slugify(listing.bookTitle).includes(bookTerm);
    const cityMatches = !cityTerm || slugify(listing.city) === cityTerm;
    const categoryMatches =
      !categoryTerm || slugify(listing.category) === categoryTerm;
    const subcategoryMatches =
      !subcategoryTerm || slugify(listing.subcategory) === subcategoryTerm;

    return bookMatches && cityMatches && categoryMatches && subcategoryMatches;
  });
}

function sortListings(listings, sortBy) {
  const sorted = [...listings];
  sorted.sort((a, b) => {
    if (sortBy === "distance") {
      return a.distanceKm - b.distanceKm || a.price - b.price;
    }
    return a.price - b.price || a.distanceKm - b.distanceKm;
  });
  return sorted;
}

function createListingCard(listing) {
  const storeName = escapeHtml(listing.storeName);
  const bookTitle = escapeHtml(listing.bookTitle);
  const city = escapeHtml(listing.city);
  const category = escapeHtml(listing.category);
  const subcategory = escapeHtml(listing.subcategory || "General");

  return `
    <article class="listing-card">
      <div>
        <div class="listing-header">
          <h3>${storeName}</h3>
          <span class="verified-badge">Verified Store</span>
          <span class="update-chip">Last updated: ${formatUpdated(listing.updatedHoursAgo)}</span>
        </div>
        <div class="listing-meta">
          <div>
            <strong>Book</strong>
            <span>${bookTitle}</span>
          </div>
          <div>
            <strong>Distance</strong>
            <span>${listing.distanceKm.toFixed(1)} km</span>
          </div>
          <div>
            <strong>Edition</strong>
            <span>${listing.editionYear}</span>
          </div>
          <div>
            <strong>City</strong>
            <span>${city}</span>
          </div>
        </div>
        <p class="listing-footer">${category} • ${subcategory} inventory</p>
      </div>
      <div class="listing-price-box">
        <div class="listing-price">
          <span>Book price</span>
          <strong>${formatPrice(listing.price)}</strong>
        </div>
        <button class="reserve-button" type="button" data-reserve-id="${listing.id}">
          Reserve
        </button>
      </div>
    </article>
  `;
}

function createAdminListingCard(listing) {
  const storeName = escapeHtml(listing.storeName);
  const bookTitle = escapeHtml(listing.bookTitle);
  const city = escapeHtml(listing.city);
  const category = escapeHtml(listing.category);
  const subcategory = escapeHtml(listing.subcategory || "General");

  return `
    <article class="listing-card admin-listing-card">
      <div>
        <div class="listing-header">
          <h3>${storeName}</h3>
          <span class="verified-badge">Verified Store</span>
        </div>
        <div class="listing-meta">
          <div>
            <strong>Book</strong>
            <span>${bookTitle}</span>
          </div>
          <div>
            <strong>Price</strong>
            <span>${formatPrice(listing.price)}</span>
          </div>
          <div>
            <strong>City</strong>
            <span>${city}</span>
          </div>
          <div>
            <strong>Category</strong>
            <span>${category} / ${subcategory}</span>
          </div>
        </div>
        <p class="listing-footer">Distance ${listing.distanceKm.toFixed(1)} km • Edition ${listing.editionYear}</p>
      </div>
      <div class="listing-price-box admin-actions">
        <button class="secondary-link admin-action-button" type="button" data-admin-edit="${listing.id}">
          Edit Listing
        </button>
        <button class="danger-button" type="button" data-admin-delete="${listing.id}">
          Delete Listing
        </button>
      </div>
    </article>
  `;
}

function createPendingRequestCard(request) {
  const storeName = escapeHtml(request.storeName);
  const bookTitle = escapeHtml(request.bookTitle);
  const city = escapeHtml(request.city);

  return `
    <article class="listing-card admin-listing-card">
      <div>
        <div class="listing-header">
          <h3>${storeName}</h3>
          <span class="update-chip">Pending Request</span>
        </div>
        <div class="listing-meta">
          <div>
            <strong>Book</strong>
            <span>${bookTitle}</span>
          </div>
          <div>
            <strong>Price</strong>
            <span>${formatPrice(request.price)}</span>
          </div>
          <div>
            <strong>City</strong>
            <span>${city}</span>
          </div>
        </div>
        <p class="listing-footer">Awaiting admin approval</p>
      </div>
      <div class="listing-price-box admin-actions">
        <button class="secondary-link admin-action-button" type="button" data-admin-approve="${request.id}">
          Approve
        </button>
        <button class="danger-button" type="button" data-admin-reject="${request.id}">
          Reject
        </button>
      </div>
    </article>
  `;
}

function createSellerDashboardCard(listing) {
  const bookTitle = escapeHtml(listing.bookTitle);
  const city = escapeHtml(listing.city);
  const category = escapeHtml(listing.category || "General");
  const subcategory = escapeHtml(listing.subcategory || "General");

  return `
    <article class="listing-card admin-listing-card">
      <div>
        <div class="listing-header">
          <h3>${bookTitle}</h3>
          <span class="verified-badge">Your Listing</span>
        </div>
        <div class="listing-meta">
          <div>
            <strong>Price</strong>
            <span>${formatPrice(listing.price)}</span>
          </div>
          <div>
            <strong>City</strong>
            <span>${city}</span>
          </div>
          <div>
            <strong>Category</strong>
            <span>${category} / ${subcategory}</span>
          </div>
          <div>
            <strong>Edition</strong>
            <span>${listing.editionYear}</span>
          </div>
        </div>
        <p class="listing-footer">Distance ${listing.distanceKm.toFixed(1)} km • Verified store listing</p>
      </div>
      <div class="listing-price-box admin-actions">
        <button class="secondary-link admin-action-button" type="button" data-seller-edit="${listing.id}">
          Edit Price
        </button>
        <button class="danger-button" type="button" data-seller-delete="${listing.id}">
          Delete Book
        </button>
      </div>
    </article>
  `;
}

function showNotice(element, message, variant = "error") {
  if (!element) return;
  element.textContent = message;
  element.hidden = !message;
  element.classList.toggle("error-banner", variant === "error");
  element.classList.toggle("success-banner", variant !== "error");
}

function deleteListing(id) {
  if (!isAdminLoggedIn()) {
    return false;
  }

  const nextListings = getListings().filter((listing) => listing.id !== id);
  saveListings(nextListings);
  return true;
}

function editListing(id, updates = {}) {
  if (!isAdminLoggedIn()) {
    return false;
  }

  const nextListings = getListings().map((listing) => {
    if (listing.id !== id) {
      return listing;
    }

    return {
      ...listing,
      bookTitle: updates.bookTitle ?? listing.bookTitle,
      price: updates.price ?? listing.price,
    };
  });

  saveListings(nextListings);
  return true;
}

function getSellerListings(seller) {
  if (!seller) {
    return [];
  }

  return getListings().filter((listing) => listingBelongsToSeller(listing, seller));
}

function deleteSellerListing(id) {
  const currentSeller = getCurrentSeller();
  if (!currentSeller) {
    return false;
  }

  const listing = getListings().find((item) => item.id === id);
  if (!listing) {
    return false;
  }

  if (!listingBelongsToSeller(listing, currentSeller)) {
    return false;
  }

  const nextListings = getListings().filter((item) => item.id !== id);
  saveListings(nextListings);
  return true;
}

function editSellerListing(id, updates = {}) {
  const currentSeller = getCurrentSeller();
  if (!currentSeller) {
    return false;
  }

  let didUpdate = false;
  const nextListings = getListings().map((listing) => {
    if (listing.id !== id || !listingBelongsToSeller(listing, currentSeller)) {
      return listing;
    }

    didUpdate = true;
    return {
      ...listing,
      price: updates.price ?? listing.price,
    };
  });

  if (!didUpdate) {
    return false;
  }

  saveListings(nextListings);
  return true;
}

function addSellerListing(bookTitle, price) {
  const currentSeller = getCurrentSeller();
  if (!currentSeller) {
    return false;
  }

  const listings = getListings();
  listings.unshift({
    id: `bb-${Date.now()}`,
    sellerId: currentSeller.id,
    storeName: currentSeller.shopName,
    city: currentSeller.city,
    bookTitle,
    price,
    distanceKm: Number((Math.random() * 4 + 1).toFixed(1)),
    editionYear: new Date().getFullYear(),
    updatedHoursAgo: 1,
    category: "General",
    subcategory: "Seller Upload",
    verified: true,
  });
  saveListings(listings);
  return true;
}

function approveRequest(id) {
  if (!isAdminLoggedIn()) {
    return false;
  }

  const requests = getPendingRequests();
  const request = requests.find((item) => item.id === id);

  if (!request) {
    return false;
  }

  const approvedSellers = getApprovedSellers();
  const existingSeller = approvedSellers.find((seller) => {
    return seller.id === request.sellerId;
  });

  if (!existingSeller) {
    approvedSellers.push({
      id: request.sellerId,
      shopName: request.storeName,
      city: request.city,
      password: request.sellerPassword,
    });
    saveApprovedSellers(approvedSellers);
  }

  const newListing = {
    id: `bb-${Date.now()}`,
    sellerId: request.sellerId,
    storeName: request.storeName,
    city: request.city,
    bookTitle: request.bookTitle,
    price: Number(request.price),
    distanceKm: Number((Math.random() * 4 + 1).toFixed(1)),
    editionYear: new Date().getFullYear(),
    updatedHoursAgo: 1,
    category: "General",
    subcategory: "New listing",
    verified: true,
  };

  const listings = getListings();
  listings.unshift(newListing);
  saveListings(listings);
  savePendingRequests(requests.filter((item) => item.id !== id));
  return true;
}

function rejectRequest(id) {
  if (!isAdminLoggedIn()) {
    return false;
  }

  const requests = getPendingRequests();
  savePendingRequests(requests.filter((item) => item.id !== id));
  return true;
}

function initializeHomePage() {
  const searchForm = document.getElementById("homeSearchForm");
  const categoryButtons = document.querySelectorAll("[data-category-link]");

  if (!searchForm) return;

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const destination = button.dataset.categoryLink;
      if (destination) {
        window.location.href = destination;
      }
    });
  });

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const book = document.getElementById("homeBookInput").value;
    const city = document.getElementById("homeCityInput").value;
    window.location.href = buildResultsUrl({ book, city, sort: "price" });
  });
}

function buildResultsHeading(filters = {}) {
  const {
    book = "",
    city = "",
    category = "",
    subcategory = "",
  } = filters;

  if (book && city) {
    return `${book} in ${city}`;
  }

  if (book) {
    return `${book} in all cities`;
  }

  if (subcategory && category && city) {
    return `${subcategory} • ${category} in ${city}`;
  }

  if (subcategory && category) {
    return `${subcategory} • ${category} in all cities`;
  }

  if (category && city) {
    return `${category} in ${city}`;
  }

  if (category) {
    return `${category} in all cities`;
  }

  return city ? `All books in ${city}` : "All books in all cities";
}

function initializeResultsPage() {
  const grid = document.getElementById("resultsGrid");
  const emptyState = document.getElementById("emptyState");
  const searchForm = document.getElementById("resultsSearchForm");
  const bookInput = document.getElementById("resultsBookInput");
  const cityInput = document.getElementById("resultsCityInput");
  const sortSelect = document.getElementById("sortSelect");
  const resultsTitle = document.getElementById("resultsTitle");
  const resultsCount = document.getElementById("resultsCount");

  if (!grid || !searchForm) return;

  const params = new URLSearchParams(window.location.search);
  const hasCategoryBrowse = params.has("category") || params.has("subcategory");
  const initialBook = params.get("book") || (hasCategoryBrowse ? "" : "Rich Dad Poor Dad");
  const initialCity = params.get("city") || (hasCategoryBrowse ? "" : "Ahmedabad");
  const initialSort = params.get("sort") || "price";
  const initialCategory = params.get("category") || "";
  const initialSubcategory = params.get("subcategory") || "";

  bookInput.value = initialBook;
  cityInput.value = initialCity;
  sortSelect.value = initialSort;

  function render() {
    const currentBook = bookInput.value.trim();
    const currentCity = cityInput.value.trim();
    const sortBy = sortSelect.value;
    const filters = {
      book: currentBook,
      city: currentCity,
      category: initialCategory,
      subcategory: initialSubcategory,
    };
    const matches = sortListings(
      filterListings(getListings(), filters),
      sortBy
    );

    resultsTitle.textContent = buildResultsHeading(filters);
    resultsCount.textContent = `${matches.length} store${matches.length === 1 ? "" : "s"}`;

    if (!matches.length) {
      grid.innerHTML = "";
      emptyState.hidden = false;
      return;
    }

    emptyState.hidden = true;
    grid.innerHTML = matches.map(createListingCard).join("");
  }

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nextUrl = buildResultsUrl({
      book: bookInput.value,
      city: cityInput.value,
      sort: sortSelect.value,
      category: initialCategory,
      subcategory: initialSubcategory,
    });
    window.history.replaceState({}, "", nextUrl);
    render();
  });

  sortSelect.addEventListener("change", () => {
    const nextUrl = buildResultsUrl({
      book: bookInput.value,
      city: cityInput.value,
      sort: sortSelect.value,
      category: initialCategory,
      subcategory: initialSubcategory,
    });
    window.history.replaceState({}, "", nextUrl);
    render();
  });

  grid.addEventListener("click", (event) => {
    const reserveButton = event.target.closest("[data-reserve-id]");
    if (!reserveButton) return;

    const listingId = reserveButton.dataset.reserveId;
    openReservationModal(listingId);
  });

  render();
}

function openReservationModal(listingId) {
  const modal = document.getElementById("reservationModal");
  const title = document.getElementById("reservationTitle");
  const storeText = document.getElementById("reservationStoreText");
  const hiddenInput = document.getElementById("reservationListingId");
  const successBanner = document.getElementById("reservationSuccess");
  const reservationForm = document.getElementById("reservationForm");
  const listing = getListings().find((item) => item.id === listingId);

  if (!modal || !listing) return;

  title.textContent = listing.bookTitle;
  storeText.textContent = `${listing.storeName} • ${listing.city} • ${formatPrice(listing.price)}`;
  hiddenInput.value = listing.id;
  successBanner.hidden = true;
  reservationForm.reset();
  hiddenInput.value = listing.id;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeReservationModal() {
  const modal = document.getElementById("reservationModal");
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
}

function initializeReservationModal() {
  const modal = document.getElementById("reservationModal");
  const closeButton = document.getElementById("closeReservationModal");
  const form = document.getElementById("reservationForm");
  const successBanner = document.getElementById("reservationSuccess");

  if (!modal || !form) return;

  closeButton.addEventListener("click", closeReservationModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeReservationModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeReservationModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    successBanner.hidden = false;
    form.reset();

    window.setTimeout(() => {
      closeReservationModal();
      successBanner.hidden = true;
    }, 1800);
  });
}

function initializeSellerPage() {
  const sellerForm = document.getElementById("sellerForm");
  const successBanner = document.getElementById("sellerSuccess");

  if (!sellerForm) return;

  sellerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const storeName = document.getElementById("shopName").value.trim();
    const city = document.getElementById("shopCity").value.trim();
    const bookTitle = document.getElementById("bookName").value.trim();
    const price = Number(document.getElementById("bookPrice").value);
    const sellerPassword = document.getElementById("sellerPassword").value;

    const newRequest = {
      id: `req-${Date.now()}`,
      sellerId: createSellerId(storeName, city),
      storeName,
      city,
      bookTitle,
      price,
      sellerPassword,
    };

    const requests = getPendingRequests();
    requests.unshift(newRequest);
    savePendingRequests(requests);
    successBanner.hidden = false;
    sellerForm.reset();

    window.setTimeout(() => {
      successBanner.hidden = true;
    }, 2200);
  });
}

function initializeSellerLoginPage() {
  const loginForm = document.getElementById("sellerLoginForm");
  const errorBanner = document.getElementById("sellerLoginError");

  if (!loginForm) return;

  if (getCurrentSeller()) {
    window.location.href = "seller-dashboard.html";
    return;
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const shopName = document.getElementById("sellerLoginShopName").value.trim();
    const password = document.getElementById("sellerLoginPassword").value;
    const approvedSeller = getApprovedSellers().find((seller) => {
      return (
        slugify(seller.shopName) === slugify(shopName) &&
        seller.password === password
      );
    });

    if (!approvedSeller) {
      showNotice(
        errorBanner,
        "Only approved sellers can log in with the correct shop name and password.",
        "error"
      );
      return;
    }

    setCurrentSeller(approvedSeller);
    loginForm.reset();
    window.location.href = "seller-dashboard.html";
  });
}

function toggleModal(modal, shouldOpen) {
  if (!modal) return;
  modal.hidden = !shouldOpen;
  document.body.style.overflow = shouldOpen ? "hidden" : "";
}

function initializeSellerDashboardPage() {
  const currentSeller = getCurrentSeller();
  if (!currentSeller) {
    window.location.href = "seller-login.html";
    return;
  }

  const title = document.getElementById("sellerDashboardTitle");
  const count = document.getElementById("sellerDashboardCount");
  const grid = document.getElementById("sellerListingsGrid");
  const addButton = document.getElementById("sellerAddBookButton");
  const logoutButton = document.getElementById("sellerLogoutButton");
  const addModal = document.getElementById("sellerAddModal");
  const editModal = document.getElementById("sellerEditModal");
  const closeAddButton = document.getElementById("closeSellerAddModal");
  const closeEditButton = document.getElementById("closeSellerEditModal");
  const addForm = document.getElementById("sellerAddForm");
  const editForm = document.getElementById("sellerEditForm");

  if (!title || !count || !grid || !addButton || !logoutButton || !addModal || !editModal) {
    return;
  }

  title.textContent = `${currentSeller.shopName} Dashboard`;

  function renderSellerDashboard() {
    const listings = getSellerListings(currentSeller);
    count.textContent = `${listings.length} book${listings.length === 1 ? "" : "s"}`;
    grid.innerHTML = listings.length
      ? listings.map(createSellerDashboardCard).join("")
      : `
        <div class="empty-state">
          <h3>No books uploaded yet</h3>
          <p>Add a new book to start managing live listings for your store.</p>
        </div>
      `;
  }

  addButton.addEventListener("click", () => {
    showNotice(document.getElementById("sellerAddError"), "", "error");
    addForm.reset();
    toggleModal(addModal, true);
  });

  closeAddButton.addEventListener("click", () => toggleModal(addModal, false));
  closeEditButton.addEventListener("click", () => toggleModal(editModal, false));

  addModal.addEventListener("click", (event) => {
    if (event.target === addModal) {
      toggleModal(addModal, false);
    }
  });

  editModal.addEventListener("click", (event) => {
    if (event.target === editModal) {
      toggleModal(editModal, false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!addModal.hidden) {
        toggleModal(addModal, false);
      }
      if (!editModal.hidden) {
        toggleModal(editModal, false);
      }
    }
  });

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const bookTitle = document.getElementById("sellerAddBookName").value.trim();
    const price = Number(document.getElementById("sellerAddPrice").value);

    if (!bookTitle || !price) {
      showNotice(document.getElementById("sellerAddError"), "Enter a valid book name and price.", "error");
      return;
    }

    addSellerListing(bookTitle, price);
    toggleModal(addModal, false);
    renderSellerDashboard();
  });

  grid.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-seller-edit]");
    const deleteButton = event.target.closest("[data-seller-delete]");

    if (editButton) {
      const listing = getSellerListings(currentSeller).find((item) => item.id === editButton.dataset.sellerEdit);
      if (!listing) return;
      document.getElementById("sellerEditListingId").value = listing.id;
      document.getElementById("sellerEditPrice").value = listing.price;
      showNotice(document.getElementById("sellerEditError"), "", "error");
      toggleModal(editModal, true);
      return;
    }

    if (deleteButton) {
      const deleted = deleteSellerListing(deleteButton.dataset.sellerDelete);
      if (deleted) {
        renderSellerDashboard();
      }
    }
  });

  editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const listingId = document.getElementById("sellerEditListingId").value;
    const price = Number(document.getElementById("sellerEditPrice").value);

    if (!price) {
      showNotice(document.getElementById("sellerEditError"), "Enter a valid price.", "error");
      return;
    }

    const updated = editSellerListing(listingId, { price });
    if (updated) {
      toggleModal(editModal, false);
      renderSellerDashboard();
    }
  });

  logoutButton.addEventListener("click", () => {
    clearCurrentSeller();
    window.location.href = "seller-login.html";
  });

  renderSellerDashboard();
}

function closeAdminEditModal() {
  const modal = document.getElementById("adminEditModal");
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
}

function openAdminEditModal(listingId) {
  if (!isAdminLoggedIn()) return;

  const modal = document.getElementById("adminEditModal");
  const listing = getListings().find((item) => item.id === listingId);

  if (!modal || !listing) return;

  document.getElementById("adminEditListingId").value = listing.id;
  document.getElementById("adminEditBookName").value = listing.bookTitle;
  document.getElementById("adminEditPrice").value = listing.price;
  showNotice(document.getElementById("adminEditError"), "", "error");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function initializeAdminPage() {
  const loginCard = document.getElementById("adminLoginCard");
  const loginForm = document.getElementById("adminLoginForm");
  const passwordInput = document.getElementById("adminPassword");
  const errorBanner = document.getElementById("adminError");
  const panelSection = document.getElementById("adminPanelSection");
  const pendingSection = document.getElementById("adminPendingSection");
  const listingsGrid = document.getElementById("adminListingsGrid");
  const pendingGrid = document.getElementById("adminPendingGrid");
  const listingCount = document.getElementById("adminListingCount");
  const pendingCount = document.getElementById("adminPendingCount");
  const logoutButton = document.getElementById("adminLogoutButton");
  const editModal = document.getElementById("adminEditModal");
  const closeEditButton = document.getElementById("closeAdminEditModal");
  const editForm = document.getElementById("adminEditForm");

  if (!loginCard || !loginForm || !panelSection || !listingsGrid || !pendingSection || !pendingGrid) return;

  function renderAdminPanel() {
    if (!isAdminLoggedIn()) {
      loginCard.hidden = false;
      panelSection.hidden = true;
      pendingSection.hidden = true;
      return;
    }

    const listings = getListings();
    const pendingRequests = getPendingRequests();
    loginCard.hidden = true;
    panelSection.hidden = false;
    pendingSection.hidden = false;
    listingCount.textContent = `${listings.length} listing${listings.length === 1 ? "" : "s"}`;
    pendingCount.textContent = `${pendingRequests.length} request${pendingRequests.length === 1 ? "" : "s"}`;
    listingsGrid.innerHTML = listings.length
      ? listings.map(createAdminListingCard).join("")
      : `
        <div class="empty-state">
          <h3>No listings available</h3>
          <p>New seller submissions will appear here as soon as they are added.</p>
        </div>
      `;

    pendingGrid.innerHTML = pendingRequests.length
      ? pendingRequests.map(createPendingRequestCard).join("")
      : `
        <div class="empty-state">
          <h3>No pending requests</h3>
          <p>New seller submission requests will appear here for approval.</p>
        </div>
      `;
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (passwordInput.value !== ADMIN_PASSWORD) {
      showNotice(errorBanner, "Incorrect password. Please try again.", "error");
      return;
    }

    setAdminLoggedIn(true);
    showNotice(errorBanner, "", "error");
    loginForm.reset();
    renderAdminPanel();
  });

  listingsGrid.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-admin-delete]");
    const editButton = event.target.closest("[data-admin-edit]");

    if (deleteButton) {
      const deleted = deleteListing(deleteButton.dataset.adminDelete);
      if (deleted) {
        renderAdminPanel();
      }
      return;
    }

    if (editButton) {
      openAdminEditModal(editButton.dataset.adminEdit);
    }
  });

  pendingGrid.addEventListener("click", (event) => {
    const approveButton = event.target.closest("[data-admin-approve]");
    const rejectButton = event.target.closest("[data-admin-reject]");

    if (approveButton) {
      const approved = approveRequest(approveButton.dataset.adminApprove);
      if (approved) {
        renderAdminPanel();
      }
      return;
    }

    if (rejectButton) {
      const rejected = rejectRequest(rejectButton.dataset.adminReject);
      if (rejected) {
        renderAdminPanel();
      }
    }
  });

  logoutButton.addEventListener("click", () => {
    setAdminLoggedIn(false);
    closeAdminEditModal();
    renderAdminPanel();
  });

  closeEditButton.addEventListener("click", closeAdminEditModal);

  editModal.addEventListener("click", (event) => {
    if (event.target === editModal) {
      closeAdminEditModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && editModal && !editModal.hidden) {
      closeAdminEditModal();
    }
  });

  editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const listingId = document.getElementById("adminEditListingId").value;
    const bookTitle = document.getElementById("adminEditBookName").value.trim();
    const price = Number(document.getElementById("adminEditPrice").value);

    if (!bookTitle || !price) {
      showNotice(
        document.getElementById("adminEditError"),
        "Enter a valid book name and price.",
        "error"
      );
      return;
    }

    const updated = editListing(listingId, { bookTitle, price });
    if (updated) {
      closeAdminEditModal();
      renderAdminPanel();
    }
  });

  renderAdminPanel();
}

function initializeApp() {
  seedListings();
  updateAdminNavLinks();
  updateSellerNavLinks();
  initializeResponsiveNav();

  const page = document.body.dataset.page;

  if (page === "home") {
    initializeHomePage();
  }

  if (page === "results") {
    initializeResultsPage();
    initializeReservationModal();
  }

  if (page === "seller") {
    initializeSellerPage();
  }

  if (page === "admin") {
    initializeAdminPage();
  }

  if (page === "seller-login") {
    initializeSellerLoginPage();
  }

  if (page === "seller-dashboard") {
    initializeSellerDashboardPage();
  }
}

document.addEventListener("DOMContentLoaded", initializeApp);
