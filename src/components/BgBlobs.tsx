// Soft atmospheric blobs — purely decorative, aria-hidden.
// Positioned fixed so they persist across scroll without re-painting.
export default function BgBlobs() {
  return (
    <div className="bg-blobs" aria-hidden="true">
      {/* top-right periwinkle orb */}
      <div className="blob blob-1" />
      {/* bottom-left rose orb */}
      <div className="blob blob-2" />
      {/* mid-screen faint periwinkle */}
      <div className="blob blob-3" />
    </div>
  )
}
