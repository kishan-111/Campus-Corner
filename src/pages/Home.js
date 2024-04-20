const Home = () => {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Compus Corner</h1>
        <p className="text-lg mb-6">
          Compus Corner is your one-stop destination for educational resources. Whether you're
          preparing for exams, looking for study materials, or just want to enhance your knowledge,
          we've got you covered!
        </p>
        <p className="text-lg mb-6">
          Browse through our collection of books, previous year question papers (PYQs), and study
          notes. Find resources tailored to your needs and level of expertise.
        </p>
        <p className="text-lg mb-6">
          We are committed to providing high-quality educational content to help you succeed in your
          academic and professional endeavors. Start exploring today!
        </p>
        <div className="flex items-center justify-center mb-8">
          <img src="/illustration.svg" alt="Illustration" className="w-64 h-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Books</h2>
            <p>Explore our vast collection of books covering various subjects and topics.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">PYQs</h2>
            <p>Access previous year question papers to practice and prepare for exams.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Notes</h2>
            <p>Find comprehensive study notes to aid in your learning and revision.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  