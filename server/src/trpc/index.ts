import { initTRPC } from '@trpc/server'

import type { TRPCContext } from './context'

export const t = initTRPC.context<TRPCContext>().create()

export const router = t.router
export const publicProcedure = t.procedure
export const publicMiddleware = t.middleware
