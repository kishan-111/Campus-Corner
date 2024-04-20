const ContactUs = () => {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg mb-6">
          We'd love to hear from you! Whether you have questions, feedback, or
          suggestions, feel free to reach out to us using the contact information
          below.
        </p>
        <div className="mb-6">
          <strong className="block mb-2">Email:</strong>
          <span className="text-gray-700">contact@compuscorner.com</span>
        </div>
        <div className="mb-6">
          <strong className="block mb-2">Phone:</strong>
          <span className="text-gray-700">+1234567890</span>
        </div>
        <div className="mb-6">
          <strong className="block mb-2">Address:</strong>
          <span className="text-gray-700">123 Main Street, City, Country</span>
        </div>
        <p className="mb-6">
          You can also fill out the form below to send us a message directly:
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 px-4 py-2 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 px-4 py-2 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
            <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 px-4 py-2 rounded-md"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
        </form>
      </div>
    );
  };
  
  export default ContactUs;
  