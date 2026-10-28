function Button({ className = "", btn }) {
  return (
    <button
      type="button"
      className={`cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${className}`}
    >
      {btn}
    </button>
  )
}

export default Button
