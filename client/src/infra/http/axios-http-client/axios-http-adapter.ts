import axios from 'axios'
import { HttpResponse } from 'data/protocols/http/http-response'
import { HttpPostClient, HttpPostParams } from '../../../data/protocols/http/http-post-client'

export class AxiosHttpAdapter implements HttpPostClient<any, any> {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
