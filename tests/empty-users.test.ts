
import { test, expect } from '@playwright/test';
import {StatusCodes} from "http-status-codes";
let baseURL: string = 'http://localhost:3000/users';
import ( StatusCodes)

test.describe('No users tests', () => {
    test('GET / - should return empty when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect (response.status()).toBe(StatusCodes.BAD_REQUEST);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });
})
