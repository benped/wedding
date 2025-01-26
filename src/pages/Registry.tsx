const Registry = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      <p className="text-lg text-sage-green font-serif mb-4">We are registered on <i>The Knot</i> at the link below:</p>
      <a
        href="https://www.theknot.com/us/emma-johnson-and-benjamin-pedrick-may-2025/registry"
        className="text-sage-green hover:text-sage-green/80 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Our Registry
      </a>
    </div>
  );
};

export default Registry;