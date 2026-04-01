import Image from "next/image";

export default function HomePage() {
  const sampleLunches = [
    {
      day: "Monday",
      title: "Roasted Chicken Bowl",
      description:
        "Roasted local chicken, seasonal vegetables, and herbed quinoa with a citrus vinaigrette.",
    },
    {
      day: "Wednesday",
      title: "Rainbow Veggie Wrap",
      description:
        "Whole-grain wrap with hummus, crunchy farm-fresh vegetables, and fruit on the side.",
    },
    {
      day: "Friday",
      title: "Turkey & Sweet Potato Plate",
      description:
        "Lean turkey meatballs, roasted sweet potatoes, steamed greens, and apple slices.",
    },
  ];

  const faqItems = [
    {
      question: "Which areas are included in delivery?",
      answer:
        "The pilot currently serves families within our local district and nearby neighborhoods. Enter your address in the form and we will confirm eligibility quickly.",
    },
    {
      question: "How much does each meal cost?",
      answer:
        "Pilot pricing is shared after signup confirmation. Families pay a refundable deposit to reserve a limited spot, then choose a meal plan that fits their needs.",
    },
    {
      question: "Can I pause or cancel delivery?",
      answer:
        "Yes. We offer flexible scheduling during the pilot, including day changes and cancellations with notice. Full policy details are provided during onboarding.",
    },
  ];

  return (
    <main className="landing">
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Limited Pilot Program</p>
            <h1>Farm-Fresh Lunches Delivered to Your Door</h1>
            <p className="lead">
              Healthy meals for your child, three days a week. FuelID Lunch
              Delivery brings whole-food lunches made with local ingredients
              right to your home or preferred drop-off point.
            </p>

            <div className="hero-actions">
              <a href="#signup" className="btn btn-primary">
                Get Started
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                See How It Works
              </a>
            </div>

            <div className="schedule-card" aria-label="Delivery schedule">
              <p className="schedule-title">Weekly delivery days</p>
              <ul>
                <li>Monday</li>
                <li>Wednesday</li>
                <li>Friday</li>
              </ul>
            </div>
          </div>

          <div className="hero-images">
            <Image
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
              alt="Fresh vegetables arranged on a rustic table from a local farm."
              width={1200}
              height={800}
              sizes="(max-width: 980px) 100vw, 45vw"
              priority
            />
            <Image
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
              alt="A parent and child selecting colorful produce at an outdoor market."
              width={1200}
              height={800}
              sizes="(max-width: 980px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="container">
          <h2>How it works</h2>
          <div className="steps-grid">
            <article className="card">
              <p className="step-number">1</p>
              <h3>Sign up in minutes</h3>
              <p>
                Share your family details, delivery address, your child&apos;s
                grade, and dietary preferences through our simple mobile-friendly
                form.
              </p>
            </article>
            <article className="card">
              <p className="step-number">2</p>
              <h3>We prepare and deliver</h3>
              <p>
                Our team prepares balanced lunches using unprocessed ingredients
                from nearby farms and delivers on Monday, Wednesday, and Friday.
              </p>
            </article>
            <article className="card">
              <p className="step-number">3</p>
              <h3>Kids enjoy real food</h3>
              <p>
                Your child gets convenient, nourishing meals with fresh fruits,
                vegetables, whole grains, and lean proteins to power the day.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="menu" className="section section-alt">
        <div className="container">
          <h2>Sample menu</h2>
          <p className="section-lead">
            A look at one week of pilot lunches crafted with local, seasonal
            produce.
          </p>
          <div className="menu-grid">
            {sampleLunches.map((lunch) => (
              <article className="card menu-card" key={lunch.day}>
                <p className="menu-day">{lunch.day}</p>
                <h3>{lunch.title}</h3>
                <p>{lunch.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="section">
        <div className="container">
          <h2>Local partners</h2>
          <p className="section-lead">
            We partner with regional farms and suppliers to support our
            community and reduce food miles.
          </p>
          <div className="partners-grid">
            <article className="card partner-card">
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80"
                alt="Rows of crops at a local family farm."
                width={1000}
                height={700}
                sizes="(max-width: 980px) 100vw, 30vw"
              />
              <h3>Green Valley Farm</h3>
              <p>
                &ldquo;Supplying fresh produce picked within 24 hours of delivery
                day.&rdquo;
              </p>
            </article>
            <article className="card partner-card">
              <Image
                src="https://images.unsplash.com/photo-1444858345149-1c46ea404276?auto=format&fit=crop&w=1000&q=80"
                alt="Farmer holding a crate of freshly harvested vegetables."
                width={1000}
                height={700}
                sizes="(max-width: 980px) 100vw, 30vw"
              />
              <h3>Oak Ridge Growers</h3>
              <p>
                &ldquo;Growing nutrient-dense vegetables with sustainable soil
                practices.&rdquo;
              </p>
            </article>
            <article className="card partner-card">
              <Image
                src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1000&q=80"
                alt="Baskets of fresh fruit from a nearby orchard."
                width={1000}
                height={700}
                sizes="(max-width: 980px) 100vw, 30vw"
              />
              <h3>Riverbend Orchard Co-op</h3>
              <p>
                &ldquo;Providing seasonal fruit varieties that kids actually love to
                eat.&rdquo;
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section section-alt">
        <div className="container">
          <h2>What families are saying</h2>
          <div className="testimonial-grid">
            <blockquote className="card">
              <p>
                &ldquo;Placeholder testimonial: My child is eating more vegetables
                now, and lunch prep stress is gone.&rdquo;
              </p>
              <cite>- Parent, Grade 4 student</cite>
            </blockquote>
            <blockquote className="card">
              <p>
                &ldquo;Placeholder testimonial: A thoughtful approach to nutrition
                with practical delivery for busy families.&rdquo;
              </p>
              <cite>- Local nutrition specialist</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container faq-wrap">
          <h2>Frequently asked questions</h2>
          {faqItems.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="signup" className="section section-alt">
        <div className="container signup-wrap">
          <div>
            <h2>Join the pilot waitlist</h2>
            <p className="section-lead">
              Spots are limited for this pilot. Reserve your family&apos;s place
              today with a refundable deposit and we&apos;ll follow up with next
              steps.
            </p>
            <p className="deposit-note">
              Pilot note: Deposit amount and full terms are shared during
              confirmation.
            </p>
          </div>

          <form className="signup-form" aria-label="FuelID pilot signup form">
            <label htmlFor="parentName">Parent or guardian name</label>
            <input id="parentName" name="parentName" type="text" required />

            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="address">Home delivery address</label>
            <textarea id="address" name="address" rows={3} required />

            <label htmlFor="grade">Child&apos;s grade(s)</label>
            <input
              id="grade"
              name="grade"
              type="text"
              placeholder="Example: Grade 2 and Grade 5"
              required
            />

            <fieldset>
              <legend>Preferred delivery days</legend>
              <div className="checkbox-row">
                <label>
                  <input type="checkbox" name="days" value="Monday" /> Monday
                </label>
                <label>
                  <input type="checkbox" name="days" value="Wednesday" />{" "}
                  Wednesday
                </label>
                <label>
                  <input type="checkbox" name="days" value="Friday" /> Friday
                </label>
              </div>
            </fieldset>

            <label htmlFor="dietaryNeeds">Dietary restrictions or allergies</label>
            <textarea
              id="dietaryNeeds"
              name="dietaryNeeds"
              rows={3}
              placeholder="Tell us about allergies, sensitivities, or food preferences."
            />

            <button type="submit" className="btn btn-primary">
              Save My Pilot Spot
            </button>
          </form>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container">
          <h2>
            Join the FarmFresh pilot today and give your child the gift of
            wholesome lunches.
          </h2>
          <a href="#signup" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
