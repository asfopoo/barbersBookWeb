import { createContext, useContext } from 'react'
import en from './en'
import es from './es'

export type Lang = 'en' | 'es'

export const DICTS = { en, es }

// The home page sets this from its route (/ or /es); everything below reads it.
export const LangContext = createContext<Lang>('en')

export function useLang(): Lang {
  return useContext(LangContext)
}

export function useT() {
  return DICTS[useLang()]
}
