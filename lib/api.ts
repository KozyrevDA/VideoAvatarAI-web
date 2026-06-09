const BASE = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.videoavataraii.com'

async function req<T>(
  path: string,
  opts: RequestInit = {},
  token?: string,
): Promise<T> {
  const res = await fetch(`${BASE}/api${path}`, {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...opts.headers,
    },
  })
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`)
  return res.json()
}

export const api = {
  // Auth
  register: (body: { email?: string; provider?: string }) =>
    req<{ userId: string; accessToken: string; tokensCount: number }>('/users/register', {
      method: 'POST', body: JSON.stringify(body),
    }),

  profile: (token: string) =>
    req<{ userId: string; tokensCount: number; isPro: boolean; voiceCloned: boolean }>(
      '/users/profile', {}, token,
    ),

  // Avatar
  generateAvatar: (token: string, body: {
    photoBase64: string; text: string; style?: string; platform?: string; language?: string; voiceId?: string
  }) => req<{ taskId: string; status: string }>('/avatar/generate', {
    method: 'POST', body: JSON.stringify(body),
  }, token),

  checkStatus: (token: string, id: string) =>
    req<{ status: string; videoUrl?: string; progress?: number }>(`/generation/${id}/status`, {}, token),

  // Text
  generateText: (token: string, body: { topic: string; platform: string; tone: string }) =>
    req<{ text: string; hashtags: string[] }>('/text/generate', {
      method: 'POST', body: JSON.stringify(body),
    }, token),

  // Ideas
  generateIdeas: (token: string, body: { niche: string; platform: string; count: number }) =>
    req<{ ideas: string[] }>('/ideas/generate', {
      method: 'POST', body: JSON.stringify(body),
    }, token),

  // History
  history: (token: string) =>
    req<Array<{ id: string; type: string; title: string; status: string; videoUrl?: string; createdAt: string }>>(
      '/history', {}, token,
    ),
}
