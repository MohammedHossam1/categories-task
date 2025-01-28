'use server'
import { defaultLocale } from "@/i18n/config";
import { cookies } from "next/headers";
const COOKIES_NAME = "NEXT_LOCALE";
export async function getUserLocale() {
    const cookiesStore = await cookies()
    return cookiesStore.get(COOKIES_NAME)?.value || defaultLocale
}

export async function setUserLocale(locale) {
    const cookiesStore = await cookies()
    cookiesStore.set(COOKIES_NAME, locale)
}