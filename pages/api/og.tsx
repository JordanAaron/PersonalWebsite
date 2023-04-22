import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
  unstable_allowDynamic: [
    '/node_modules/core-js/**',
    '/node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js'
  ] // Added this following : https://nextjs.org/docs/messages/edge-dynamic-code-evaluation
}

export default function (): ImageResponse {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          Hello world!
        </div>
      )
    )
  } catch (e) {
    console.log(`${(e as Error).message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
