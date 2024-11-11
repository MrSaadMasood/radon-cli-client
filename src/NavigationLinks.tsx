
function NavigationLinks() {
  return (
    <nav className="flex space-x-6">
      {[
        {
          text: "Radon Source Code",
          link: "https://github.com/MrSaadMasood/radon"
        },
        {
          text: "npm package",
          link: "https://www.npmjs.com/package/radon-cli"
        },
        {
          text: "LinkedIn",
          link: "https://www.linkedin.com/in/saad-masood-8b100125b/"
        }
      ].map((info) => (
        <a
          key={info.text}
          href={info.link}
          target="_blank"
          className="text-white bg-black px-4 py-2 text-xs sm:text-sm rounded-full flex items-center space-x-2 hover:bg-gray-800"
        >
          <span>{info.text}</span>
          <span className="text-xl transform rotate-150">→</span>
        </a>
      ))}
    </nav>
  )
}

export default NavigationLinks  
