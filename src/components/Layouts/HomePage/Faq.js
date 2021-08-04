import { useState } from "react";
import Form from "../../UI/Form";

const Faq = () => {
  const [faq, setFaq] = useState([
    {
      q: "What is Netflix?",
      a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
      open: false,
    },
    {
      q: "How much does Netflix cost?",
      a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.",
      open: false,
    },
    {
      q: "Where can I watch?",
      a: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
      open: false,
    },
    {
      q: "How do I cancel?",
      a: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      open: false,
    },
    {
      q: "What can I watch on Netflix?",
      a: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      open: false,
    },
    {
      q: "is Netflix good for Kids?",
      a: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
      open: false,
    },
  ]);
  const toggleFaq = (index) => {
    setFaq(
      faq.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  return (
    <section className="faq">
      <div className="faq--heading">
        <h1>Frequently Asked Questions</h1>
      </div>
      {faq.map((items, index) => (
        <div className="faq--box">
          <div onClick={() => toggleFaq(index)} className="faq--box--questions">
            <p className="faq--box--questions__para">
              <p>{items.q}</p>
              <p
                className={`faq--box--questions__plus-btn ${
                  items.open && `rotate-btn`
                }`}
              >
                +
              </p>
            </p>
          </div>
          <div className={`faq--box--answers ${items.open && `open-answer`}`}>
            <p>{items.a}</p>
          </div>
        </div>
      ))}

      <Form className="faq--form" />
    </section>
  );
};
export default Faq;
