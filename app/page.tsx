import Image from "next/image";

export default function HomePage() {
  const sampleMenu = [
    {
      day: "Monday",
      meal: "Roasted chicken with seasonal veggies",
      details: "Served with quinoa salad and fresh apple slices.",
    },
    {
      day: "Wednesday",
      meal: "Turkey and hummus whole-grain wrap",
      details: "Paired with cucumber ribbons, carrot sticks, and berries.",
    },
    {
      day: "Friday",
      meal: "Baked salmon bowl",
      details: "Brown rice, steamed broccoli, and citrus yogurt dip.",
    },
    {
      day: "Bonus Rotation",
      meal: "Vegetarian grain bowl",
      details: "Lentils, roasted sweet potatoes, kale, and tahini drizzle.",
    },
  ];

  const partners = [
    {
      name: "Green Valley Farm",
      description:
        "Family-run farm supplying leafy greens and seasonal vegetables grown less than 25 miles away.",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
      alt: "Rows of green crops on a local farm at sunrise",
    },
    {
      name: "Suncrest Orchards",
      description:
        "Providing fresh apples, pears, and stone fruit picked at peak ripeness for kid-friendly lunches.",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
      alt: "Hands holding freshly harvested apples in an orchard",
    },
    {
      name: "Riverbend Poultry Co-op",
      description:
        "Supplying lean proteins from responsibly raised flocks and pasture-based farms in the region.",
      image:
        "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=800&q=80",
      alt: "Basket of farm eggs and fresh produce from local suppliers",
    },
  ];

  const faqs = [
    {
      question: "Which areas are currently included in delivery?",
      answer:
        "The pilot currently serves families in central and west district neighborhoods. Enter your address in the sign-up form and we will confirm eligibility within 24 hours.",
    },
    {
      question: "How much does each meal cost?",
      answer:
        "Pilot pricing starts at $9.75 per lunch, including delivery. Families receive transparent weekly billing with no hidden fees.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "You can pause or cancel with 48 hours notice before your next delivery day. Your pilot deposit is refundable if you cancel before your first week begins.",
    },
  ];

  return (
    <main className="page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-overlay" />
        <Image
          className="hero-image"
          src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1920&q=80"
          alt="Fresh vegetables and herbs arranged on a kitchen counter"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-content">
          <p className="eyebrow">FuelID Lunch Delivery</p>
          <h1 id="hero-title">Farm-Fresh Lunches Delivered to Your Door</h1>
          <p className="subheading">
            Healthy meals for your child, three days a week. Crafted with whole
            foods from nearby farms and delivered Monday, Wednesday, and Friday.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#signup">
              Get Started
            </a>
            <a className="btn btn-secondary" href="#how-it-works">
              Learn How It Works
            </a>
          </div>
          <div className="schedule-card" aria-label="Delivery schedule">
            <p className="schedule-title">Delivery Schedule</p>
            <div className="schedule-days" role="list">
              <span role="listitem">Mon</span>
              <span role="listitem">Wed</span>
              <span role="listitem">Fri</span>
            </div>
            <p className="schedule-note">
              Delivered to your home or preferred drop-off point.
            </p>
          </div>
        </div>
      </section>

      <section className="section intro">
        <h2>Healthy, whole-food lunches families can trust</h2>
        <p>
          Every lunch is made with unprocessed ingredients: fresh fruits,
          vegetables, whole grains, and lean proteins. We partner with local
          growers to bring better nutrition to your child while reducing food
          miles and supporting our community.
        </p>
      </section>

      <section id="how-it-works" className="section">
        <h2>How it works</h2>
        <div className="steps-grid">
          <article className="card">
            <h3>1. Sign up in minutes</h3>
            <p>
              Share your family details, address, child&apos;s grade, and
              dietary needs. Pick any combination of Monday, Wednesday, and
              Friday deliveries.
            </p>
          </article>
          <article className="card">
            <h3>2. We prepare & deliver</h3>
            <p>
              Our kitchen team prepares balanced lunches with ingredients
              sourced from local farms and delivers them fresh to your selected
              location.
            </p>
          </article>
          <article className="card">
            <h3>3. Kids enjoy real nutrition</h3>
            <p>
              Your child enjoys wholesome meals that fuel focus, growth, and
              energy throughout the week.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Sample menu</h2>
        <p className="section-subtitle">
          Rotating seasonal options designed for growing kids.
        </p>
        <div className="menu-grid">
          {sampleMenu.map((item) => (
            <article className="menu-card" key={item.day}>
              <p className="menu-day">{item.day}</p>
              <h3>{item.meal}</h3>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Local partners</h2>
        <p className="section-subtitle">
          Proudly sourced from nearby farms and sustainable suppliers.
        </p>
        <div className="partners-grid">
          {partners.map((partner) => (
            <article className="partner-card" key={partner.name}>
              <Image
                src={partner.image}
                alt={partner.alt}
                width={420}
                height={260}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials">
        <h2>What families are saying</h2>
        <div className="testimonial-grid">
          <blockquote className="quote">
            “FuelID has made weekdays so much easier. My son loves the meals
            and I feel great about the ingredients.”
            <cite>— Parent testimonial (placeholder)</cite>
          </blockquote>
          <blockquote className="quote">
            “This pilot is exactly what school-age kids need: consistent access
            to fresh, nutrient-dense food.”
            <cite>— Nutrition professional (placeholder)</cite>
          </blockquote>
        </div>
      </section>

      <section className="section faq">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="signup" className="section signup">
        <h2>Reserve your pilot spot</h2>
        <p className="section-subtitle">
          Limited spaces are available. Register early to secure your family&apos;s
          place in the pilot. A refundable deposit may be required to confirm
          enrollment.
        </p>
        <form className="signup-form" aria-label="Pilot sign-up form">
          <div className="form-row">
            <label htmlFor="name">Parent or guardian name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="form-row">
            <label htmlFor="address">Home or preferred delivery address</label>
            <input id="address" name="address" type="text" required />
          </div>
          <div className="form-row">
            <label htmlFor="grade">Child&apos;s grade(s)</label>
            <input id="grade" name="grade" type="text" required />
          </div>
          <fieldset className="form-row">
            <legend>Preferred delivery days</legend>
            <div className="checkbox-row">
              <label>
                <input type="checkbox" name="deliveryDays" value="monday" />
                Monday
              </label>
              <label>
                <input type="checkbox" name="deliveryDays" value="wednesday" />
                Wednesday
              </label>
              <label>
                <input type="checkbox" name="deliveryDays" value="friday" />
                Friday
              </label>
            </div>
          </fieldset>
          <div className="form-row">
            <label htmlFor="dietary">Dietary needs or allergies</label>
            <textarea id="dietary" name="dietary" rows={4} />
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            Join the FarmFresh pilot today
          </button>
        </form>
      </section>
    </main>
  );
}
