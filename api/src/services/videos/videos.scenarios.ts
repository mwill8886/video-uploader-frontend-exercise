import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.VideoCreateArgs>({
  video: {
    one: {
      data: {
        title: 'String',
        url: 'String',
        updatedAt: '2022-08-05T18:47:15Z',
        user: {
          create: {
            email: 'String4119256',
            name: 'String',
            updatedAt: '2022-08-05T18:47:15Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        url: 'String',
        updatedAt: '2022-08-05T18:47:15Z',
        user: {
          create: {
            email: 'String6436607',
            name: 'String',
            updatedAt: '2022-08-05T18:47:15Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
