import {serialize} from 'cookie'
import {testApiHandler} from 'next-test-api-route-handler'

describe('next-test-api-route-handler bug', () => {
    it('is a bug', async () => {
        await testApiHandler({
            handler: async (_req, res) => {
                res.setHeader('Set-Cookie', serialize('access_token', '1234'))
                res.setHeader('Set-Cookie', serialize('refresh_token', '5678'))
                res.status(204).end()
            },
            test: async ({fetch}) => {
                const response = await fetch({
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({})
                })

                expect(response.headers.get('Set-Cookie')).not.toEqual('refresh_token=5678')
            },
        })
    })
})
