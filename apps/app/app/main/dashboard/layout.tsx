export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="dashboard">{children}</div>
  )
}
