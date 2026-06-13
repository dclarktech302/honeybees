import type {
  Release,
  RoyaltySummary,
  RoyaltyStatement,
  Artist,
  PlatformRevenue,
  DistributionChannel,
} from '@/lib/types'

const LABELGRID_BASE = process.env.LABELGRID_API_URL ?? 'https://api.labelgrid.com'
const LABELGRID_KEY = process.env.LABELGRID_API_KEY ?? ''

class LabelGridError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
    this.name = 'LabelGridError'
  }
}

async function lgFetch(path: string, init?: RequestInit): Promise<Response> {
  const res = await fetch(`${LABELGRID_BASE}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LABELGRID_KEY}`,
      ...init?.headers,
    },
  })
  if (!res.ok) {
    throw new LabelGridError(res.status, `LabelGrid API error: ${res.status} ${res.statusText}`)
  }
  return res
}

// TODO: GET /releases — see groups/releases
export async function getReleases(): Promise<Release[]> {
  void lgFetch
  return [
    {
      id: 'mock-release-1',
      title: 'Mock Single',
      artistId: 'mock-artist-1',
      artistName: 'Mock Artist',
      type: 'single',
      status: 'live',
      releaseDate: '2025-01-15',
      platforms: [],
    },
  ]
}

// TODO: GET /releases/{release} — see groups/releases
export async function getRelease(id: string): Promise<Release> {
  void lgFetch
  return {
    id,
    title: 'Mock Release',
    artistId: 'mock-artist-1',
    artistName: 'Mock Artist',
    type: 'single',
    status: 'live',
    releaseDate: '2025-01-15',
    platforms: [],
  }
}

// TODO: POST /releases — see groups/releases
export async function createRelease(data: Partial<Release>): Promise<Release> {
  void lgFetch
  return {
    id: 'mock-new-release',
    title: data.title ?? 'Untitled',
    artistId: data.artistId ?? '',
    artistName: data.artistName ?? '',
    type: data.type ?? 'single',
    status: 'draft',
    releaseDate: data.releaseDate ?? new Date().toISOString().split('T')[0],
    platforms: data.platforms ?? [],
    labelgridId: undefined,
  }
}

// TODO: aggregate from /statements — see groups/statements
// Confirm exact list/filter params against live docs before wiring up
export async function getRoyaltySummary(days: 30 | 90 | 365): Promise<RoyaltySummary> {
  void lgFetch
  return {
    totalRevenue: 0,
    artistRoyaltiesOwed: 0,
    pendingPayouts: 0,
    labelRetained: 0,
    periodDays: days,
    revenueByPlatform: [],
    topArtists: [],
  }
}

// TODO: GET /statements — see groups/statements
export async function getRoyaltyStatements(artistId?: string): Promise<RoyaltyStatement[]> {
  void lgFetch
  void artistId
  return []
}

// TODO: GET /artists — see groups/artists
export async function getArtists(): Promise<Artist[]> {
  void lgFetch
  return []
}

// TODO: GET /analytics — see groups/analytics
export async function getAnalyticsStreams(days: number): Promise<PlatformRevenue[]> {
  void lgFetch
  void days
  return []
}

// TODO: GET /distro-queue — see groups/distro-queue
export async function getDistributionStatus(): Promise<DistributionChannel[]> {
  void lgFetch
  return []
}
