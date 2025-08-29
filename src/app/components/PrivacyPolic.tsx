
export default function PrivacyPolicy() {
  return (
    <div className=" mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">
        Subidha respects your privacy and is committed to protecting the personal information you
        share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your
        information when you use our website, mobile application, and home service platform.
      </p>

      {/* Section 1 */}
      <div className="mb-8">
        <h2 className="bg-gray-100 px-4 py-2 font-semibold rounded">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mt-4">When you use our Services, we may collect the following types of information:</p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="mb-8">
        <h2 className="bg-gray-100 px-4 py-2 font-semibold rounded">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mt-4">We use the collected information to:</p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Provide and improve our home services</li>
          <li>Process bookings and payments</li>
          <li>Communicate with you (service updates, reminders, promotions)</li>
          <li>Verify identity and prevent fraud</li>
          <li>Improve user experience and website functionality</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="mb-8">
        <h2 className="bg-gray-100 px-4 py-2 font-semibold rounded">
          3. Data Retention
        </h2>
        <p className="text-gray-700 mt-4">
          We use industry-standard security measures (encryption, firewalls, secure servers) to
          protect your data. While we strive to safeguard your information, no method of transmission
          over the Internet is 100% secure.
        </p>
      </div>

      {/* Section 4 */}
      <div className="mb-8">
        <h2 className="bg-gray-100 px-4 py-2 font-semibold rounded">
          4. Contact Us
        </h2>
        <p className="text-gray-700 mt-4">
          If you have any questions or concerns about this Privacy Policy or how your data is
          handled, please contact us:
        </p>
        <div className="mt-4 space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Email:</span> syedsasmer@gmail.com
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +91 7602572653
          </p>
          <p>
            <span className="font-semibold">Address:</span> Kragachgrah, Saraitikar, Burdwan 713104
          </p>
        </div>
      </div>
    </div>
  );
}
