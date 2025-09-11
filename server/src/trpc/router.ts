import { helloController } from '../../api/hello/controller'
import { router } from '.'

export const appRouter = router({
	helloController,
})

export type AppRouter = typeof appRouter
