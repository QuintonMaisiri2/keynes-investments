export default function Page() {
const info = [
  {
    heading: "INTRODUCTION",
    text: [
      `Keynes Investments ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services (collectively, the "Services").`,
      `By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.`,
    ],
  },
  {
    heading: "INFORMATION WE COLLECT",
    text: [
      `We collect several types of information from and about users of our Services.`,
    ],
  },
  {
    heading: "PERSONAL INFORMATION",
    text: [
      `Personal Information is information that identifies you as an individual or relates to an identifiable individual. We may collect:`,
      `• Name`,
      `• Email address`,
      `• Phone number`,
      `• Mailing address`,
      `• Date of birth`,
      `• Financial information necessary for investment services`,
      `• Government-issued identification numbers`,
      `• Employment information`,
      `• Investment objectives and risk tolerance`,
    ],
  },
  {
    heading: "NON-PERSONAL INFORMATION",
    text: [
      `We also collect information that does not directly identify you, including:`,
      `• Browser and device information`,
      `• IP address`,
      `• Operating system`,
      `• Information collected through cookies and similar technologies`,
      `• Demographic data and other non-identifying information`,
      `• Aggregated data that does not reveal your identity`,
    ],
  },
  {
    heading: "HOW WE COLLECT YOUR INFORMATION",
    text: [],
  },
  {
    heading: "DIRECT COLLECTION",
    text: [
      `We collect information directly from you when you:`,
      `• Register for an account`,
      `• Complete your profile`,
      `• Subscribe to our newsletter`,
      `• Contact our customer support`,
      `• Participate in surveys or promotions`,
      `• Use our interactive tools and calculators`,
      `• Otherwise interact with our Services`,
    ],
  },
  {
    heading: "AUTOMATIC COLLECTION",
    text: [
      `We automatically collect certain information using cookies and similar technologies, such as:`,
      `• IP address`,
      `• Browser type and version`,
      `• Operating system`,
      `• Referring URL`,
      `• Pages visited`,
      `• Time spent on pages`,
      `• Date and time of visit`,
      `• Other analytical statistics`,
    ],
  },
  {
    heading: "INFORMATION FROM THIRD PARTIES",
    text: [
      `We may receive information about you from:`,
      `• Business partners`,
      `• Service providers`,
      `• Identity verification services`,
      `• Credit reporting agencies (with your consent)`,
      `• Public databases`,
    ],
  },
  {
    heading: "HOW WE USE YOUR INFORMATION",
    text: [
      `We may use the information we collect to:`,
      `• Provide, maintain, and improve our Services`,
      `• Process transactions`,
      `• Verify your identity and prevent fraud`,
      `• Send administrative messages`,
      `• Respond to your inquiries`,
      `• Deliver personalized content`,
      `• Send marketing communications (with opt-out rights)`,
      `• Monitor usage and trends`,
      `• Prevent fraud and illegal activities`,
      `• Comply with legal obligations`,
      `• Protect users and our organization`,
    ],
  },
  {
    heading: "HOW WE SHARE YOUR INFORMATION",
    text: [],
  },
  {
    heading: "SERVICE PROVIDERS",
    text: [
      `We may share your information with third-party vendors and service providers for services such as:`,
      `• Payment processing`,
      `• Data analysis`,
      `• Email delivery`,
      `• Hosting`,
      `• Customer service`,
    ],
  },
  {
    heading: "BUSINESS TRANSFERS",
    text: [
      `Your information may be transferred in connection with a merger, acquisition, financing, or sale of assets.`,
    ],
  },
  {
    heading: "LEGAL REQUIREMENTS",
    text: [
      `We may disclose your information to:`,
      `• Comply with legal obligations`,
      `• Defend our rights and property`,
      `• Prevent fraud or illegal activity`,
      `• Protect user safety or public safety`,
      `• Prevent legal liability`,
    ],
  },
  {
    heading: "WITH YOUR CONSENT",
    text: [
      `We may share your information with third parties when we have your consent to do so.`,
    ],
  },
  {
    heading: "DATA SECURITY",
    text: [
      `We implement measures to secure your personal information from accidental loss and unauthorized access, use, alteration, and disclosure.`,
      `However, no method of transmission over the internet is completely secure. You transmit personal information at your own risk.`,
    ],
  },
  {
    heading: "DATA RETENTION",
    text: [
      `We retain your information as long as necessary to provide Services, comply with legal obligations, resolve disputes, and enforce agreements.`,
    ],
  },
  {
    heading: "COOKIES AND TRACKING TECHNOLOGIES",
    text: [],
  },
  {
    heading: "COOKIES",
    text: [
      `We use session and persistent cookies to:`,
      `• Improve our Services`,
      `• Track usage and trends`,
      `• Enhance user experience`,
    ],
  },
  {
    heading: "DO NOT TRACK",
    text: [
      `Our Services do not currently respond to "Do Not Track" signals due to differing interpretations among browsers.`,
    ],
  },
  {
    heading: "YOUR CHOICES",
    text: [
      `You may choose to disable cookies in your browser settings, but some features of our Services may not function properly.`,
    ],
  },
  {
    heading: "THIRD-PARTY LINKS",
    text: [
      `Our Services may contain links to third-party sites. We are not responsible for their privacy practices. Please review their privacy policies.`,
    ],
  },
  {
    heading: "CHILDREN'S PRIVACY",
    text: [
      `Our Services are not intended for children under 18. We do not knowingly collect personal information from minors.`,
      `If we discover we collected personal data from a child under 18 without parental consent, we will delete it.`,
    ],
  },
  {
    heading: "INTERNATIONAL DATA TRANSFERS",
    text: [
      `Your information may be stored and processed in the United States or other jurisdictions with different data protection laws.`,
      `By using our Services, you consent to such transfers.`,
    ],
  },
  {
    heading: "YOUR RIGHTS AND CHOICES",
    text: [],
  },
  {
    heading: "ACCESS AND UPDATE",
    text: [
      `You can access and update your account information through your account settings.`,
    ],
  },
  {
    heading: "MARKETING COMMUNICATIONS",
    text: [
      `You can opt out of receiving marketing emails via the unsubscribe link. You may still receive service-related emails.`,
    ],
  },
  {
    heading: "CALIFORNIA PRIVACY RIGHTS",
    text: [
      `California residents may have rights under the California Consumer Privacy Act (CCPA). See our California Privacy Notice for more details.`,
    ],
  },
  {
    heading: "EUROPEAN PRIVACY RIGHTS",
    text: [
      `EEA residents have rights under the General Data Protection Regulation (GDPR), including access, correction, deletion, and data portability.`,
    ],
  },
  {
    heading: "CHANGES TO THIS PRIVACY POLICY",
    text: [
      `We may update this Privacy Policy from time to time. Material changes will be communicated via email or our website.`,
      `The "Last Updated" date will reflect the most recent version.`,
    ],
  },
  {
    heading: "CONTACT INFORMATION",
    text: [
      `If you have any questions about this Privacy Policy or our privacy practices, please contact us at:`,
      `Keynes Investments`,
      `Email: [Insert Contact Email]`,
    ],
  },
];



  return (
    <div className="font-ebgaramond text-brown">
      <div className="bg-brown text-7xl px-12 pt-4 h-[20vh] text-white">
        Privacy Policy
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
