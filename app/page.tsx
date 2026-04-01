import Image from "next/image";

export default function HomePage() {
  const sampleLunches = [
    {
      day: "Monday",
      title: "Healthy Chicken Burrito Bowls",
      description:
        "A balanced bowl with lean chicken, rice, veggies, and flavorful toppings for a hearty start to the week.",
      recipeUrl: "https://www.momables.com/healthy-chicken-burrito-bowls/",
      imageUrl:
        "https://www.momables.com/wp-content/uploads/2019/02/chicken-burrito-bowls_INSTA.jpg",
      imageAlt:
        "Chicken burrito bowl lunch with fruit and carrots in a divided lunch container.",
    },
    {
      day: "Tuesday",
      title: "Creamy Sun-Dried Tomato Chicken and Pasta",
      description:
        "A kid-friendly pasta option with chicken and a creamy sun-dried tomato sauce for lasting energy.",
      recipeUrl:
        "https://www.momables.com/creamy-sun-dried-tomato-chicken-and-pasta-skillet-meal/",
      imageUrl:
        "https://www.momables.com/wp-content/uploads/2015/04/Sun-dried-tomato-pasta-thermos_WP-featured.jpg",
      imageAlt:
        "Creamy sun-dried tomato chicken pasta served in a thermos container.",
    },
    {
      day: "Wednesday",
      title: "Chicken Apple Grilled Sandwich",
      description:
        "A warm whole-food sandwich pairing chicken and apple for a satisfying sweet-savory lunch.",
      recipeUrl:
        "https://www.momables.com/chicken-apple-grilled-sandwich/",
      imageUrl:
        "https://www.momables.com/wp-content/uploads/2022/07/chicken-apple-grilled-sandwich_WP-feature.jpg",
      imageAlt:
        "Chicken apple grilled sandwich meal with grapes and almonds in a lunch container.",
    },
  ];

  const faqItems = [
    {
      question: "Which areas are included in delivery?",
      answer:
        "The pilot currently serves families within our local district and nearby neighborhoods. Enter your address in the form and we will quickly confirm eligibility.",
    },
    {
      question: "How much does each meal cost?",
      answer:
        "Pilot pricing is shared after signup confirmation. Families pay a refundable deposit to reserve a limited spot, then choose a meal plan that fits their needs.",
    },
    {
      question: "Can I pause or cancel delivery?",
      answer:
        "Yes. We offer flexible scheduling during the pilot, including pauses and cancellations with notice. Full policy details are provided during onboarding.",
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
              Healthy meals for your child, Monday through Wednesday. FuelID
              Lunch Delivery ships one fresh weekly package with locally
              sourced, nutritious lunches right to your home or preferred
              drop-off point.
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
              <p className="schedule-title">Weekly shipment schedule</p>
              <ul>
                <li>Ships once weekly</li>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
              </ul>
            </div>
          </div>

          <div className="hero-images">
            <Image
              className="hero-photo"
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
              alt="Fresh vegetables arranged on a rustic table from a local farm."
              width={1200}
              height={800}
              sizes="(max-width: 980px) 100vw, 45vw"
              priority
            />
            <Image
              className="hero-photo"
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
                grade, and dietary preferences through our simple
                mobile-friendly form.
              </p>
            </article>
            <article className="card">
              <p className="step-number">2</p>
              <h3>We prep and ship weekly</h3>
              <p>
                Our team prepares balanced lunches using unprocessed ingredients
                and ships one weekly package to cover Monday, Tuesday, and
                Wednesday meals.
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
            We are currently using these Momables meals for our Monday-Tuesday-
            Wednesday pilot menu.
          </p>
          <div className="menu-grid">
            {sampleLunches.map((lunch) => (
              <article className="card menu-card" key={lunch.day}>
                <Image
                  className="menu-card-image"
                  src={lunch.imageUrl}
                  alt={lunch.imageAlt}
                  width={900}
                  height={700}
                  sizes="(max-width: 980px) 100vw, 30vw"
                />
                <p className="menu-day">{lunch.day}</p>
                <h3>{lunch.title}</h3>
                <p>{lunch.description}</p>
                <p className="menu-link-row">
                  <a
                    href={lunch.recipeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="menu-link"
                  >
                    View meal details
                  </a>
                </p>
              </article>
            ))}
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
              Lunches are shipped once each week and intended to cover Monday,
              Tuesday, and Wednesday meals. Deposit amount and full terms are
              shared during confirmation.
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
            Join the FuelID pilot today and give your child the gift of
            fresh, nutritious lunches.
          </h2>
          <a href="#signup" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
