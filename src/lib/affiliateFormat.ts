// Shared by the admin affiliate pages.
export const MIN_PAYOUT_USD = 25

export const INPUT = 'w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none'

export function usd(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}
