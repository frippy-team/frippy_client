export default function Page() {
  return (
    <>
      <div className="text-xl text-red-300">Tailwind 작동 확인</div>
      <div className="text-2xl" style={{ color: 'var(--frippy-blue)' }}>
        Tailwind 커스텀작동 확인
      </div>
      <div className="text-3xl" style={{ color: 'var(--frippy-green)' }}>
        Tailwind 커스텀작동 확인
      </div>
      <div className="text-3xl" style={{ color: 'var(--frippy-orange)' }}>
        Tailwind 커스텀작동 확인
      </div>
      <div className="text-3xl" style={{ color: 'var(--frippy-dark-gray)' }}>
        Tailwind 커스텀작동 확인
      </div>
      <div className="text-xl" style={{ color: 'var(--frippy-text-light)' }}>
        Tailwind 커스텀작동 확인
      </div>
      <header className="w-full flex justify-between items-center px-5 py-4 shadow-md">
        <h1 className="text-xl font-bold">My App</h1>
        <a
          href="http://localhost:8000/api/auth/google/login"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          로그인
        </a>
      </header>
    </>
  )
}
