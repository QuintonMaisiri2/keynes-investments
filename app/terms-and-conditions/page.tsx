export default function Page() {
const info = [
  {
    heading: "INTRODUCTION",
    text: [
      `Welcome to Keynes Investments ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of the Keynes Investments website, mobile application, and services (collectively, the "Services").`,
      `By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.`,
    ],
  },
  {
    heading: "ELIGIBILITY",
    text: [
      `You must be capable of forming a legally binding contract to use our Services.`,
      `By using our Services, you represent and warrant that you meet these requirements.`,
    ],
  },
  {
    heading: "ACCOUNT REGISTRATION",
    text: [
      `To access certain features of our Services, you may need to register for an account.`,
      `You agree to provide accurate, current, and complete information and to update this information to maintain its accuracy.`,
      `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.`,
      `Notify us immediately of any unauthorized use of your account or any other breach of security.`,
    ],
  },
  {
    heading: "INVESTMENT INFORMATION AND ADVISORY SERVICES",
    text: [
      `The information provided through our Services is for informational and educational purposes only and should not be construed as financial advice.`,
      `All investments involve risk, including possible loss of principal. Past performance is not indicative of future results.`,
      `Our Services may include content from third-party sources. We do not endorse or guarantee the accuracy of any third-party content.`,
    ],
  },
  {
    heading: "SUBSCRIPTION SERVICES",
    text: [
      `If you subscribe to our premium services, you agree to pay all associated fees. Fees are non-refundable except as required by law.`,
      `Subscriptions renew automatically unless canceled before the renewal date. You may cancel via your account settings.`,
      `We reserve the right to change fees at any time with advance notice.`,
    ],
  },
  {
    heading: "INTELLECTUAL PROPERTY",
    text: [
      `All content on our Services is the property of Keynes Investments or its content suppliers and is protected by international laws.`,
      `We grant you a limited, non-exclusive, non-transferable license to use our Services for personal, non-commercial purposes.`,
      `You may not reproduce, distribute, or exploit our content without our permission.`,
    ],
  },
  {
    heading: "USER CONDUCT",
    text: [
      `You agree not to violate laws, infringe rights, or upload harmful content.`,
      `Do not attempt to gain unauthorized access to our systems or interfere with our Services.`,
    ],
  },
  {
    heading: "TERMINATION",
    text: [
      `You may terminate your account at any time.`,
      `We may suspend or terminate your account at our discretion if you violate these Terms or pose a risk to us or others.`,
    ],
  },
  {
    heading: "DISCLAIMER OF WARRANTIES",
    text: [
      `Our Services are provided "as is" and "as available" without warranties of any kind.`,
      `We do not guarantee uninterrupted, timely, or error-free service.`,
    ],
  },
  {
    heading: "LIMITATION OF LIABILITY",
    text: [
      `Keynes Investments is not liable for indirect, incidental, or consequential damages.`,
      `Total liability is limited to the greater of the amount you paid us in the last six months or $100.`,
    ],
  },
  {
    heading: "INDEMNIFICATION",
    text: [
      `You agree to indemnify and hold Keynes Investments harmless from any claims arising from your use of our Services or your violation of these Terms.`,
    ],
  },
  {
    heading: "CHANGES TO TERMS",
    text: [
      `We may modify these Terms at any time. Updates will be posted with a revised "Last Updated" date.`,
      `Continued use of our Services after changes means you accept the new Terms.`,
    ],
  },
  {
    heading: "GOVERNING LAW AND DISPUTE RESOLUTION",
    text: [
      `These Terms are governed by the laws of [Jurisdiction].`,
      `Disputes will be resolved by binding arbitration under the rules of the American Arbitration Association in [City, State/Country].`,
      `You waive the right to participate in class actions.`,
    ],
  },
  {
    heading: "SEVERABILITY",
    text: [
      `If any part of these Terms is found invalid or unenforceable, the remaining provisions will remain in effect.`,
    ],
  },
  {
    heading: "ENTIRE AGREEMENT",
    text: [
      `These Terms are the entire agreement between you and Keynes Investments and supersede all prior communications.`,
    ],
  },
  {
    heading: "CONTACT INFORMATION",
    text: [
      `If you have any questions, please contact us at:`,
      `Keynes Investments`,
    ],
  },
];


  return (
    <div className="font-ebgaramond text-brown">
      <div className="bg-brown text-7xl px-12 pt-4 h-[20vh] text-white">
        Terms and Conditions
      </div>
      <div className=" px-12 py-8">
        <p className="mb-8">Last updated: May 16, 2025</p>
        {info.map((item, index)=>{
            return <div key={index} className="space-y-2 mb-10">
                <h2 className="text-4xl">{index + 1}. {item.heading}</h2>
                {item.text.map((text, index)=>{
                    return <p className="text-lg" key={index}>
                        {text}
                    </p>
                })}
            </div>
        })}
      </div>
    </div>
  );
}
