import { getAPIKey } from "../api/auth"
import {describe, expect, test} from "vitest"

describe("getAPIKey", () => {
  test("must return an API key", () => {
    const mockApiKey =  "ApiKey 123"
    const apiKey  = getAPIKey({
      "authorization": mockApiKey
    })

    expect(apiKey).toBeTruthy()
    expect(apiKey).toBe(mockApiKey.split(" ")[0])
  })
})