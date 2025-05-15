"use client";

import Image from "next/image";
import PageHeader from "@/components/pageHeader/PageHeader";
import Link from "next/link";
import "./about.css";

const founders = [
  {
    name: "Bart Bathelemy",
    role: "Founder/Executive Director",
    image: "/usaTeamImg/director.jpg",
  },
  {
    name: "Karen Williams Barthelemy",
    role: "President/CEO",
    image: "/usaTeamImg/woman.jpg",
  },
  {
    name: "Carl Gaertner",
    role: "Vice President/COO",
    image: "/usaTeamImg/man.png",
  },
];

const teamNigeria = [
  {
    name: "Sr. Mary Emilia Aboekwe IHM PhD",
    role: "Ambassador GodLight Empowerment Foundation",
    image: "/ngTeamImg/sister.jpg",
  },
  {
    name: "Onyekachi Cosmas Agubueze",
    role: "Executive Secretary/ICT Manager",
    image: "/ngTeamImg/onyeka.jpg",
  },
  {
    name: "Rev. Fr. Barrister Joe Ben Onyia",
    role: "Legal Adviser",
    image: "/ngTeamImg/father.jpg",
  },
];

export default function Page() {
  return (
    <div>
      <PageHeader title="GodLight Overview" pageImage="/page3.avif" />
      <section className="overview-section">
        <div className="overview-section__main">
          <div className="overview-section__text">
            <h2>GodLight Empowerment Foundation</h2>
            <p>
              <strong>GodLight Empowerment Foundation</strong> is a nonprofit organization and the official African
              extension of the <strong>GodLight Foundation</strong>, founded by <strong>Dr. Bart Barthelemy</strong>. Rooted in the
              core principles of spiritual awakening and personal transformation, the Empowerment foundation
              is committed to guiding individuals through a deeper exploration of their faith, purpose, and
              connection to God through the concept of Light.
            </p>
            <p>
              Led by GodLight Ambassador <strong>Rev. Sr. Mary Emilia Aboekwe, PhD (IHM)</strong>, the foundation ensures that the original 
              vision is faithfully adapted to the local context. Through community-driven programs, spiritual workshops, 
              and outreach initiatives, the foundation supports individuals—especially those facing life challenges—by 
              offering a safe space for healing, learning, and spiritual growth.
            </p>
            <p>
              GodLight Empowerment embraces <strong>Dr. Barthelemy’s</strong> holistic understanding of Light—as external divine presence, 
              spiritual illumination, and personal inner radiance—encouraging individuals to embrace their own spiritual 
              path and share that Light with others. At its core, the foundation nurtures love, compassion, and unity across communities in Nigeria and beyond.
            </p>
            <div
              className="overview-section__image"
              role="img"
              aria-label="Smiling team at a GodLight community event"
            >
              <Image
                src="/Saccc.jpg"
                alt="Smiling team at a GodLight community event"
                width={900}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="overview-section__highlight">
            <div className="about-section__grid first__founder">
              {founders.length > 0 && (
                <div className="about-section__card">
                  <Image
                    src={founders[0].image}
                    alt={founders[0].name}
                    width={200}
                    height={200}
                    sizes="(max-width: 768px) 100vw, 200px"
                    className="about-section__image"
                  />
                  <h3 className="about-section__name">{founders[0].name}</h3>
                  <p className="about-section__role">{founders[0].role}</p>
                </div>
              )}
            </div>
            <div className="overview-section__highlight-box overview-section__highlight--purpose">
              <h3>OUR MISSION</h3>
              <p>
                Our mission is to empower and uplift young Nigerians through innovative educational programs, 
                scholarships, and health outreach initiatives, while fostering personal and community development with 
                the support of the GodLight Foundation. As an offshoot of the GodLight Foundation, we strive to create opportunities for 
                enlightenment, growth, and sustainable change, enabling the youth to become active agents of transformation in their communities and beyond.  
              </p>
            </div>
            <div className="overview-section__highlight-box overview-section__highlight--vision">
              <h3>OUR VISION</h3>
              <p>
                Our vision is to see a Nigeria where every young individual is inspired and equipped to pursue 
                their dreams, contribute positively to society, and lead a life of purpose and fulfillment. Aligned 
                with the vision of the GodLight Foundation, we aim to build a future where education, health, and 
                personal empowerment are accessible to all, creating a generation of informed, responsible, and 
                proactive leaders.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="gnf-section">
        <div className="gnf-section__main">
          <div className="gnf-section__text">
            <h2>GodLight Foundation</h2>
            <p>
              The <strong>GodLight Foundation, established by Dr. Bart Barthelemy</strong>, is a global nonprofit organization that integrates 
              spiritual insight with scientific discovery to explore the powerful connection between God and Light. Inspired by 
              Dr. Bart’s lifelong research and personal revelations, the foundation serves as a beacon for individuals seeking to understand 
              their creation, purpose, and divine relationship through both spiritual and intellectual inquiry.
            </p>
            <p>
              <strong>GodLight Foundation</strong> offers a supportive platform for people of all backgrounds to grow spiritually, reflect deeply, 
              and connect meaningfully with others. Through educational resources, engaging workshops, and community events, the 
              foundation encourages individuals to discover God’s Light as a guiding force within and around them.
            </p>
            <p>
              By promoting empathy, shared values, and spiritual empowerment, the <strong>GodLight Foundation</strong> fosters a global community 
              rooted in harmony, mutual respect, and the shared human pursuit of divine understanding.
            </p>
          <Link
              target="_blank"
              href="https://www.godlightsite.com/learn"
              className="flash-section__cta"
            >
              www.godlightsite.com
        </Link>
          </div>
         
            <div
              className="gnf-section__image"
              role="img"
              aria-label="Volunteers and beneficiaries at a GodLight Nigeria outreach"
            >
              <Image
                src="/foundation.jpg"
                alt="Volunteers and beneficiaries at a GodLight Nigeria outreach"
                width={500}
                height={300}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
        
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-section__container">
          <h2 className="about-section__title">GodLight Team - Global</h2>
          <div className="about-section__grid all__person">
            {founders.map((person, index) => (
              <div className="about-section__card" key={index}>
                <Image
                  src={person.image}
                  alt={person.name}
                  width={200}
                  height={200}
                  sizes="(max-width: 768px) 100vw, 200px"
                  className="about-section__image"
                />
                <h3 className="about-section__name">{person.name}</h3>
                <p className="about-section__role">{person.role}</p>
              </div>
            ))}
          </div>
          <h2 className="about-section__title">GodLight Team - Nigeria</h2>
          <div className="about-section__grid nigeria__person">
            {teamNigeria.map((person, index) => (
              <div className="about-section__card" key={index}>
                <Image
                  src={person.image}
                  alt={person.name}
                  width={200}
                  height={200}
                  sizes="(max-width: 768px) 100vw, 200px"
                  className="about-section__image"
                />
                <h3 className="about-section__name">{person.name}</h3>
                <p className="about-section__role">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}