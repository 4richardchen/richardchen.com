import Head from 'next/head'

export default function Layout({ title = 'Richard Chen', children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta name="robots" content="noindex,nofollow,noarchive,none,nosnippet,max-image-preview:none,max-video-preview:none" />
        <title>{title}</title>
        <link rel="author" href="https://richardchen.com" />
        <meta name="keywords" content="richard,chen,richard chen,full stack developer,tech lead,tech supervisor,richardchen" />
        <meta name="description" content="Richard Chen is a fullstack developer and tech lead in New York City." />
        <meta property="og:title" content={title} />
        <meta property="profile:first_name" content="Richard" />
        <meta property="profile:last_name" content="Chen" />
        <meta property="profile:username" content="richardchen" />
        <meta property="profile:gender" content="male" />
        <meta property="og:description" content="Richard Chen is a full stack developer and tech lead in New York City." />
        <meta property="og:url" content="https://richardchen.com/" />
        <meta property="og:image" content="//lh6.googleusercontent.com/-dk7bDylCxqQ/AAAAAAAAAAI/AAAAAAAAAAA/ZYgTimb-rvM/s32-c/photo.jpg" />
        <meta property="og:image:secure_url" content="//lh6.googleusercontent.com/-dk7bDylCxqQ/AAAAAAAAAAI/AAAAAAAAAAA/ZYgTimb-rvM/s32-c/photo.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="32" />
        <meta property="og:image:height" content="32" />
        <meta property="og:type" content="website" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="/" />
      </Head>

      <main>{children}</main>
    </>
  )
}
