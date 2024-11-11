
export const Globalmessage = ({ message, theme }: { message: string, theme: string }) => {
  if (!message) return
  return (
    <p
      className={`text-center ${theme} p-2 rounded-lg transition-opacity duration-500 
            ${message ? "opacity-100" : "opacity-0"
        }`}
    >
      {message}
    </p>

  )
}
