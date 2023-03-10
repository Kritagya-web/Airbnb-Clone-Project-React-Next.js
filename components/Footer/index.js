const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">CONTACT</h5>
        <p>Kritagya developer</p>
        <a
          href="https://www.linkedin.com/in/kritagya-kumra-bba9b41b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="cursor-pointer mt-4 animate-bounce font-bold">
            Linkedin
          </p>
        </a>
        <a
          href="https://github.com/Kritagya-web"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="cursor-pointer mt-4 animate-bounce font-bold">Github</p>
        </a>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Acessibility</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>hey ho, let&apos;s go</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Kritagya dev</p>
        <p>Presents</p>
        <p>Airbnb</p>
        <p>UI-Clone</p>
        <p>enjoy</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">BUILT WITH</h5>
        <p>Next.JS</p>
        <p>TailwindCSS</p>
        <p>SSR</p>
        <p>fun</p>
        <p>love ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
