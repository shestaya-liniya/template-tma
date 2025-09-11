import { publicProcedure, router } from '../../src/trpc'

export const helloController = router({
	greetings: publicProcedure.query(() => {
		return 'hello motherfucker'
	}),
})
